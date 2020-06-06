<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['middleTop'],
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
  .LoginTop{
    height:12.889vw;
    background-color:white;
    display:flex;
    div{
      display:flex;
      flex:1;
      justify-content:center;
      align-items:center;
      font-size:4.444vw;
    }
  }
</style>
