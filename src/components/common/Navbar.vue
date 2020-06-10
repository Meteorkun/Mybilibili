<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div>
      <p>
        请输入内容
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img :src="imgUrl" alt="" v-if="imgUrl" @click="to">
      <img src="@/assets/default_img.jpg" alt="" v-else @click="$router.push('/login')">
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          imgUrl:''
        }
    },
    async mounted(){
      if(localStorage.getItem('token')){
        const res = await this.$http.get('/user/'+ localStorage.getItem('id'))
        this.imgUrl = res.data[0].user_img
      }
    },
    methods:{
      to(){
        if(this.$route.path != '/userinfo'){
          this.$router.push('/userinfo')
        }else{
          return
        }
      }
    }
}
</script>

<style lang="less">
  .navbar{
    height:12.5vw;
    background-color:white;
    display:flex;
    .logo{
      display:flex;
      justify-content:center;
      align-items:center;
      width:90px;
      img{
        width:100%;
      }
    }
  div:nth-child(2){
    flex:1;
    display:flex;
    align-items:center;
    margin:0 5px;
    p{
      font-size:12px;
      background-color:#f4f4f4;
      height:23px;
      line-height:23px;
      padding-left:25px;
      position:relative;
      width:100%;
      border-radius:13px;
      color:#aaa;
      .ipt-icon{
        position:absolute;
        left:10px;
        top:50%;
        transform:translate(0,-40%);
        color:#aaa;
      }
    }
  }
  div:nth-child(3){
    display:flex;
    justify-content:center;
    align-items:center;
    img{
      width:24px;
      height:24px;
    }
    p{
      padding:5px 10px;
      background-color:#fb7299;
      color:white;
      margin:8px;
      border-radius:3px;
    }
  }
  }
</style>
