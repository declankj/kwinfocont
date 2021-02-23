<template lang="pug">
div.base-header
  h1.text-h3.font-weight-500.text-center {{ title }}
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    title: String
  }
}
</script>
