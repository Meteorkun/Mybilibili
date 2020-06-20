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
      //搜索分类
      async selectCategory(){
        const res = await this.$http.get("/category");
        this.category = this.changeCategory(res.data);
      },
      changeCategory(data){
        // 重新改造分类数组
        const category1 = data.map((item, index) => {
          // list:每个分类中存储的文章数据
          item.list = [];
          item.page = 0;
          item.finished = false;
          item.loading = true;
          item.pagesize = 10;
          return item;
        });
          return category1;
      },
      // 获取文章数据
      async selectArticle(){
        //获取当前所点击的分类id
        const categoryitem = this.categoryItem();
        const res = await this.$http.get("/detail/" + categoryitem._id,{
          //拼接url方法，把下面参数传递过去
          params:{
            page: categoryitem.page,
            pagesize: categoryitem.pagesize
          }
        });
      },
      //获取当前所点击的分类id
      categoryItem(){
        const categoryItem = this.category[this.active];
        return categoryItem;
      }
    },
    created(){
      this.selectCategory();
    },
    watch:{
      active(){
        this.selectArticle();
      }
    }
}
</script>

<style lang="less">
  .home{
    background-color:white;
  }
</style>
