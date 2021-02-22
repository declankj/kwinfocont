<template lang="pug">
  section#section-main-history
    base-small-title(:title="title")
    base-history(:history="history")
</template>

<script>
export default {
  name: 'SectionMainHistory',
  components: {
    BaseSmallTitle: () => import('../../../components/base/BaseSmallTitle.vue'),
    BaseHistory: () => import('../../../components/base/BaseHistory.vue')
  },
  computed: {
    title: {
      get () {
        return this.$store.state.history.main.title
      }
    },
    history: {
      get () {
        return this.$store.state.history.main.history
      }
    }
  }
}
</script>

<style>

</style>
