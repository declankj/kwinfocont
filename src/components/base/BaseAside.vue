<template lang="pug">
v-row(justify="end")
  v-col(cols="7")
    v-card.ma-0(width="252" tile elevation="0")
      v-img(:src="require('../../assets/img/sub_tit_bg.jpg')")
        v-row.ma-0.fill-height.text-center(align="center" justify="center")
          v-col(cols="12")
            base-sub-header(:title="title")
      v-list.pa-0
        template(v-for="(item, i) in menus")
          v-list-item(:key="i" link)
            v-list-item-title {{item.name}}
          v-divider.aside-menu
</template>

<script>
export default {
  name: 'BaseAside',
  components: {
    BaseSubHeader: () => import('./BaseSubHeader.vue')
  },
  props: {
    title: String,
    menus: Array
  }
}
</script>

<style>
.aside-menu {
  border-width: 1px 0 0 0 !important;
}
</style>
