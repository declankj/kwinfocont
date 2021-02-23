<template lang="pug">
v-footer.grey.darken-2(padless)
  v-row(justify="center" no-gutters)
    v-btn.mt-2.mb-2(v-for="(foot, i) in this.$store.state.footer" :key="i" color="white" text rounded) {{ foot.name }}
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
</style>
