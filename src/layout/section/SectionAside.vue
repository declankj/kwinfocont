<template lang="pug">
  section#aside-menu
    base-aside(:title="menus[menuIndex.main].name" :menus="menus[menuIndex.main].child")
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SectionAside',
  components: {
    BaseAside: () => import('../../components/base/BaseAside.vue')
  },
  computed: { ...mapState(['menuIndex', 'menus']) }
}
</script>

<style>

</style>
