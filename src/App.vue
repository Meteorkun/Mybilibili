<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color:#f4f4f4;
 }
 p{
  margin:0;
  padding:0;
 }
</style>
