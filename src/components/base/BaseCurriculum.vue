<template lang="pug">
  div
    v-container(fluid)
    v-flex.text-xs-center.display-1.font-weight-black.my-2(xs12) 커리큘럼
    v-tabs(color='cyan' slider-color='red darken-4')
      v-tab(v-for='(item, idx) in items' :key='item.title' :href='\'#tab-\' + idx') {{ item.title }}
      v-tab-item(v-for='(item, idx) in items' :key='item.title' :value='\'tab-\' + idx')
        v-card(flat)
          v-card-title(primary-title)
            .columns(v-for='curriculum in item.curriculums' :key='curriculum.subject')
              ul.price
                li.header {{curriculum.subject}}
                li.greyList {{curriculum.professor}}
                li {{curriculum.day}}
                li {{curriculum.semester}}
                li.greyList
                  a.button(href='#') 상세정보
</template>

<script>
export default {
  name: 'BaseCurriculum',
  props: {
    curriculum: Array,
    items: Object
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
