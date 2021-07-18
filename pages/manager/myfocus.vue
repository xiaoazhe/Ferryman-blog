<template>
  <div class="focus-list">
    <div class="myfocus-list">
      <ul class="sui-nav nav-tabs nav-large">
        <li class="active"><a href="#one" data-toggle="tab">关注的问题</a></li>
      </ul>
      <div class="tab-content tab-wraped">
        <div id="one" class="tab-pane active">
          <ul
            class="focuspro-list"
            v-for="(item, index) in dataForm.content"
            :key="index"
          >
            <li class="pro-item">
              <div class="fl intro">
                <p class="title">{{ item.title }}</p>
              </div>
              <div class="fr btns">
                <span class="mum">{{ item.clickCount }}点击数</span>
                <button
                  class="sui-btn btn-danger btn-cancel btn-bordered"
                  @click="deleteCollect(item.id)"
                >
                  取消关注
                </button>
              </div>
              <div class="clearfix"></div>
            </li>
          </ul>
          <div class="block">
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
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-myfocus.css'
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
      problemApi.getCollect(1, this.page.pageNum, this.page.pageSize).then(res => {
        this.dataForm = res.data.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.getCollect()
    },
    deleteCollect (id) {
      problemApi.deleteCollect(id, 1).then(res => {
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