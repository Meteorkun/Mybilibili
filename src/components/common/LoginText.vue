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
          content:''
        }
    },
    components:{

    },
    props:['label','type','placeholder','rule'],
    methods:{
      // RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
      handlerulg(){
        const rue = new RegExp(this.rule)
        if(rue.test(this.content)){
          this.$emit('inputChange',this.content)
        }
      },
    },
    watch:{
      content(){
        this.handlerulg()
      }
    }
}
</script>

<style lang="less">

</style>
