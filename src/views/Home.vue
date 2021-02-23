<template lang="pug">
v-container.pa-0
  section-slider
</template>
<script>
export default {
  name: 'Home',
  components: {
    SectionSlider: () => import('./section/home/SectionSlider.vue')
  }
}
</script>
