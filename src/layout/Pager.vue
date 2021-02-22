<template lang="pug">
v-container.pa-0
  v-row(no-gutters justify="center")
    v-col(cols="12")
      section-alt
    v-col(md="10")
      v-row
        v-col(xl="2" lg="3" md="4").hidden-sm-and-down
          section-aside
        v-col
          v-container.pa-4
            router-view
</template>

<script>
import SectionAlt from './section/SectionAlt.vue'
import SectionAside from './section/SectionAside.vue'
export default {
  metaInfo: { title: 'Login' },
  name: 'Pager',
  components: {
    SectionAlt,
    SectionAside
  }
}
</script>

<style>

</style>
