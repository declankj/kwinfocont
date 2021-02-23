<template lang="pug">
div.base-section-title
  h1.text-h4.font-weight-bold {{ title }}
  v-divider.mt-3.mb-3
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String
  }
}
</script>

<style>

</style>
