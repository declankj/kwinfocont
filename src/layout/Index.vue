<template lang="pug">
  v-app
    app-bar(:logo='logo' :menus='menus')
    v-main
      router-view
    app-footer
</template>

<script>
import AppBar from '../components/layout/Appbar.vue'
import AppFooter from '../components/layout/Footer.vue'
export default {
  metaInfo: { title: 'Login' },
  name: 'App',
  components: {
    AppBar,
    AppFooter
  },
  data () {
    return {
      logo: '/',
      menus: [
        { title: '학과소개', path: '/' },
        { title: '교육과정', path: '/' },
        { title: '학사행정', path: '/' },
        { title: '커뮤니티', path: '/' }
      ]
    }
  }
}
</script>

<style>

</style>
