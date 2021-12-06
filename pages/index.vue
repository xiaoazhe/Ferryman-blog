<template>
  <div class="wrapper">
    <div class="sj-content">
      <div class="left-nav">
        <div class="float-nav" id="float-nav">
          <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical">
            <li class="active"><a>所有分类</a></li>
            <li v-for="(item, index) in typeList" :key="index">
              <a
                href="javascript:void(0)"
                @click.prevent="getTypeBlogList(item.id)"
              >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <div class="fl middle">
          <el-carousel height="350px" direction="vertical" :autoplay="false">
            <el-carousel-item>
              <el-image
                :src="'https://gitee.com/chongzhe/Ferryman-cloud/widgets/widget_card.svg?' +
                   'colors=eae9d7,2e2f29,272822,484a45,eae9d7,747571'"
                style="height:100%;width:100%;">
              </el-image>
            </el-carousel-item>
            <el-carousel-item>
              <el-image
                :src="'https://gitee.com/chongzhe/Ferryman-cloud/widgets/widget_card.svg?' +
                   'colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b'"
                style="height:100%;width:100%;">
              </el-image>
            </el-carousel-item>
          </el-carousel>

          <div class="data-list">
            <ul
              class="headline fixed"
              id="headline"
              v-infinite-scroll="loadMore"
            >
              <li
                class="headline-item"
                v-for="(item, index) in blogContent"
                :key="index"
              >
                <p></p>
                <div
                  class="fl indexImg"
                  style="width: 160px; height: 120px"
                  v-if="item.fileUid !== ''"
                >
                  <img :src="item.fileUid"/>
                </div>
                <div class="words">
                  <h3>
                    {{ item.title }}
                    <span><img src="" class="vip"/></span>
                  </h3>
                  <h5 class="author">
                    <div class="fl">
                      <span class="authorName">
                        <img src="~/assets/img/widget-photo.png" alt=""/>
                        {{ item.author }}
                      </span>
                      <span>6月22日 12:01</span>
                    </div>
                    <div class="fr attention">
                      <nuxt-link
                        class="attentionText"
                        :to="'/blog/item/' + item.id"
                      >查看
                      </nuxt-link
                      >
                      <span class="attentionText" @click="setCollect(item.id)"
                      >关注</span
                      >
                      <span class="beforeclose">
                        <i class="fa fa-times delete" aria-hidden="true"></i>
                        <i class="nolike">不感兴趣</i>
                      </span>
                    </div>
                    <div class="clearfix"></div>
                  </h5>
                </div>
                <p class="content">
                  {{ item.summary }}
                </p>
              </li>
            </ul>
            <ul id="loaded" class="headline"></ul>
          </div>
        </div>
        <div class="fl right">
          <div class="block-btn" v-if="user.name !== undefined">
            <p>今天，有什么好东西要和大家分享么?</p>
            <a class="sui-btn btn-block btn-share" href="/blog" target="_blank"
            >发布分享</a
            >
          </div>
          <div class="block-btn" v-if="user.name === undefined">
            <p>今天，有什么好东西要和大家分享么?</p>
            <a class="sui-btn btn-block btn-share" target="_blank" href="/login"
            >请登录分享</a
            >
          </div>
          <div class="question-list">
            <h3 class="title">请你解答</h3>
            <div class="lists">
              <ul>
                <li
                  class="list-item"
                  v-for="(item, index) in waitlist.content"
                  :key="index"
                >
                  <p class="list-title">
                    {{ item.title }}
                  </p>
                  <p class="authorInfo">
                    <span class="authorName"
                    >提问人：{{ item.nickname }} 查看请点击=》</span
                    >
                    <span> </span>
                    <nuxt-link
                      class="attentionText"
                      :to="'/problem/problem/' + item.id"
                    >查看
                    </nuxt-link
                    >
                  </p>
                </li>
              </ul>
              <a href="/problem" class="sui-btn btn-block btn-bordered btn-more"
              >查看更多</a
              >
            </div>
          </div>
          <div class="card-list">
            <div class="head">
              <h3 class="title">热门博客</h3>
            </div>
            <div class="list">
              <ul>
                <li
                  class="card-item"
                  v-for="(item, index) in hotBlog"
                  :key="index"
                >
                  <div class="attention">
                    <span
                    >点击数<i class="degree">{{ item.clickCount }}</i></span
                    >
                    <span class="fr">
                      <span>{{ item.typeName }}</span>
                    </span>
                  </div>
                  <div class="img">
                    <img :src="item.fileUid" alt=""/>
                  </div>
                  <div class="info">
                    <div class="fl photo">
                      <img src="~/assets/img/widget-photo.png" alt=""/>
                    </div>
                    <div class="fl intro">
                      <nuxt-link
                        class="attentionText"
                        :to="'/blog/item/' + item.id"
                      >{{ item.title }}
                      </nuxt-link
                      >
                      <p class="name">
                        {{ item.author }}
                        <span class="date">{{ item.createTime }}</span>
                      </p>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
              </ul>
              <a href="/" class="sui-btn btn-block btn-bordered btn-more"
              >查看更多</a
              >
            </div>
          </div>
          <div class="activity-list">
            <h3 class="title">友情链接</h3>
            <div class="list">
              <ul v-for="(item, index) in Top" :key="index">
                <li class="list-item">
                  <p class="list-time">{{ item.title }}</p>
                  <div class="list-content clearfix">
                    <div class="fl img">
                      <img :src="item.fileUid" alt=""/>
                    </div>
                  </div>
                  <a :href="item.url">链接</a>
                </li>
              </ul>
              <a href="/friend" class="sui-btn btn-block btn-bordered btn-more"
              >查看更多</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/page-headline-logined.css'
