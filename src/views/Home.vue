<template>
  <div class="home" v-if="category">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <van-tabs v-model="active" swipeable sticky animated>
        <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
          <!-- <van-list
            v-model="item.loading"
            :immediate-check="false"
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          > -->
            <div class="detailparent">
              <cover
                class="detailitem"
                :detailitem="categoryitem"
                v-for="(categoryitem,categoryindex) in item.list"
                :key="categoryindex"
              />
            </div>
          <!-- </van-list> -->
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import cover from '@/views/cover.vue'
export default {
    data() {
        return {
          category: [],
          active: 0
        }
    },
    components:{
      NavBar,
      cover
    },
    methods:{
      //搜索分类
      async selectCategory(){
        const res = await this.$http.get("/category");
        this.category = this.changeCategory(res.data);
        this.selectArticle();
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
        categoryitem.list.push(...res.data);
        categoryitem.loading = false;
        if (res.data.length < categoryitem.pagesize) {
          categoryitem.finished = true;
        }
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
        const categoryitem = this.categoryItem();
        this.selectArticle();
      }
    }
}
</script>

<style lang="less">
  .home{
    background-color:white;
  }
  .detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailitem {
      margin: 1.389vw 0;
      width: 45%;
    }
  }
</style>
