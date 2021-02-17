<template lang="pug">
v-navigation-drawer(v-bind="$attrs" v-on="$listeners" app fixed temporary)
  v-list
    v-list-group(v-for="(item, i) in menus" :key="i")
      template(v-slot:activator)
        v-list-item-title {{item.name}}
      v-list-item(v-for="(child, j) in item.child" :key="j" link)
        v-list-item-title {{child.name}}
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
