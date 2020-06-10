<template>
  <div @click="bannerClick">
    <div class="editbanner">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props:['left'],
    methods:{
      bannerClick(){
        this.$emit('bannerClick')
      }
    }
}
</script>

<style lang="less">
  .editbanner{
    background-color:white;
    color:#333;
    padding:15px;
    font-size:16px;
    border-bottom:1px solid #eee;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
</style>
