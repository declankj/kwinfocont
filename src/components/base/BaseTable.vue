<template lang="pug">
v-simple-table
  template(v-slot:default)
    thead
      tr
        template(v-for="(item, i) in head")
          th(:key="i") item
    tbody
      tr(v-for="(items, i) in body" :key="i")
        template(v-for="(item, j) in items")
          th(:key="j") item
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    head: Array,
    body: Array
  }
}
</script>

<style>

</style>