import blog from '@/api/blog'
import type from '@/api/type'
import {getUser} from '@/utils/auth'
import problemApi from '@/api/problem'
import friendApi from '@/api/friend'

import Music from '@/pages/music/music'
export default {
  components: {
    Music
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 10
      },
      dataForm: {
        content: [],
        pageNum: "",
        pageSize: "",
        totalPages: "",
        totalSize: 0
      },
      thisTypeId: "",
      typeList: [],
      user: {}
    }
  },
  created() {
    this.getTypeList(),
      this.user = getUser(),
      this.getProList()
  },
  asyncData() {
    return blog.findPage(1, 10).then(res => {
      return blog.getHotBlog().then(res2 => {
        return problemApi.list('waitlist', 0, 1, 5).then(res3 => {
          return friendApi.friendTop().then(res4 => {
            return {
              Top : res4.data.data || [],
              waitlist: res3.data.data || [],
              hotBlog: res2.data.data || [],
              blogContent: res.data.data.content || [{"title":"test"}]
            }
          })
        })
      })
    })
  },
  methods: {
    getProList() {
      problemApi.list('waitlist', 0, 1, 5).then(res => {
        this.waitlist = res.data.data
      })
    },
    getByPage() {
      blog.findPage(this.page).then(res => {
        this.dataForm = res.data.data
        this.blogContent = this.dataForm.content
      })
    },
    getTypeList() {
      type.findAll().then(res => {
        this.typeList = res.data.data
      })
    },
    setCollect(id) {
      problemApi.setCollect(id, 1).then(res => {
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    },
    friendTop() {
      friendApi.friendTop().then(res => {
        this.Top = res.data.data
      })
    },

    getTypeBlogList(typeId) {
      this.thisTypeId = typeId
      this.page.pageNum = 1
      type.findBlogByTypeId(this.page, typeId).then(res => {
        this.dataForm.content = res.data.data.content
        this.blogContent = res.data.data.content
        this.getTypeList()
      })
    },

    loadMore() {
      this.page.pageNum++
      if (this.thisTypeId == "") {
        blog.findPage(this.page.pageNum, this.page.pageSize).then(res => {
          this.blogContent = this.blogContent.concat(res.data.data.content)
        })
      } else {
        blog.findPageType(this.page.pageNum, this.page.pageSize, this.thisTypeId).then(res => {
          this.blogContent = this.blogContent.concat(res.data.data.content)
        })
      }
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
