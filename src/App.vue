<template>
  <div id="app">
    <tabMenu/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import tabMenu from '@/components/tabMenu.vue'
export default {
  components: {
    tabMenu
  }
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.logo{
  width:163px;
  height : 70px;
  float : left;
  span{
    font-size: 12px;
    display: block;
    text-align: right;
  }
  img{
    vertical-align:bottom;
    margin:0;
    width:163px;
    height:46px;
  }
}
.nav_menu{
  margin-left : 100px;
  width : 50%;
  height : 46px;
  margin : 0, auto;
  float : left;
  min-width : 480px;
  a {
    position: relative;
    top: 10px;
    display:inline-block;
    height:70px;
    text-decoration : none;
    font-size : 20px;
    /*font-weight: bold;*/
    color: #2c3e50;
    margin-right : 50px;
  }
}
.nav {
  padding-top : 20px;
  width: 70%;
  height : 60px;
  margin: 0 auto;
}
.header {
  width: 100%;
}
</style>
