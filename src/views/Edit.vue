<template>
  <div v-if="model" class="editViews">
    <div>
      <nav-bar style="margin-bottom:10px;"></nav-bar>
    </div>
    <div class="uploadfile">
      <van-uploader class="uploadimg" preview-size="100vw" :after-read="afterRead" />
      <edit-banner left="头像">
        <img :src="imgUrl" alt="" slot="right">
        <!-- <img src="@/assets/default_img.jpg" alt="" slot="right" v-else> -->
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
       <a href="javascript:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="gendershow = true">
      <a href="javascript:;" slot="right">{{model.gender == 1? '男' : '女'}}</a>
    </edit-banner>
    <edit-banner left="个签" @bannerClick="textshow = true">
       <a href="javascript:;" slot="right">{{model.user_desc}}</a>
    </edit-banner>

    <div class="editback" @click="$router.push('/userinfo')">返回个人中心</div>

    <!-- 昵称修改弹出框 -->
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmClick" @cancel="content = ''">
          <van-field v-model="content" autofocus />
    </van-dialog>

    <!-- 个签修改弹出框 -->
    <van-dialog v-model="textshow" title="个签" show-cancel-button @confirm="textareaClick" @cancel="content = ''">
          <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <!-- 昵称修改弹出框 -->
    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
  import NavBar from '@/components/common/Navbar.vue'
  import editBanner from '@/components/common/editBanner.vue'
  export default {
      data() {
          return {
              imgUrl:'',
              model:{},
              show:false,
              textshow:false,
              gendershow:false,
              content:'',
              actions: [
                  { name: '男',val:1 },
                  { name: '女',val:0 },
              ],
          }
      },
      components:{
          NavBar,
          editBanner
      },
      methods:{
          //进入组件调取数据渲染页面
          async selectUser() {
              const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
              this.model = res.data[0]
              this.imgUrl = res.data[0].user_img
          },
         // 上传图像
         async afterRead(file) {
             const fromdata = new FormData()
             fromdata.append('file',file.file)
             const res =  await this.$http.post('/upload',fromdata)
             this.model.user_img = res.data.url
             this.UserUpdate()
             // this.$refs.navbar.NavInit()
         },
         async UserUpdate() {
             const res = await this.$http.post('/update/' + localStorage.getItem('id'),this.model)
             if(res.data.code == 200){
                 this.$msg.fail('修改成功')
             }
         },
         confirmClick() {
             this.model.name =  this.content
             this.UserUpdate()
             this.content = ''
         },
         textareaClick() {
             this.model.user_desc = this.content
             this.UserUpdate()
             this.content = ''
         },
         onSelect(data) {
             this.model.gender = data.val
             this.UserUpdate()
             this.gendershow = false
         }
      },
      created(){
          this.selectUser()
      }
  }
</script>

<style scoped lang="less">
.editViews a{
    color: #333;
}
.editViews img{
    height: 12.778vw;
    width: 12.778vw;
    border-radius: 50%;
}
.uploadfile{
    overflow: hidden;
    position: relative;
    .uploadimg{
        opacity: 0;
        position: absolute;
    }
}
.editback{
    margin-top: 5.556vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    color: #999;
    padding: 4.167vw 0;
    font-size: 4vw;
}
</style>
