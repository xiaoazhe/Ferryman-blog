<template>
  <!--两列布局-->
  <div class="wrapper qa-content">
    <div class="fl left-list">
      <div class="tab-content">
        <div id="index" class="tab-pane active">
          <div class="tab-bottom-line">
            <ul class="sui-nav nav-tabs">
              <li :class="type == 'new' ? 'active' : ''">
                <a @click="type = 'new'">最新回答</a>
              </li>
              <li :class="type == 'hot' ? 'active' : ''">
                <a @click="type = 'hot'">热门回答</a>
              </li>
              <li :class="type == 'wait' ? 'active' : ''">
                <a @click="type = 'wait'">等待回答</a>
              </li>
            </ul>
            <div class="qa-list" v-infinite-scroll="loadMore">
              <div class="tab-content">
                <div
                  id="new"
                  :class="'tab-pane ' + (type == 'new' ? 'active' : '')"
                >
                  <ul class="detail-list">
                    <li
                      class="qa-item"
                      v-for="(item, index) in newlist.content"
                      :key="index"
                    >
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{ item.thumbup }}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{ item.reply }}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author">
                            <span class="name">{{ item.replyname }}</span
                            ><span>{{ item.replytime }}</span
                            >回答
                          </p>
                          <p class="title">
                            <a :href="'/problem/problem/'+ item.id" target="_blank">{{
                              item.title
                            }}</a>
                          </p>
                        </div>
                        <div class="other">
                          <div class="fr brower">
                            <p>
                              浏览量 {{ item.visits }} |
                              {{ item.createTime }} 来自
                              <a :href="'/problem/problem/' + item.id">{{ item.nickname }} </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                  </ul>
                </div>
                <div
                  id="hot"
                  :class="'tab-pane ' + (type == 'hot' ? 'active' : '')"
                >
                  <ul class="detail-list">
                    <li
                      class="qa-item"
                      v-for="(item, index) in hotlist.content"
                      :key="index"
                    >
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{ item.thumbup }}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{ item.reply }}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author">
                            <span class="name">{{ item.replyname }}</span
                            ><span>{{ item.replytime }}</span
                          >回答
                          </p>
                          <p class="title">
                            <a :href="'/problem/problem/'+ item.id" target="_blank">{{
                                item.title
                              }}</a>
                          </p>
                        </div>
                        <div class="other">
                          <div class="fr brower">
                            <p>
                              浏览量 {{ item.visits }} |
                              {{ item.createTime }} 来自
                              <a :href="'/problem/problem/' + item.id">{{ item.nickname }} </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                  </ul>
                </div>
                <div
                  id="wait"
                  :class="'tab-pane ' + (type == 'wait' ? 'active' : '')"
                >
                  <ul class="detail-list">
                    <li
                      class="qa-item"
                      v-for="(item, index) in waitlist.content"
                      :key="index"
                    >
                      <div class="fl record">
                        <div class="number">
                          <div class="border useful">
                            <p class="usenum">{{ item.thumbup }}</p>
                            <p>有用</p>
                          </div>
                          <div class="border answer">
                            <p class="ansnum">{{ item.reply }}</p>
                            <p>回答</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl info">
                        <div class="question">
                          <p class="author">
                            <span class="name">{{ item.replyname }}</span
                            ><span>{{ item.replytime }}</span
                          >回答
                          </p>
                          <p class="title">
                            <a :href="'/problem/problem/'+ item.id" target="_blank">{{
                                item.title
                              }}</a>
                          </p>
                        </div>
                        <div class="other">
                          <div class="fr brower">
                            <p>
                              浏览量 {{ item.visits }} |
                              {{ item.createTime }} 来自
                              <a :href="'/problem/problem/' + item.id">{{ item.nickname }} </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fl right-tag">
      <div class="block-btn">
        <p>今天，要提个问题吗?</p>
        <a
          v-show="user.name === undefined"
          class="sui-btn btn-block btn-share"
          href="/login"
          target="_blank"
          >登录发布</a
        >
        <a
          v-show="user.name !== undefined"
          class="sui-btn btn-block btn-share"
          href="/addProblem"
          target="_blank"
          >发布</a
        >
      </div>
      <div class="hot-tags">
        <div class="head">
          <h3 class="title">热门标签</h3>
        </div>
        <div class="tags">
          <ul class="sui-tag" v-for="(item, index) in labList"
                      :key="index">
            <router-link tag="li" active-class="active" :to="'/problem/label/'+item.id"><a>{{item.labelname}}</a></router-link>

          </ul>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import problemApi from '@/api/problem'
import axios from 'axios'
import { getUser } from '@/utils/auth'
import labelApi from '@/api/label'

export default {
  created () {
    this.user = getUser()

  },
  asyncData ({ params }) {
    return axios.all([problemApi.list('newlist', params.label, 1, 10),
    problemApi.list('hotlist', params.label, 1, 10),
    problemApi.list('waitlist', params.label, 1, 10),
    labelApi.toplist()]
    ).then(axios.spread(function (newlist, hotlist, waitlist, labelList) {
      return {
        newlist: newlist.data.data,
        hotlist: hotlist.data.data,
        waitlist: waitlist.data.data,
        labList: labelList.data.data,
        label: params.label
      }
    }))
  },
  data () {
    return {
      type: 'new',
      page_new: 1,
      page_hot: 1,
      page_wait: 1,
      labList: []
    }
  },
  methods: {

    loadMore () {
      if (this.type === 'new') {
        this.page_new++
        problemApi.list('newlist', this.label, this.page_new, 10).then(res => {
          this.newlist.content = this.newlist.content.concat(res.data.data.content)
        })
      }
      if (this.type === 'hot') {
        this.page_hot++
        problemApi.list('hotlist', this.label, this.page_hot, 10).then(res => {
          this.hotlist.content = this.hotlist.content.concat(res.data.data.content)
        })
      }
      if (this.type === 'wait') {
        this.page_wait++
        problemApi.list('waitlist', this.label, this.page_wait, 10).then(res => {
          this.waitlist.content = this.waitlist.content.concat(res.data.data.content)
        })
      }


    }
  }
}
</script>

