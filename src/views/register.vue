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
      @inputChange="res => model.name = res"
    />
    <login-text
      label="账号"
      type="text"
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
    <login-btn btnText="注册" @registeSubmit="registeSubmit"></login-btn>
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
      async registeSubmit(){
        // 正则校验
        let rulg = /^.{6,16}$/
        if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
          const res = await this.$http.post('/register',this.model)
          this.$msg.fail(res.data.msg)
          console.log(res)
          // 注册完成后跳转到个人中心页面
          if(res.data.code == 200){
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("token",res.data.objtoken)
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
