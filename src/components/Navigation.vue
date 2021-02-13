<template>
    <div>
        <wide/>
        <mobile/>
    </div>
</template>

<script>
export default {
  components: {
    wide: () => import('./base/gnb_wide.vue'),
    mobile: () => import('./base/gnb_mobile.vue')
  }
}
</script>

<style>
@import '../assets/css/layout.css';
</style>
