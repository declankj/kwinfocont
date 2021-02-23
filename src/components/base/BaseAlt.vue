<template lang="pug">
v-img.white--text(:src="require(`../../assets/img/${filename}`)" :height="$vuetify.breakpoint.mdAndUp ? 250 : 225" color="#45516b" max-width="100%" flat  gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)")
  v-row.ma-0.fill-height.text-center(align="center" justify="center")
    v-col(cols="12")
      base-header(:title="title")
</template>

<script>
export default {
  name: 'BaseAlt',
  components: {
    BaseHeader: () => import('./BaseHeader.vue')
  },
  props: {
    title: String,
    filename: String
  }
}
</script>

<style>

</style>
