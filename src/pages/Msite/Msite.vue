<template>
  <div>
    <div class="on">
      <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address" class="header" >
          <router-link class="header_search" slot="header_search" to='/search'>
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link class="header_login" slot="header_login" :to="$store.state.userInfo._id ? '/userInfo':'/login'">
            <span class="header_login_text" v-if="!$store.state.userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person" ></i> 
            </span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in categorysArr" :key='index'>
                <a href="javascript:" class="link_to_food" v-for="(aa,index2) in item" :key='index2'>
                  <div class="food_container">
                    <img :src="baseImgUrl+aa.image_url">
                  </div>
                  <span>{{aa.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="../../assets/images/msite_back.svg" alt="加载前图片" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'

import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'

export default {
  data () {
    return {
      baseImgUrl:'https://fuss10.elemecdn.com/'  
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  watch: {
    categorys(value){
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          loop:true,
          pagination:{
            el:'.swiper-pagination'
          }
        })
      })
    }
  },
  components: {
    HeaderTop,ShopList
  },
  computed: {
    ...mapState(['address','categorys']),
    categorysArr(){
      const {categorys}=this
      const arr=[]
      let minArr=[]
      categorys.forEach(item=>{
        if(minArr.length===8){
          minArr=[]
        }
        if(minArr.length===0){
          arr.push(minArr)
        }
        minArr.push(item)
      })
      return arr
    }
  }
 }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/mixins.stylus'
.msite 
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
 