<template>
<div class="wrapper activities">
   <div class="activity-card-list">
    <div class="top-title">
     <h4 class="latest">最新资料</h4>
     <el-input v-model="name" placeholder="请输入内容"></el-input>
     <el-button type="primary" icon="el-icon-search" @click="findPage">搜索</el-button>
     <div class="clearfix"></div>
    </div>
    <div class="activity-list">
     <ul class="activity">
      <li class="activity-item" v-for="(item,index) in dataForm.content" :key="index">
       <div class="activity-inner">
        <a href="http://"></a>
        <!-- <div class="img" >
         <a :href="'/gathering/item/'+item.id" target="_blank"><img :src="item.fileUrl" alt="" /></a>
        </div>  -->
        <div class="text">
          <img :src="item.fileUrl" alt="" />
         <p class="title">{{item.title}}</p>
         <div class="fl goin">
          <p>{{item.describe}}</p>
         </div>
         <div class="fr btn">
          <span class="sui-btn btn-bao" @click="dialogVisi(item.id)">立即获取</span>
         </div>
         <div class="clearfix"></div>
        </div>
       </div> </li>
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
    <el-dialog title="资料地址" :visible.sync="dialogVisible">
     <div style=" vertical-align: middle;text-align: center;">
       <img :src="material.fileUrl" alt="" />
      <p>{{material.title}}</p>
      <p>{{material.describe}}</p>
      <p>链接：{{material.url}}</p>
      <p>提取码：{{material.pwd}}</p>
     </div>
    </el-dialog>
   </div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-activity-index.css'
import materialApi from '@/api/material'

export default {
  created () {
    this.findPage()
  },
  data () {
    return {
      page: {
        pageNum: 1,
        pageSize: 12
      },
      dataForm: {
        content: [],
        pageNum: "",
        pageSize: "",
        totalPages: "",
        totalSize: 0
      },
      name:'',
      dialogVisible: false,
      material:{}
    }
  },
  methods: {
    findPage () {
      materialApi.findPage(this.page.pageNum, this.page.pageSize, this.name).then(res => {
        this.dataForm = res.data.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.findPage()
    },
    dialogVisi (id) {
      this.dialogVisible = true
      this.findById(id)
    },
    findById (id) {
      materialApi.findById(id).then(res => {
        this.material = res.data.data
      })
    }
  }
}
</script>
<style>
.el-input {
   width: 277px;
}
</style>
