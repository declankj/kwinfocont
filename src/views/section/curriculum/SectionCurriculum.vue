<template lang="pug">
  section#section-curriculum
    base-small-title(:title="title")
    base-curriculum(:curriculum="curriculum" :items="items")
</template>

<script>
export default {
  name: 'SectionCurriculum',
  components: {
    BaseSmallTitle: () => import('../../../components/base/BaseSmallTitle.vue'),
    BaseCurriculum: () => import('../../../components/base/BaseCurriculum.vue')
  },
  computed: {
    title: {
      get () {
        return this.$store.state.curriculum.main.title
      }
    },
    curriculum: {
      get () {
        return this.$store.state.curriculum.main.curriculum
      }
    },
    items: {
      get () {
        return this.$store.state.items
      }
    }
  }
}
</script>

<style>

</style>
