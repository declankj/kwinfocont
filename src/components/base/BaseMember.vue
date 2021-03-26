<template lang="pug">
v-card(tile elevation="0")
  v-row
    v-col(cols="3")
      v-img(:src="require(`../../assets/img/${filename}`)")
    v-col(cols="9")
      base-table(:head="table.head" :body="table.body")
</template>

<script>
export default {
  name: 'BaseMember',
  components: {
    BaseTable: () => import('./BaseTable.vue')
  },
  props: {
    filename: String,
    table: Object
  }
}
</script>

<style>

</style>
