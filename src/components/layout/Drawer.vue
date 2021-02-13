<template lang="pug">
v-navigation-drawer(app fixed temporary v-bind="$attrs" v-on="$listeners")
  v-list
    v-list-item(v-for="menu in menus" :key="menu.title" :to="menu.path")
      v-list-item-title(v-text="menu.title")
</template>

<script>
export default {
  name: 'AppDrawer',
  props: ['menus']
}
</script>

<style>

</style>
