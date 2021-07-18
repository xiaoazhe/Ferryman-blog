<template>
    <div>
        
        <div class="wrapper  myhome"> 
            <div class="left-list"> 
                <div class="myhome-list"> 
                <ul class="home-list"> 
                <router-link to="/manager" tag="li" active-class="active" exact><a>我的主页</a></router-link>
                <router-link to="/manager/myanswer" tag="li" active-class="active"><a>我的回答</a></router-link>
                <router-link to="/manager/myquestion" tag="li" active-class="active"><a>我的评论</a></router-link>
                </ul> 
                <ul class="home-list bottom"> 
                <router-link to="/manager/dynamic" tag="li" active-class="active"><a>个人动态</a></router-link>
                <router-link to="/manager/myfocus" tag="li" active-class="active"><a>我的关注</a></router-link>
                <router-link to="/manager/mycollect" tag="li" active-class="active"><a>我的收藏</a></router-link>
                <router-link to="/manager/myreaded" tag="li" active-class="active"><a>浏览记录</a></router-link>        
                </ul> 
                </div> 
            </div> 
            <div class="right-content"> 
                <nuxt-child/>
            </div> 
            <div class="clearfix"></div> 
        </div> 
    </div>
</template>
<script>
import '~/assets/css/page-sj-person-homepage.css'
import {getUser} from '@/utils/auth'
export default {
    created(){
        if(getUser().name===undefined){
            this.$router.push('/login')
        }
    }
}
</script>
