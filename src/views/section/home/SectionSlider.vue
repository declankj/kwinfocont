<template lang="pug">
section#section-slider
  v-carousel(cycle interval="2000" hide-delimiter-background height="400" show-arrows-on-hover)
    v-carousel-item(v-for="(color, i) in colors" :key="color")
      v-sheet(:color="color" height="100%" tile)
        v-row(class="fill-height" align="center" justify="center")
          div.display-3 Slide {{ i + 1 }}
</template>

<script>
export default {
  name: 'SectionSlider',
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange'
    ]
  })
}
</script>

<style>

</style>
