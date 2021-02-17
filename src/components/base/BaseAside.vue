<template lang="pug">
v-row(justify="end")
  v-col(cols="7")
    v-card.ma-0(width="252" tile)
      v-img(:src="require('../../assets/img/sub_tit_bg.jpg')")
      v-list
        v-list-item(v-for="(item, i) in menus" :key="i" link)
          v-list-item-title {{item.name}}
</template>

<script>
export default {
  name: 'BaseAside',
  props: {
    menus: Array
  }
}
</script>

<style>

</style>
