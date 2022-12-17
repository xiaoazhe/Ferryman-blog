<template>
  <!--两列布局-->
  <div class="wrapper headline-content">
    <div class="fl left-list">
      <div class="problem-detail">
        <!-- title area  -->
        <div class="title-intro">
          <h2>{{ blog.title }}</h2>
          <div class="operate">
            <span class="fl author"
              >{{ blog.author }}发布　　<span class="time">{{
                date
              }}</span></span
            >
            <span class="fr">收藏</span>
          </div>
<!--          <div class="clearfix">-->
<!--            <h2>{{ blog.summary }}</h2>-->
<!--          </div>-->
          <div class="content">
            <div v-html="blogValue"></div>
          </div>
        </div>
        <!-- remark area -->

        <div class="answer-intro">
          <h4 class="answer-num">评论</h4>
          <div class="comment-box" v-show="user.name !== undefined">
            <form class="comment-form sui-form form-inline">
              <img src="~/assets/img/widget-photo.jpg" alt="" />
              <div class="input-prepend input-append input-box">
                <el-button @click="commentAdd">发吐槽</el-button>
              </div>
            </form>
          </div>

          <div class="comment-box" v-show="user.name === undefined">
            <form class="comment-form sui-form form-inline">
              <img src="~/assets/img/widget-photo.jpg" alt="" />
              <div class="input-prepend input-append input-box">
                <router-link class="sui-btn btn-block btn-share" to="/login"
                  >去登录评论</router-link
                >
              </div>
            </form>
          </div>

          <div class="remark-list">
            <ul class="lists">
              <li
                class="item"
                v-for="(item, index) in currentPageData"
                :key="index"
              >
                <div class="fl img">
                  <img src="~/assets/img/widget-photo.jpg" alt="" />
                </div>
                <div class="fl text">
                  <p class="author">
                    <span class="name">{{ item.createBy }}</span> 发布
                  </p>
                  <p class="word" v-html="item.content"></p>
                  <p class="tool">
                    <a
                      class="callback"
                      @click="toCommentAdd(item.userId, item.id)"
                      >回复</a
                    >&nbsp;<span class="remark-num">{{
                      item.commentList.length
                    }}</span>
                  </p>
                </div>
                <div style="clear: both"></div>
                <div class="edit-box">
                  <form class="comment-form">
                    <textarea
                      row="1"
                      placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"
                    ></textarea>
                    <button type="submit" class="sui-btn submit-comment">
                      提交评论
                    </button>
                  </form>
                </div>
                <ul class="inner-list">
                  <li
                    class="item"
                    v-for="(sonItem, index) in item.commentList"
                    :key="index"
                  >
                    <div class="fl img">
                      <img src="~/assets/img/widget-photo.jpg" alt="" />
                    </div>
                    <div class="fl text">
                      <p class="author">
                        <span class="name">{{ sonItem.createBy }}</span>
                        {{ sonItem.createBy }}回话{{ sonItem.toUserName }}
                      </p>
                      <p class="word" v-html="sonItem.content"></p>
                      <p class="tool">
                        <a
                          class="callback"
                          @click="toCommentAdd(item.userId, item.id)"
                          >回复</a
                        >&nbsp;<span class="remark-num"></span>
                      </p>
                    </div>
                    <div style="clear: both"></div>
                    <div class="edit-box">
                      <form class="comment-form">
                        <textarea
                          row="1"
                          placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"
                        ></textarea>
                        <button type="submit" class="sui-btn submit-comment">
                          提交评论
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-button @click="prevPage()"> 上一页 </el-button>
      <span>第{{ currentPage }}页/共{{ totalPage }}页</span>
      <el-button @click="nextPage()"> 下一页 </el-button>
    </div>
    <div class="fl right-tag">
      <div class="focus similar-problem">
        <div class="img-title">
          <div class="fl img">
            <img src="~/assets/img/widget-photo.jpg" alt="" />
          </div>
          <div class="fl btn-focus">
            <h4>作者：{{ blog.author }}</h4>
          </div>
          <div class="clearfix"></div>
        </div>
        <ul
          class="problem-list"
          v-for="(item, index) in userBlog.content"
          :key="index"
        >
          <li class="list-item">
            <p class="list-title">
              <nuxt-link class="attentionText" :to="'/blog/item/' + item.id">{{
                item.title
              }}</nuxt-link>
            </p>
            <p class="list-title">{{item.createTime}}</p>
          </li>
        </ul>
      </div>
      <div class="similar-problem">
        <h3 class="title">热门推荐</h3>
        <ul class="problem-list" v-for="(item, index) in hotBlog" :key="index">
          <li class="list-item">
            <p class="list-title">
              <nuxt-link class="attentionText" :to="'/blog/item/' + item.id">{{
                item.title
              }}</nuxt-link>
            </p>
             <p class="list-title">{{item.createTime}}</p>
          </li>
        </ul>
      </div>
      <div class="similar-problem">
        <h3 class="title">请你解答</h3>
        <ul class="problem-list" v-for="(item, index) in waitlist" :key="index">
          <li class="list-item">
            <p class="list-title">
              <nuxt-link
                class="attentionText"
                :to="'/problem/problem/' + item.id"
                >{{ item.title }}</nuxt-link
              >
            </p>
             <p class="list-title">{{item.createTime}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="clearfix"></div>
    <!-- 添加弹窗 -->
    <el-dialog title="评论" :visible.sync="dialogVisible">
      <div class="wrapper release-tc">
        <div class="release-box">
          <h3>{{ blog.title }}</h3>
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
                发布
              </button>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </el-dialog>

    <el-dialog title="评论" :visible.sync="operation">
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
              <button
                class="sui-btn btn-danger btn-release"
                @click="toUserComment(userId, commentId)"
              >
                回复
              </button>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import '~/assets/css/page-sj-headline-detail.css'
import "mavon-editor/dist/css/index.css";
import blog from '@/api/blog'
import marked from 'marked'
import { format } from '@/utils/datetime'
import { getUser } from '@/utils/auth'
import '~/assets/css/page-sj-spit-submit.css'
import commentApi from '@/api/comment'
import { quillRedefine } from 'vue-quill-editor-upload'

import problemApi from '@/api/problem'
export default {
  asyncData ({ params }) {
    console.log(params.id)
    return blog.getBlogById(params.id).then(res => {

      return {
        blog: res.data.data.blog,
        blogValue: marked(res.data.data.blog.content),
        blogComment: res.data.data.comment,
        date: format(res.data.data.blog.createTime)
      }
    })
  },
  data () {
    return {
      user: {},
      content: '',
      editorOption: {},
      dialogVisible: false,
      userId: "",
      commentId: "",
      operation: false,
      hotBlog: {},
      waitlist: [],
      userBlog: {},
      productList: this.blogComment, //前端分页  总数据
      totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 10, // 每页显示数量
      currentPageData: [] //当前页显示内容

    }
  },
  created () {
    this.user = getUser(),
      this.getHotBlog(),
      this.getProList(),
      this.getBlogByUser(),
      this.editorOption = quillRedefine({
        uploadConfig: {
          action: 'http://121.5.129.126:8001/file/images',
          res: (response) => {
            return response.data
          },
          name: 'file'  //图片上传参数
        }
      })
  },
  mounted () {
    // 计算一共有几页
    this.totalPage = Math.ceil(this.blogComment.length / this.pageSize);
    // 计算得0时设置为1
    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    this.setCurrentPageData();
  },
  methods: {
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
      commentApi.save({ content: this.content, blogId: this.blog.id }).then(res => {
        this.dialogVisible = false
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
        location.href = '/blog/item/' + this.blog.id
      })
    },
    // 显示新增界面
    commentAdd: function () {
      this.dialogVisible = true
    },
    toCommentAdd (userId, commentId) {
      this.operation = true
      this.userId = userId
      this.commentId = commentId
    },

    toUserComment (userId, commentId) {
      commentApi.save({ content: this.content, blogId: this.blog.id, toUserId: this.userId, toCommentId: this.commentId }).then(res => {
        this.operation = false
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
        location.href = '/blog/item/' + this.blog.id
      })
    },
    getBlogByUser () {
      blog.findUserPage(1, 5, this.blog.userUid).then(res2 => {
        this.userBlog = res2.data.data
      })
    },
    getHotBlog () {
      blog.getHotBlog().then(res2 => {
        this.hotBlog = res2.data.data
      })
    },
    getProList () {
      problemApi.list('waitlist', 0, 1, 5).then(res => {
        this.waitlist = res.data.data.content
      })
    },
    // 前端分页 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
    setCurrentPageData () {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.blogComment.slice(
        begin,
        end
      );
    },
    //上一页
    prevPage () {
      console.log(this.currentPage);
      if (this.currentPage == 1) return;

      this.currentPage--;
      this.setCurrentPageData();

    },
    // 下一页
    nextPage () {
      if (this.currentPage == this.totalPage) return;
      this.currentPage++;
      this.setCurrentPageData();
    }
  },
  head(){
    return{
      title: `摆渡人-${this.blog.title}`,
      meta:[
        {hid:'description',name:'description',content: this.blog.summary || '摆渡人'},
        {hid:'keywords',name:'keywords',content: this.blog.summary || '摆渡人'}
      ]
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
