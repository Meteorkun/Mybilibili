<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
export default {
    data() {
        return {
          category: [],
          active: 0
        }
    },
    components:{
      NavBar
    },
    methods:{
      async selectCategory(){
        const res = await this.$http.get("/category");
        this.category = res.data
      }
    },
    created(){
      this.selectCategory();
    }
}
</script>

<style lang="less">
  .home{
    background-color:white;
  }
</style>
