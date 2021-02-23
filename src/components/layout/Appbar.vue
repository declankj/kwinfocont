<template lang="pug">
div
  v-app-bar.white(app height="80" elevation="1")
    v-spacer
    v-toolbar-title
      router-link(to="/" tag="span" style="cursor: pointer")
        v-img.shrink.ma-0(:src="require('../../assets/img/logo.gif')" transition='scale-transition')
        p.text-caption.text-end.ma-0.font-weight-bold 정보콘텐츠학과
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-menu(v-for="(item, i) in menus" :key="i" open-on-hover offset-y)
        template(v-slot:activator="{ on }")
          v-btn.white(text exact v-on="on") {{ item.name }}
        v-list(tile)
          v-list-item(v-for="(sub, j) in item.child" :key="j")
            v-btn(text @click="onclick(sub.path, i, j)") {{ sub.name }}
    v-spacer.hidden-sm-and-down
    v-app-bar-nav-icon.hidden-md-and-up(@click="drawer = !drawer")
  app-drawer(v-model="drawer" :menus="menus")
</template>

<script>
import { mapState } from 'vuex'
import AppDrawer from './Drawer.vue'
export default {
  name: 'AppBar',
  components: {
    AppDrawer
  },
  computed: { ...mapState(['menus']) },
  methods: {
    onclick (target, index, child) {
      this.$store.dispatch('changeMenu', { index, child })
      this.$router.push({ name: target })
    }
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>

</style>
