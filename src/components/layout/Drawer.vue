<template lang="pug">
v-navigation-drawer(v-bind="$attrs" v-on="$listeners" app fixed temporary)
  v-list
    v-list-group(v-for="(item, i) in menus" :key="i")
      template(v-slot:activator)
        v-list-item-title {{item.name}}
      v-list-item(v-for="(child, j) in item.child" :key="j" link)
        v-list-item-title {{child.name}}

//- v-navigation-drawer(app fixed temporary v-bind="$attrs" v-on="$listeners")
//-   v-menu(v-for="(item, i) in menu" :key="i" open-on-hover offset-y)
//-   v-list
//-     v-list-item(v-for="menu in menu" :key="menu.name")
//-       v-list-item-title(v-text="menu.title")
</template>

<script>
export default {
  name: 'AppDrawer',
  props: {
    menus: Array
  }
}
</script>

<style>

</style>
