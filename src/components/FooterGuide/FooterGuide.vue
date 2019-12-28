<template>
  <div class='footer_guide'>
    <span @click="goto('/msite')" class="guide_item " :class="{on:'/msite'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span @click="goto('/search')" class="guide_item " :class="{on:'/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span @click="goto('/order')" class="guide_item " :class="{on:'/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span  @click="goto('/profile')" class="guide_item " :class="{on:'/profile'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>
<script>
export default {
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
 }
</script>

<style  lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/mixins.stylus'
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  display flex    
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #ffffff
  width 100%
  height 50px
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #99999
    &.on 
      color deepskyblue
    span 
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px  
</style>
