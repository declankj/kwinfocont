<template lang="pug">
v-footer.grey.darken-2(padless)
  v-row(justify="center" no-gutters)
    v-btn.mt-2.mb-2(v-for="(foot, i) in footer" :key="i" color="white" text rounded) {{ foot.name }}
</template>

<script>
export default {
  data () {
    return {
      footer: [
        { name: '개인정보처리방침', link: './' },
        { name: '이메일 무단 수집 거부', link: './' },
        { name: '광운대학교 홈페이지', link: './' },
        { name: '강의실 현황', link: './' }
      ]
    }
  }
}
</script>

<style>
</style>
