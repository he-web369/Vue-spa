<template>
  <section class="loginContainer">
    <section class="h2">账户信息</section>
    <section class="profile_my_order msg ">
        用户名：{{userInfo.name||'无'}}
    </section>
    <section class="profile_my_order msg ">
        电话号码：{{userInfo.phone||'无'}}
    </section>
    <section class="profile_my_order ">
        <mt-button type='danger' style="width:100%" v-show="userInfo._id" @click="logout">退出登录</mt-button>
    </section>
    <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
    </a>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import {MessageBox} from 'mint-ui'
export default {
  computed: {
      ...mapState(['userInfo'])
  },
  methods: {
      logout(){
      MessageBox.confirm('确认退出吗？').then(action=>{
        this.$store.dispatch('logout')
      },
      action=>{}
      )
    }
  }
 }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .loginContainer
    width 100%
    height 100%
    background #fff
    position relative
    .h2
      font-size 30px
      font-weight bold
      color #02a774
      text-align center
      padding-top 100px
    .profile_my_order
      margin 20px 0
      background #fff
      &.msg
          margin 20px 10px
          border 1px solid rgba(0,0,0,0.5)
          line-height 40px
          padding 0 10px
    .go_back
      position absolute
      z-index 100
      top 20px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 30px
        color #999
</style>
 