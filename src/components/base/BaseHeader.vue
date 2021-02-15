<template lang="pug">
div.base-section-heading
  h1.text-h3.font-weight-500.mb-2.text-center {{ title }}
  v-responsive.primary.mx-auto.base-divider(max-width="28" v-bind="$attrs" v-on="$listeners")
      v-divider(mb="6")
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    title: String
  }
}
</script>

<style>
.v-divider {
    border-width: 2px 0 0 0 !important
}
</style>
