<template lang="pug">
div.base-section-title
  h1.text-h5.font-weight-500 {{ title }}
  v-divider.mt-3.mb-3
</template>

<script>
export default {
  name: 'BaseSmallTitle',
  props: {
    title: String
  }
}
</script>

<style>

</style>
