<template>
<div>
<header>
  <meta name="baidu-site-verification" content="code-raKLuinDkh" />
        <div class="activity-head">
        <div class="wrapper">

        <div class="sui-navbar">
            <div class="navbar-inner">
             <a class="sui-brand"><music /></a>
            <ul class="sui-nav">
                <router-link tag="li" to="/" active-class="active" exact><a>首页</a></router-link>
                <router-link tag="li" to="/problem" active-class="active"><a>解答区</a></router-link>
                <router-link tag="li" to="/gossip" active-class="active"><a>匿名区</a></router-link>
                <router-link tag="li" to="/material" active-class="active"><a>资料区</a></router-link>
                <router-link tag="li" to="/friend" active-class="active"><a>链接区</a></router-link>
                <router-link tag="li" to="/manager" active-class="active"><a>个人中心</a></router-link>
            </ul>
            <form class="sui-form sui-form pull-left">
                <input type="text" placeholder="搜索标题..." v-model="searchData" @keyup.enter="search(searchData)"/>
                <span class="btn-search fa fa-search" @click="search(searchData)"></span>
            </form>
            <div class="sui-nav pull-right info" v-show="user.name!==undefined">
              <li><a href="/manager" class="notice">{{user.name}}</a></li>
              <li><a @click="logout" class="notice">退出登陆</a></li>
              <li><a href="/manager"  class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name" /></a></li>
            </div>
             <div class="sui-nav pull-right info" v-show="user.name===undefined">
               <router-link tag="li" to="/login" active-class="active"><el-button>登陆</el-button></router-link>
             </div>
            </div>
            </div>

        </div>
        </div>
        </header>

  <nuxt></nuxt>
  <footer>
        <div class="footer">
        <div class="wrapper">
            <div class="footer-bottom">
            <p class="Copyright"> <a href="https://beian.miit.gov.cn/#/Integrated/index">沪ICP备2022029914号</a></p>
            </div>
        </div>
        </div>
      </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import Music from '@/pages/music/music'
import {getUser,removeUser} from '@/utils/auth'

export default {
  components: {
    Music
  },
    data(){
        return {
          searchData: '',
          user: {}
        }
    },
    created(){
        this.user= getUser()
    },
    methods: {
        logout(){
            removeUser()
            location.href='/'
        },
        search(data){
          if (data) {
            location.href='/blog/list/'+ data
          }
        }
    }
}
</script>
