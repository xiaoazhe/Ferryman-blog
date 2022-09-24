<template>
  <!--两列布局-->
  <div class="wrapper qa-content">
    <div class="qa-title">
      <div class="fl title">
        <h2>{{ problem.title }}}</h2>
        <p>
          <span class="tag" v-show="problem.solve === '0'">未解决</span>
          <span class="tag" v-show="problem.solve === '1'">已解决</span>
          <span class="author">{{ problem.nickname }}</span>
          <span>{{ problem.createTime }}提问</span>
        </p>
      </div>
      <div class="fr share">
        <h4>分享到：</h4>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="fl left-list">
      <div class="problem-detail">
        <div class="title-intro" v-infinite-scroll="loadMore">
          <div class="sidebar">
            <button
              type="button"
              class="like"
              data-placement="right"
              data-toggle="tooltip"
              title="问题对人有帮助，内容完整，我也想知道答案"
            >
              <i class="fa fa-caret-up" aria-hidden="true"></i>
            </button>
            <span class="count">*</span>
            <button
              type="button"
              class="hate"
              data-placement="right"
              data-toggle="tooltip"
              title="问题没有实际价值，缺少关键内容，没有改进余地"
            >
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <div class="title">
            <div class="detail">
              <div v-html="problem.content"></div>
            </div>
            <div class="clearfix"></div>
            <div class="operate">
              <span class="comment" @click="addComment">评论</span>
              <span class="jubao" @click="setCollect(problem.id)">收藏</span>
              <span class="jubao" @click="good(problem.id)">点赞有用</span>
            </div>
            <div class="comment-box">
              <form class="comment-form">
                <textarea
                  row="1"
                  placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"
                ></textarea>
                <button type="submit" class="sui-btn submit-comment">
                  提交评论
                </button>
              </form>
              <div class="tips">
                <p>
                  评论支持部分 Markdown
                  语法：**bold**_italic_[link](http://example.com)> 引用`code`-
                  列表。 同时，被你 @ 的用户也会收到通知
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="answer-intro"
          v-for="(item, index) in replyList"
          :key="index"
        >
          <h4 class="answer-num">{{ item.createTime }}</h4>

          <div class="sidebar">
            <button
              type="button"
              class="like"
              data-placement="right"
              data-toggle="tooltip"
              title="问题对人有帮助，内容完整，我也想知道答案"
            >
              <i class="fa fa-caret-up" aria-hidden="true"></i>
            </button>
            <span class="count">{{ index }}</span>
            <button
              type="button"
              class="hate"
              data-placement="right"
              data-toggle="tooltip"
              title="问题没有实际价值，缺少关键内容，没有改进余地"
            >
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <div class="title">
            <p v-html="item.content"></p>
            <div class="operate">
              <div class="tool pull-left">
                <span class="jubao">举报</span>
              </div>
              <div class="tool pull-left">
                <span
                  class="jubao"
                  v-show="item.nickname === user.name"
                  @click="delectReply(item.id)"
                  >删除</span
                >
              </div>
              <div class="myanswer pull-right">
                <img :src="user.avatar" alt="" />
                <a href="#">{{ item.nickname }}回答</a>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="comment-box">
              <form class="comment-form">
                <textarea
                  row="1"
                  placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"
                ></textarea>
                <button type="submit" class="sui-btn submit-comment">
                  提交评论
                </button>
              </form>
              <div class="tips">
                <p>
                  评论支持部分 Markdown
                  语法：**bold**_italic_[link](http://example.com)> 引用`code`-
                  列表。 同时，被你 @ 的用户也会收到通知
                </p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    <el-dialog title="回答" :visible.sync="operation">
      <div class="wrapper release-tc">
        <div class="release-box">
          <h3>回复评论</h3>
          <div class="editor">
            <div
              class="quill-editor"
              :content="content"
              @change="onEditorChange($event)"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
              v-quill:myQuillEditor="editorOption"
            ></div>
            <div class="btns">
              <button class="sui-btn btn-danger btn-release" @click="save">
                回复
              </button>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </el-dialog>
    <div class="fl right-tag">
      <div class="similar-problem">
        <h3 class="title">相似问题</h3>
        <ul
          class="problem-list"
          v-for="(item, index) in similarList"
          :key="index"
        >
          <li class="list-item">
            <p class="list-title">
              <a :href="'/problem/problem/' + item.id" target="_blank">{{
                item.title
              }}</a>
            </p>
            <p class="list-info">
              {{ item.reply }}回答 |
              <span v-show="item.solve === 1">已解决</span>
              <span v-show="item.solve !== 1">未解决</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import '~/assets/css/page-sj-qa-detail.css'
import { getUser } from '@/utils/auth'
import { quillRedefine } from 'vue-quill-editor-upload'
import problemApi from '@/api/problem'
import replyApi from '@/api/reply'

export default {
  created () {
    this.getReplyList(),
      this.getSimilarById(),
      this.user = getUser(),
      this.editorOption = quillRedefine({
        uploadConfig: {
          action: 'http://localhost:8001/file/images',
          res: (response) => {
            return response.msg
          },
          name: 'file'  //图片上传参数
        }
      })
  },
  asyncData ({ params }) {
    return problemApi.getById(params.id).then(res => {
      return {
        problem: res.data.data,
      }
    })
  },
  data () {
    return {
      content: '',
      operation: false,
      replyList: [],
      user: {},
      similarList: [],
      totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 10, // 每页显示数量
      currentPageData: [] //当前页显示内容
    }
  },
  methods: {
    getReplyList () {
      replyApi.getByProId(this.problem.id, this.currentPage, this.pageSize).then(res => {
        this.replyList = res.data.data.content
      })
    },
    getSimilarById () {
      problemApi.getSimilarById(this.problem.id).then(res => {
        this.similarList = res.data.data
      })
    },
    addComment: function () {
      this.operation = true
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
    save () {
      replyApi.save({ content: this.content, problemid: this.problem.id, nickname: this.user.name }).then(res => {
        this.operation = false
        location.href = '/problem/problem/' + this.problem.id
      })
    },
    delectReply (id) {
      replyApi.delectComment(id).then(res => {
        location.href = '/problem/problem/' + this.problem.id
      })
    },
    good (id) {
      problemApi.good(id).then(res => {
        if (res.data.msg === '点赞成功') {
          location.href = '/problem/problem/' + this.problem.id
        } else {
          this.$message({
            message: res.data.msg,
            type: ('error')
          })
        }
      })
    },
    setCollect (id) {
      problemApi.setCollect(id, 2).then(res => {
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    },
    loadMore () {
      this.currentPage++
      replyApi.getByProId(this.problem.id, this.currentPage, this.pageSize).then(res => {
        this.replyList = this.replyList.concat(res.data.data.content)
      })
    }
  }
}
</script>

<style>
.quill-editor {
  min-height: 500px;
  overflow-y: auto;
}
.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
}
</style>
