<template lang="pug">
v-container
  section-title
  section-main-history
</template>

<script>
export default {
  name: 'History',
  components: {
    SectionTitle: () => import('./section/common/SectionTitle.vue'),
    SectionMainHistory: () => import('./section/history/SectionMainHistory.vue')
  }
}
</script>

<style>

</style>
