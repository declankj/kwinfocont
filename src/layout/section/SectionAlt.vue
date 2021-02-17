<template lang="pug">
  section#page-alt
    base-alt(:title="menus[menuIndex].name" :filename="menus[menuIndex].img")
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
