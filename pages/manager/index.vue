<template>
    <div class="questions"> 
     <h4><span>我的回復</span></h4> 
     <ul class="question-list" v-for="(item, index) in dataForm.records" :key="index"> 
      <li> 
      <span class="title"><a href="#" v-html="item.content">{{item.content}}</a></span> 
      <span class="fr date">{{item.createTime}}</span> <span class="clearfix"></span>
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
import '~/assets/css/page-sj-person-myquestion.css'

import commentApi from '@/api/comment'
export default {
  created () {
    this.getCommentAndReply()
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
    getCommentAndReply () {
      commentApi.getCommentAndReply(this.page.pageNum, this.page.pageSize).then(res => {
        this.dataForm = res.data.data.replyPage
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.getCommentAndReply()
    }
  }
}
</script>

