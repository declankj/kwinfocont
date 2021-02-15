<template lang="pug">
  section#page-alt
    base-alt(title="About" filename="visual02.jpg")
</template>

<script>
export default {
  name: 'SectionAlt',
  components: {
    BaseAlt: () => import('../../../components/base/BaseAlt.vue')
  }
}
</script>

<style>

</style>
