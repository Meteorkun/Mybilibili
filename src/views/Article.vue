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
import commentTitle from '@/components/article/commentTitle.vue'
import comment from '@/components/article/comment.vue'
export default {
    data() {
        return {
          model:null,
          commendList:null,
          // myuser:null,
          lens:null,
          collectionActive:null,
          subscriptActive:null,
          Postcom:{
            comment_content:'',
            comment_date:'',
            parent_id:null,
            article_id:null,
          }
        }
    },
    components:{
      NavBar,
      cover,
      commentTitle,
      comment
    },
    created(){
      this.articleitemData()
      this.commendData()
      this.collectionInit()
    },
    methods:{
      // 获取文章信息
      async articleitemData(){
        const res = await this.$http.get('/article/' + this.$route.params.id)
        this.model = res.data[0]
        if(this.model){
          this.subscriptionInit()
        }
      },
      async commendData(){
        const res = await this.$http.get('/commend/')
        this.commendList = res.data
      },
      // 发表评论
      async PostSuccess(res){
        const date = new Date()
        let m = date.getMonth() + 1
        let d = date.getDate()
        if(m < 10){
          m = '0'+ m
        }
        if(d < 10){
          d = '0'+ d
        }
        let str = m+'-'+d
        // let str = '${m}-${d}'
        this.Postcom.comment_content = res
        this.Postcom.comment_date = str
        this.Postcom.article_id = this.$route.params.id
        const result = await this.$http.post('/comment_post/'+ localStorage.getItem('id'),this.Postcom)
        this.$refs.commentPublish.commentData()
        this.Postcom.parent_id = null
        if(result.status == 200){
          this.$msg.fail("评论发表成功!")
        }
      },
      // 收藏文章
      async collectionClick(){
        if(localStorage.getItem('token')){
          const res = await this.$http.post('/collection/' + localStorage.getItem('id'),{article_id:this.$route.params.id})
          if(res.data.msg == '收藏成功'){
            this.collectionActive = true
          }else{
            this.collectionActive = false
          }
          this.$msg.fail(res.data.msg)
        }
      },
      // 判断进入页面是否收藏
      async collectionInit(){
        if(localStorage.getItem('token')){
          const res = await this.$http.get('/collection/' + localStorage.getItem('id'),{params:{article_id:this.$route.params.id}})
          this.collectionActive = res.data.success
        }
      },
      // 点击关注发帖用户
      async subscriptClick(){
        if(localStorage.getItem('token')){
          const res = await this.$http.post('/sub_scription/' + localStorage.getItem('id'),{sub_id:this.model.userid})
          if(res.data.msg == '关注成功'){
            this.subscriptActive = true
          }else{
            this.subscriptActive = false
          }
          this.$msg.fail(res.data.msg)
        }
      },
      // 判断进入页面是否已经关注
      async subscriptionInit(){
        if(localStorage.getItem('token')){
          const res = await this.$http.get('/sub_scription/' + localStorage.getItem('id'),{params:{sub_id:this.model.userid}})
          this.subscriptActive = res.data.success
        }
      },
      PostChildClick(id){
        this.Postcom.parent_id = id
        this.$refs.commentIpt.focusipt()
      }
    },
    watch:{
      $route(){
        this.articleitemData()
        this.commendData()
        this.collectionInit()
        this.subscriptionInit()
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
