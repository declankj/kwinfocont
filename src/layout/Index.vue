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
        {
          name: '학과소개',
          child: [
            { name: '학과장 인사말', path: 'About' }
          ]
        },
        {
          name: '교육과정',
          child: [
            { name: '커리큘럼', path: '' }
          ]
        },
        {
          name: '학사행정',
          child: [
            { name: '학사일정', path: '' }
          ]
        },
        {
          name: '커뮤니티',
          child: [
            { name: '공지사항', path: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
