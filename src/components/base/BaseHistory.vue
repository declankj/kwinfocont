<template lang="pug">
v-list.base-history.pa-0
  template(v-for="(item, i) in history")
    v-list-item(:key="i")
      v-list-item-title
        span.time-left {{item.time}}
        span.content-right {{item.content}}
    v-divider
</template>

<script>
export default {
  name: 'BaseHistory',
  props: {
    history: Array
  }
}
</script>

<style>
.time-left {
  font-size: 18px;
  font-weight: bold;
  color: #6e0a20;
  line-height: 160%;
}
.content-right {
  font-size: 14px;
  font-weight: bold;
  color: #666;
  padding-left: 10px;
  line-height: 160%;
}
</style>
