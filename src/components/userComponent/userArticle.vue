<template>
  <div class="user-article">
    <div>
      <span>动态</span>
      <span>视频</span>
    </div>
    <div>暂无内容</div>
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
  .user-article{
    >div:nth-child(1){
      display:flex;
      align-items:center;
      background-color:white;
      height:11.111vw;
      padding:0 2.778vw;
      border-top:1px solid #ddd;
      span{
        margin:0 1.944vw;
        color:#777;
      }
    }
    div:nth-child(2){
      display:flex;
      flex:1;
      justify-content:center;
      color:#777;
    }
  }
</style>
