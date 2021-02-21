<template lang="pug">
  v-app
    app-bar(:logo='logo')
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
      logo: '/'
    }
  }
}
</script>

<style>
  #app {
  color: ##B71C1C;
}
</style>
