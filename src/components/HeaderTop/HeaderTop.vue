<template>
  <div >
      <header class="header">
          <slot name='header_search'></slot>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <slot name='header_login'></slot>
        </header>
  </div>
</template>

<script>
export default {
    props:{
        title:String
    }
 }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '../../assets/stylus/mixins.stylus'
  header()
</style>
 