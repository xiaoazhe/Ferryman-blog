<template>
    <div class="activities"> 
     <h4 class="tit"><span>浏览记录</span><span class="clear"><a @click="delect()">清空记录</a></span></h4> 
     <div class="notice-day"> 
      <div class="everyday" v-for="(item, index) in dataForm.content"
            :key="index"> 
       <p class="date">今天</p> 
       <ul class="operate">   
           <li><span class="time">{{item.createTime}}</span>{{item.title}} </li>  
       </ul> 
      </div> 
     </div>
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
import '~/assets/css/page-sj-person-myreaded.css'
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
      problemApi.getCollect(3, this.page.pageNum, this.page.pageSize).then(res => {
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
    delect: function () {
      problemApi.delete().then(res => {
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
        this.getCollect()
      })
    },
    deleteCollect (id) {
      problemApi.deleteCollect(id, 3).then(res => {
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
