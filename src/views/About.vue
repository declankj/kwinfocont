<template lang="pug">
v-container.pa-0
  section-alt
</template>

<script>
export default {
  name: 'About',
  components: {
    SectionAlt: () => import('./section/about/SectionAlt.vue')
  }
}
</script>

<style>

</style>
