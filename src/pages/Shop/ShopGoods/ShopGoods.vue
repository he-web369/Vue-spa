<template>
<div>
  <div class="goods">
      <div class="menu-wrapper" >
        <ul>
          <li @click="clickMenuItem(index)" class="menu-item" v-for="(item,index) in goods" :key='index' :class="{current:index===currentIndex}">
            <span class="text bottom-boder-1px">
              <img :src="item.icon" alt="图片" class="icon" v-if="item.icon">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" >
        <ul>
          <li class="food-list-hook " v-for="(item,index) in goods" :key='index'>
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li @click='showFood(item2)' v-for="(item2,index2) in item.foods" :key='index2' class="food-item bottom-border-1px">
                <div class="icon">
                  <img :src="item2.image" alt="图片" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{item2.name}}</h2>
                  <p class="desc">{{item2.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{item2.sellCount}}份</span>
                    <span>赞{{item2.rating}}</span> 
                  </div>
                  <div class="price">
                    <span class="now">￥{{item2.price}}</span>
                    <span class="old" v-if="item2.oldPrice">￥{{item2.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper"><CartControl :food='item2'/></div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
  </div>
  <Food :food='food' ref="food"/>
</div>
  
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import CartControl from '../../../components/CartControl/CartControl'
import Food from '../../../components/Food/Food'
import ShopCart from '../../../components/ShopCart/ShopCart'

export default {
  components: {
   CartControl,Food,ShopCart 
  },
  data() { 
    return {
      tops:[],
      scrollY:0,//右侧滑动过程中的Y轴坐标
      food:{}
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods',()=>{
      this.$nextTick(()=>{
        this._initScroll()
        this._initTops()
      })
    })
  },
  methods: {
    _initScroll(){
      new BScroll('.menu-wrapper',{
          scrollY:true,
          click:true
        })
        this.foodsScroll=new BScroll('.foods-wrapper',{
          probeType:2
        })
        this.foodsScroll.on('scroll', (event) =>{
          this.scrollY=Math.abs(event.y)
        })
        this.foodsScroll.on('scrollEnd',({x,y})=>{
          this.scrollY=Math.abs(y)
        })
    },
    _initTops(){
      const tops=[]
      const lis=document.getElementsByClassName('food-list-hook')
      let top=0
      tops.push(top)
      Array.prototype.slice.call(lis).forEach(element => {
        top +=element.clientHeight
        tops.push(top)
      })
      this.tops=tops
    },
    clickMenuItem(index){
      this.foodsScroll.scrollTo(0,-this.tops[index],500)
      this.scrollY=this.tops[index]
    },
    showFood(food){
      //更新food
      this.food=food
      //显示food组件
      this.$refs.food.toggleShow()
    }
  },
  computed: {
    ...mapState(['goods']),
    currentIndex(){
      const {scrollY,tops}=this
      const index=tops.findIndex((top,index)=>{
          return scrollY>=top && scrollY<tops[index+1]&&(index+1)<tops.length
      })
      return index
    }
  }
 }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../../assets/stylus/mixins.stylus'
.goods
  display: flex
  position: absolute
  top: 195px
  bottom: 46px
  width: 100%
  background: #fff
  overflow hidden
  .menu-wrapper
    flex 0 1 80px
    width 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      line-height: 14px
      &.current
        position: relative
        z-index: 10
        margin-top: -1px
        background: #fff
        color: $green
        font-weight: 700
        .text
          border-none()
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
  .foods-wrapper
    flex 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147, 153, 159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .desc, .extra
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 12px
</style>
 