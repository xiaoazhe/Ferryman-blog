<template>
  <div class="activities">
    <h4 class="tit"><span>我的动态</span></h4>
    <ul
      class="activities-content"
      v-for="(item, index) in dataForm.content"
      :key="index"
    >
      <li>
        <div class="index-title">
          <span class="author">点击数</span>
          <span class="operate">{{ item.clickCount }}</span> &middot;
          <span class="time">{{ item.createTime }}</span>
        </div>
        <div class="guanzhuname">
          <span class="tag">{{ item.typeName }}</span>
        </div>
        <div class="question">
          <p class="title">{{ item.summary }}</p>
          <p class="content"></p>
        </div>
        <div class="qa-num">
          <span class="tagnum">作者</span>{{ item.author }}
        </div>
        <nuxt-link class="attentionText" :to="'/blog/item/' + item.id"
          >查看</nuxt-link>
          <span>||||</span>
          <a @click="deleteCollect(item.id)">删除</a>
      </li>
    </ul>
    <el-pagination
      layout="total, prev, pager, next, jumper"
      @current-change="refreshPageRequest"
      :current-page="page.pageNum"
      :page-size="page.pageSize"
      :total="dataForm.totalSize"
    >
    </el-pagination>
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-dynamic.css'
import blogpApi from '@/api/blog'
export default {
  created () {
    this.findUserPage()
  },
  data () {
    return {
      page: {
        pageNum: 1,
        pageSize: 5
      },
      dataForm: {
        content: [],
        pageNum: "",
        pageSize: "",
        totalPages: "",
        totalSize: 0
      }
    }
  },
  methods: {
    findUserPage () {
      blogpApi.findUserPage(this.page.pageNum, this.page.pageSize).then(res => {
        this.dataForm = res.data.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.findUserPage()
    },
    deleteCollect (id) {
      blogpApi.delete(id).then(res => {
        this.findUserPage()
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    }
  }
}
</script>
