<template lang="pug">
section#section-Member
  template(v-for="(item, i) in member")
    base-Member(:key="i" :filename="item.img" :table="item.table")
</template>

<script>
export default {
  name: 'SectionMember',
  components: {
    BaseMember: () => import('../../../components/base/BaseMember.vue')
  },
  computed: {
    member: {
      get () {
        return this.$store.state.member
      }
    }
  }
}
</script>

<style>

</style>
