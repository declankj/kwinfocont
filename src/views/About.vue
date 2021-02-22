<template lang="pug">
v-container
  section-title
</template>

<script>
export default {
  name: 'About',
  components: {
    SectionTitle: () => import('./section/common/SectionTitle.vue')
  }
}
</script>

<style>

</style>
