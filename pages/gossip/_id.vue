<template>
  <div class="wrapper tc-detail">
    <div class="fl left-list">
      <div class="tc-detail">
        <!-- 标题区 -->
        <div class="detail-tit">
          <div class="detail-author">
            <a href="javascript:;">{{ pojo.nickname }}</a> 发布
          </div>
          <div class="detail-content">
            <p v-html="pojo.content"></p>
          </div>
          <div class="detail-tool">
            <ul>
              <li>
                <span class="star"
                  ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  {{ pojo.thumbup }}</span
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-share-alt" aria-hidden="true"></i>
                  {{ pojo.share }}</a
                >
              </li>
              <li>
                <a
                  @click="
                    dialogVisible = true;
                    content = '';
                  "
                  ><i class="fa fa-commenting" aria-hidden="true"></i>
                  《--评论点击这里， 已有{{ pojo.comment }}评论</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- 评论区 -->
        <div class="comment-area">
          <div class="comment-tit">
            <span>评论</span>
          </div>
          <ul class="comment-list">
            <li v-for="(item, index) in commentlist" :key="index">
              <div class="item-photo">
                <img src="~/assets/img/widget-widget-photo.png" alt="" />
              </div>
              <div class="item-content">
                <p class="author"><a href="javascript:;">匿名</a> 发布</p>
                <p class="content" v-html="item.content"></p>
              </div>
              <div class="item-thumb">
                <div>
                  <i
                    class="fa fa-thumbs-o-up"
                    aria-hidden="true"
                    @click="thumbup(item._id, index)"
                  ></i>
                  {{ item.thumbup }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fl right-tag" v-show="user.name !== undefined">
      <div class="block-btn">
        <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
        <router-link class="sui-btn btn-block btn-share" to="/gossip/submit"
          >发吐槽</router-link
        >
      </div>
    </div>
    <div class="fl right-tag" v-show="user.name === undefined">
      <div class="block-btn">
        <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
        <router-link class="sui-btn btn-block btn-share" to="/login"
          >去登录发布</router-link
        >
      </div>
    </div>
    <div class="clearfix"></div>

    <el-dialog title="评论" :visible.sync="dialogVisible" width="40%">
      <div
        class="quill-editor"
        :content="content"
        @change="onEditorChange($event)"
        v-quill:myQuillEditor="editorOption"
      ></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import '~/assets/css/page-sj-spit-detail.css'
import gossipApi from '@/api/gossip'
import axios from 'axios'
import { getUser } from '@/utils/auth'
export default {
  asyncData ({ params }) {
    return axios.all([gossipApi.findById(params.id), gossipApi.commentlist(params.id)]).then(
      axios.spread(function (pojo, commentlist) {
        return {
          pojo: pojo.data.data,
          commentlist: commentlist.data.data
        }
      })
    )
  },
  created () {
    this.user = getUser()
  },
  data () {
    return {
      dialogVisible: false,
      content: '',
      user: {},
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large'] }],
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image']
          ]
        }
      }
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
    save () {
      gossipApi.save({ content: this.content, parentid: this.pojo._id }).then(res => {
        if (res.data.code === 200) {
          this.dialogVisible = false //关闭窗口
          //刷新数据
          gossipApi.commentlist(this.pojo._id).then(res => {
            this.commentlist = res.data.data
          })
        }
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })

      })
    },
    thumbup (id, index) {
      console.log(id)
      //判断用户是否登陆
      if (getUser().name === undefined) {
        this.$message({
          message: '必须登陆才可以点赞哦~',
          type: 'warning'
        })
        return
      }
      gossipApi.thumbup(id).then(res => {
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
        location.href = '/gossip/' + this.pojo._id
      })
    }
  }

}
</script>

<style>
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
