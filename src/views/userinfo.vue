<template>
  <div class="userinfo">
     <nav-bar></nav-bar>
     <img src="@/assets/bannerTop_new.png" alt="" class="backImg">
     <user-detail></user-detail>
     <user-article></user-article>
  </div>
</template>

<script>
// 引入组件命名要注意
import NavBar from '@/components/common/Navbar.vue';
import userDetail from '@/components/userComponent/userDetail.vue';
import userArticle from '@/components/userComponent/userArticle.vue';
export default {
    data() {
        return {

        }
    },
    components:{
      NavBar,
      userArticle,
      userDetail
    },
    methods:{

    }
}
</script>

<style lang="less">
  .userinfo{
    .backImg{
      height:91px;
      width:100%;
    }
  }
</style>
