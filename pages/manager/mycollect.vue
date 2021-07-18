<template>
  <div class="focus-list">
    <div class="mycollect-list">
      <ul class="sui-nav nav-tabs nav-large">
        <li class="active"><a href="#one" data-toggle="tab">收藏的问题</a></li>
      </ul>
      <div class="tab-content tab-wraped">
        <div id="one" class="tab-pane active">
          <ul
            class="collect-list"
            v-for="(item, index) in dataForm.content"
            :key="index"
          >
            <li class="collect-item">
              <div class="intro">
                <div class="fl border">
                  <span class="fa fa-thumbs-up" aria-hidden="true"></span>
                  <span class="usenum">{{ item.thumbup }}</span>
                  <span class="fa fa-star" aria-hidden="true"></span>
                </div>
                <div class="fl content">
                  <p class="title">
                    <a :href="'/problem/problem/' + item.id" target="_blank">{{
                      item.title
                    }}</a>
                  </p>
                  <p class="link">
                    <a href="ruanyifeng.com">ruanyifeng.com</a>
                  </p>
                </div>
                <div class="fr info">
                  <img src="~/assets/img/widget-photo.png" alt="" />
                  <span class="author">{{ item.nickname }}</span>
                </div>
                <div class="clearfix"></div>
              </div>
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
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-mycollect.css'
import problemApi from '@/api/problem'
import { getUser } from '@/utils/auth'

export default {
  created () {
    this.getCollect(),
      this.user = getUser()
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
    getCollect () {
      problemApi.getCollect(2, this.page.pageNum, this.page.pageSize).then(res => {
        if (res.data.data !== null) {
          this.dataForm = res.data.data
        }

      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.getCollect()
    },
    deleteCollect (id) {
      problemApi.deleteCollect(id, 2).then(res => {
        this.getCollect()
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    }
  }
}
</script>
