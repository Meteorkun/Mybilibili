<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/register')">用户注册
    </div>
    </login-top>
    <login-text
      label="账号"
      type="text"
      style="margin:4.167vw 0;"
      rule="^.{6,16}$"
      placeholder="请输入账号"
      @inputChange="res =>model.username =res"
    />
    <login-text
      label="密码"
      type="password"
      rule="^.{6,16}$"
      placeholder="请输入密码"
      @inputChange="res =>model.password =res"
    />
    <login-btn btnText="登录" @registeSubmit="registeSubmit"></login-btn>
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
      async registeSubmit(){
        // 正则校验
        let rulg = /^.{6,16}$/
        if(rulg.test(this.model.username) && rulg.test(this.model.password)){
          const res = await this.$http.post('/login',this.model)
          this.$msg.fail(res.data.msg)
          console.log(res)
          // 登录成功后跳转到个人中心页面
          if(res.data.code == 200){
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("token",res.data.token)
            setTimeout(()=>{
              this.$router.push('/userinfo')
            },1000)
          }
        }else{
          this.$msg.fail('输入格式有误!')
        }
      }
    }
}
</script>

<style lang="less">

</style>
