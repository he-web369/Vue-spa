<template>
  <div class="star " :class="`star-${size}`">
        <span 
        class="star-item " 
        v-for="(item,index) in starsByScore" 
        :key='index'
        :class="item"
        ></span>
  </div>
</template>

<script>
export default {
  props: {
      score:Number,
      size:Number
  },
  computed: {
      starsByScore(){
          const stars=[]
          const scoreInteger=Math.floor(this.score)
          for(let i=0;i<scoreInteger;i++){
              stars.push('on')
          }
          if(this.score*10-scoreInteger*10>=5){
              stars.push('half')
          }
          for(let j=0;j<5-stars.length;j++){
              stars.push('off')
          }
          return stars
      }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/mixins.stylus'
                  .star 
                    float left
                    font-size 0
                    .star-item
                      display inline-block
                      background-repeat no-repeat
                    &.star-48
                      .star-item
                        width 20px
                        height 20px
                        margin-right 22px
                        background-size 20px 20px
                        &:last-child
                          margin-right: 0
                        &.on
                          bg-image('../../assets/images/stars/star48_on')
                        &.half
                          bg-image('../../assets/images/stars/star48_half')
                        &.off
                          bg-image('../../assets/images/stars/star48_off')
                    &.star-36
                      .star-item
                        width 15px
                        height 15px
                        margin-right 6px
                        background-size 15px 15px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../assets/images/stars/star36_on')
                        &.half
                          bg-image('../../assets/images/stars/star36_half')
                        &.off
                          bg-image('../../assets/images/stars/star36_off')
                    &.star-24
                      .star-item
                        width 10px
                        height 10px
                        margin-right 3px
                        background-size 10px 10px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../assets/images/stars/star24_on')
                        &.half
                          bg-image('../../assets/images/stars/star24_half')
                        &.off
                          bg-image('../../assets/images/stars/star24_off')
</style>
 