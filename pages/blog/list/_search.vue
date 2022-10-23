<template>
  <!--两列布局-->
  <div class="wrapper">
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
            v-show="item.fileUid !== ''"
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
                <span>{{ item.createTime }}</span>
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
</template>
<script>

import '~/assets/css/page-headline-logined.css'
import blog from '@/api/blog'

export default {
  asyncData ({ params }) {
    return blog.findPageByFilter(1, 10, params.search).then(res => {
        return {
          searchData: params.search,
          blogContent: res.data.data.content || [{"title":"test"}]
        }
    })
  },
  data() {
    return {
      // searchData: '',
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
  },
  methods: {
    loadMore() {
      this.page.pageNum++
      console.log(this.searchData)
      blog.findPageByFilter(this.page.pageNum, this.page.pageSize, this.searchData).then(res => {
        this.blogContent = this.blogContent.concat(res.data.data.content)
      })

    }
  }
}
</script>
