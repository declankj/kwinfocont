<template lang="pug">
  v-app
    app-bar(:logo='logo')
    v-main
      v-container.pa-0
        section-alt
        v-row(no-gutters)
          v-col(md="3").hidden-md-and-down
            section-aside
          v-col(md="9")
            router-view
    app-footer
</template>

<script>
import AppBar from '../components/layout/Appbar.vue'
import AppFooter from '../components/layout/Footer.vue'
import SectionAlt from './section/SectionAlt.vue'
import SectionAside from './section/SectionAside.vue'
export default {
  metaInfo: { title: 'Login' },
  name: 'App',
  components: {
    AppBar,
    AppFooter,
    SectionAlt,
    SectionAside
  },
  data () {
    return {
      logo: '/'
    }
  }
}
</script>

<style>

</style>
