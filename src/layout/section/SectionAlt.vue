<template lang="pug">
  section#page-alt
    base-alt(:title="menus[menuIndex.main].child[menuIndex.child].name" :filename="menus[menuIndex.main].img")
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SectionAlt',
  components: {
    BaseAlt: () => import('../../components/base/BaseAlt.vue')
  },
  computed: { ...mapState(['menuIndex', 'menus']) }
}
</script>

<style>

</style>
