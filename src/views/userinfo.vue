<template>
  <div class="userinfo">
     <nav-bar></nav-bar>
     <img src="@/assets/bannerTop_new.png" alt="" class="backImg">
     <user-detail :userinfo="model"/>
     <user-article />
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import userDetail from '@/components/userComponent/userDetail.vue'
import userArticle from '@/components/userComponent/userArticle.vue'
export default {
    data() {
        return {
            model:{}
        }
    },
    components:{
        NavBar,
        userDetail,
        userArticle
    },
    methods:{
        async userData() {
            const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]
        }
    },
    created() {
        this.userData()
    }
}
</script>

<style lang="less">
.userinfo{
.backImg{
    height: 91px;
    width: 100%;
  }
}
</style>
