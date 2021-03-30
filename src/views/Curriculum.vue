<template lang="pug">
v-container
  section-title
  section-curriculum
</template>

<script>
export default {
  name: 'Curriculum',
  components: {
    SectionTitle: () => import('./section/common/SectionTitle.vue'),
    SectionCurriculum: () => import('./section/curriculum/SectionCurriculum.vue')
  }
}
</script>

<style>

</style>
