<template>
  <div>
      <header>
        <div class="activity-head">
        <div class="wrapper">
        <div class="sui-navbar">
            <div class="navbar-inner">
             <a class="sui-brand"><music /></a>
            <ul class="sui-nav">
                <router-link tag="li" to="/" active-class="active" exact><a>首页</a></router-link>
                <router-link tag="li" to="/problem" active-class="active"><a>提问</a></router-link>
                <router-link tag="li" to="/gossip" active-class="active"><a>吐槽</a></router-link>
                <router-link tag="li" to="/material" active-class="active"><a>资料</a></router-link>
                <router-link tag="li" to="/friend" active-class="active"><a>链接</a></router-link>
                <router-link tag="li" to="/manager" active-class="active"><a>个人中心</a></router-link>
            </ul>

            <form class="sui-form sui-form pull-left">
                <input type="text" placeholder="输入关键词..." />
                <span class="btn-search fa fa-search"></span>
            </form>
            <div class="sui-nav pull-right info" v-if="user.name!==undefined">
              <li><a href="/manager" class="notice">{{user.name}}</a></li>
              <li><a @click="logout" class="notice">退出登陆</a></li>
              <li><a href="/manager"  class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name" /></a></li>
            </div>
             <div class="sui-nav pull-right info" v-if="user.name===undefined">
               <router-link tag="li" to="/login" active-class="active"><el-button>登陆</el-button></router-link>
             </div>
            </div>
            </div>
        </div>
        </div>
        </header>
        <nuxt/>
      <footer>
        <div class="footer">
        <div class="wrapper">
            <div class="footer-bottom">
            <div class="link">
            <dl>
            <dt>
                网站相关
            </dt>
            <dd>
                关于我们
            </dd>

            </dl>
            <dl>
            <dt>
                常用链接
            </dt>
            <dd>
                Gitee
            </dd>
            </dl>
            <dl>
            <dt>
                联系我
            </dt>
            <dd>
                联系我
            </dd>

            </dl>
            <dl>
            <dt>
                关注我
            </dt>
            <dd>
                Gitee
            </dd>

            </dl>
            <div class="xuke">
            <h3>内容许可</h3>
            </div>
            </div>
            <p class="Copyright"> &copy;当前版本 0.0.1</p>
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
        }
    }
}
</script>
