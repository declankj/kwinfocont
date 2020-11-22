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
</style>
