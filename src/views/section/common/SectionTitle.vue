<template lang="pug">
  section#section-title.mb-5
    base-title(:title="title")
</template>

<script>
export default {
  name: 'SectionTitle',
  components: {
    BaseTitle: () => import('../../../components/base/BaseTitle.vue')
  },
  computed: {
    title: {
      get () {
        const index = this.$store.state.menuIndex
        return this.$store.state.menus[index.main].child[index.child].name
      }
    }
  }
}
</script>

<style>

</style>
