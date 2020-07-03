<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="detailinfo">
      <div class="video">
        <video :src="model.content" controls="controls"></video>
        <div class="detailinfoText">
          <div>
            <span>{{model.category.title}}</span>
            <span>{{model.name}}</span>
          </div>
          <div>
            <span>{{model.userinfo.name}}</span>
            <span>146.6万次观看</span>
            <span>5281弹幕</span>
            <span>{{model.date}}</span>
          </div>
          <div>
            <p @click="collectionClick" :class="{activeColor:collectionActive}">
              <span class="icon-star-full"></span>
              <span>收藏</span>
            </p>
            <p @click="subscriptClick" :class="{activeColor:subscriptActive}">
              <span class="icon-bubble"></span>
              <span>关注</span>
            </p>
            <p>
              <span class="icon-redo2"></span>
              <span>分享</span>
            </p>
          </div>
        </div>
        <div class="detailparent">
          <cover class="detailitem" v-for="(item,index) in commendList" :key="index" :detailitem="item"/>
        </div>
      </div>
      <commentTitle :dataLength="lens" @Postcomment="PostSuccess" ref="commentIpt"/>
      <comment @lengthselect="len => lens = len" ref="commentPublish" @publishClick="PostChildClick"/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import cover from '@/views/cover.vue'
export default {
    data() {
        return {
          model:null
        }
    },
    components:{
      NavBar,
      cover
    },
    created(){
      this.articleitemData()
    },
    methods:{
      //获取文章信息
      async articleitemData(){
        const res = await this.$http.get('/article/' + this.$route.params.id)
        this.model = res.data[0]
      }
    }
}
</script>

<style lang="less">
  .detailinfo{
    background-color: white;
    .video{
      width:100%;
      video{
        width:100%;
      }
    }
  }
  .detailinfoText{
    padding:15px;
    div:nth-child(1){
      span:nth-child(1){
        padding:0 2.778vw;
        color:#fb7299;
        background-color:#f4f4f4;
        border-radius:2.778vw;
      }
    }
    div:nth-child(2){
      padding:3.778vw 2.778vw;
      span{
        color:#aaa;
        font-size:12px;
      }
      span:nth-child(1){
        color:black;
        font-size:4vw;
        padding-right:10px;
      }
    }
    div:nth-child(3){
      padding:0 2.778vw;
      display:flex;
      p{
        margin-right:15px;
        display:flex;
        color:#757575;
        span:nth-child(1){
          font-size:21px;
          padding-right:3px;
        }
        span:nth-child(2){
          font-size:13px;
        }
      }
      .activeColor{
        color:#fb7299;
      }
    }
  }
  .detailparent{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    .detailitem{
      margin: 1.389vw 0;
      width: 50%;
    }
  }
</style>
