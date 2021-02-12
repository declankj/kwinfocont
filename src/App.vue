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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
