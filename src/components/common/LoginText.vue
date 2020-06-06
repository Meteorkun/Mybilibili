<template>
  <div>
     <van-field
      v-model="content"
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
          content:'',
        }
    },
    components:{

    },
    props:['label','type','placeholder','rule'],
    methods:{
      watch:{
        content(){
        }
      }
    }
}
</script>

<style lang="less">

</style>
