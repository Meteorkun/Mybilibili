<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/login')">切换到登录
    </div>
    </login-top>
    <login-text
      label="姓名"
      style="margin:4.167vw 0;"
      type="text"
      rule="^.{6,16}$"
      placeholder="请输入姓名"
    />
    <login-text
      label="账号"
      type="text"
      rule="^.{6,16}$"
      placeholder="请输入账号"
    />
    <login-text
      label="密码"
      type="password"
      rule="^.{6,16}$"
      placeholder="请输入密码"
    />
    <login-btn btnText="注册"></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
    data() {
        return {
          model:{
            name:'',
            username:'',
            password:''
          }
        }
    },
    components:{
      LoginTop,
      LoginText,
      LoginBtn
    },
    methods:{

    }
}
</script>

<style lang="less">

</style>
