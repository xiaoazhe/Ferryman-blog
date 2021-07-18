<template>
  <div class="answers">
    <h4><span>我的回答</span></h4>
    <ul class="answer-list" v-for="(item, index) in dataForm.rows" :key="index">
      <li>
        <span class="fl good" @click="deleteCollect(item._id)">删除
        </span>
        <span class="title"
          ><a href="#" v-html="item.content"></a></span
        >
        <span class="fr date">{{item.publishtime}}</span> <span class="clearfix"></span>
      </li>
    </ul>
    <el-pagination
      layout="total, prev, pager, next, jumper"
      @current-change="refreshPageRequest"
      :current-page="page.pageNum"
      :page-size="page.pageSize"
      :total="dataForm.total"
    >
    </el-pagination>
  </div>
</template>
<script>
import '~/assets/css/page-sj-person-myanswer.css'
import gossipApi from '@/api/gossip'
export default {
  created () {
    this.pageByUser()
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
    pageByUser () {
      gossipApi.pageByUser(this.page.pageNum, this.page.pageSize).then(res => {
        this.dataForm = res.data.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.pageByUser()
    },
    deleteCollect (id) {
      gossipApi.delete(id).then(res => {
        this.pageByUser()
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    }
  }
}
</script>
