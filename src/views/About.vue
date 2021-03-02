<template lang="pug">
v-container
  section-title
  section-greeting
</template>

<script>
export default {
  name: 'About',
  components: {
    SectionTitle: () => import('./section/common/SectionTitle.vue'),
    SectionGreeting: () => import('./section/about/SectionGreeting.vue')
  }
}
</script>

<style>

</style>
