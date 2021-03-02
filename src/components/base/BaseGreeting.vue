<template lang="pug">
v-card(tile elevation="0")
  v-card-title {{ title }}
  p
    span
      v-img(:src="require(`../../assets/img/${filename}`)" width="130")
      | {{ content }}
</template>

<script>
export default {
  name: 'BaseGreeting',
  props: {
    title: String,
    filename: String,
    content: String
  }
}
</script>

<style>

</style>
