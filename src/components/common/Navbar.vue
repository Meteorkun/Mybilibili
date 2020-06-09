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
      <img src="@/assets/default_img.jpg" alt="">
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components:{

    },
    methods:{

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
      display:flex;
      flex:1;
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
          margin:5px 0;
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
        margin:8px;
        padding:5px 10px;
        color:white;
        background-color:#fb7299;
        border-radius:3px;
      }
    }
  }
</style>
