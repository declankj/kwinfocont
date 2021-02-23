<template lang="pug">
div.base-sub-header
  h2.headline.font-weight-500.text-center.white--text {{ title }}
</template>

<script>
export default {
  name: 'BaseSubHeader',
  props: {
    title: String
  }
}
</script>
