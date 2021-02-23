<template lang="pug">
//- v-row.pa-3(justify="end")
v-card.ma-0(tile elevation="0")
  v-img(:src="require('../../assets/img/sub_tit_bg.jpg')")
    v-row.ma-0.fill-height.text-center(align="center" justify="center")
      v-col(cols="12")
        base-sub-header(:title="title")
  v-list.pa-0
    v-list-item-group(v-model="message")
      template(v-for="(item, i) in menus")
        v-list-item(:key="i")
          v-list-item-title {{item.name}}
          v-list-item-icon
            v-icon mdi-arrow-right
        v-divider.aside-menu
</template>

<script>
export default {
  name: 'BaseAside',
  components: {
    BaseSubHeader: () => import('./BaseSubHeader.vue')
  },
  computed: {
    message: {
      get () {
        return this.$store.state.menuIndex.child
      },
      set (value) {
        this.$store.dispatch('changeMenu', { index: -1, child: value })
        this.$router.push({ name: this.menus[value].path })
      }
    }
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
