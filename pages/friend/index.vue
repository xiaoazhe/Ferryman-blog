<template>
  <div>
    <div class="banner">
      <!-- <div class="wrapper">
        <img src="~/assets/img/page-banner.png" alt="" />
      </div> -->
    </div>
    <!--两列布局-->
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="friend-dating-list">
          <ul
            class="friends"
            v-for="(item, index) in dataForm.content"
            :key="index"
          >
            <li class="friend-item">
              <div class="fl photo">
                <span class="cafe-more"></span>
                <div class="img">
                  <img :src="item.fileUid" alt="" />
                </div>
                <div class="tag">
                  <span class="tag-cafe cafe"
                    ><i class="fa fa-coffee" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div class="fl content">
                <p class="title">
                  <span class="name">{{ item.nickName }}</span> 邀你一起
                  <span class="cafe">{{ item.url }}</span>
                </p>
                <p class="aa">
                  <span class="money">点击数：{{ item.clickCount }}</span>
                </p>
                <p class="desc">
                  {{ item.title }}
                </p>
                <a class="desc" @click="dialogVisi(item.uid)"> 查看介绍 </a>
              </div>
              <div class="fr xy">
                <ul>
                  <li>
                    <i class="like sui-icon icon-tb-like">
                      <a :href="item.url">前往</a>
                    </i>
                  </li>
                </ul>
              </div>
              <div class="clearfix"></div>
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
      <div class="fl right-tag">
        <div class="block-btn">
          <p>约一约有趣的人，会一会好的时光！</p>
          <a
            class="sui-btn btn-block btn-share"
            href="/friend/submit"
            target="_blank"
            >申请链接</a
          >    
        </div>
        <div class="rank">
          <div class="head">
            <h3 class="title">排行榜</h3>
          </div>
          <div class="rank-list">
            <ul class="rank" v-for="(item, index) in Top" :key="index">
              <li>
                <span class="desc" @click="dialogVisi(item.uid)">
                  {{ item.title }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="friend-line-card">
          <div class="card">
            <p>申请链接</p>
          </div>
        </div>
      </div>
      <el-dialog title="链接介绍" :visible.sync="dialogVisible">
        <span v-html="friend.summary"></span>
      </el-dialog>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-makeFriends-index.css'
import friendApi from '@/api/friend'

export default {
  created () {
    this.findPage(),
      this.friendTop()
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
      },
      dialogVisible: false,
      friend: {},
      Top: []
    }
  },
  methods: {
    findPage () {
      friendApi.findPage(this.page.pageNum, this.page.pageSize).then(res => {
        this.dataForm = res.data.data
      })
    },
    // 换页刷新
    refreshPageRequest: function (pageNum) {
      this.page.pageNum = pageNum
      this.findPage()
    },
    friendTop () {
      friendApi.friendTop().then(res => {
        this.Top = res.data.data
      })
    },
    dialogVisi (id) {
      this.dialogVisible = true
      this.findById(id)
    },
    findById (id) {
      friendApi.findById(id).then(res => {
        this.friend = res.data.data
      })
    }
  }
}
</script>
