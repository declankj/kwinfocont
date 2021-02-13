<template lang="pug">
div
  v-app-bar.white(app height="80" elevation="1")
    v-spacer
    v-toolbar-title
      router-link(:to="logo" tag="span" style="cursor: pointer")
        v-img.shrink.mr-2(:src="require('../../assets/img/logo.gif')" transition='scale-transition' max-width='230' width="100%")
    v-spacer
    div.white
      v-tabs.hidden-sm-and-down
        v-tab.font-weight-bold(text v-for="menu in menus" :key="menu.title" :to="menu.path") {{ menu.title }}
    v-spacer
    v-app-bar-nav-icon.hidden-sm-and-up(@click="drawer = !drawer")
  app-drawer(v-model="drawer" :menus="menus")
</template>

<script>
import AppDrawer from './Drawer.vue'
export default {
  name: 'AppBar',
  components: {
    AppDrawer
  },
  props: {
    logo: String,
    menus: Array
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>

</style>
