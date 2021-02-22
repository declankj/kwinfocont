<template lang="pug">
  v-app
    app-bar
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
  }
}
</script>
