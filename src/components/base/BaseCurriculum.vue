<template lang="pug">
  div
    v-container(fluid)
    v-flex
    v-tabs(color='cyan' slider-color='red darken-4')
      v-tab(v-for='(item, idx) in subjects' :key='item.title' :href='\'#tab-\' + idx') {{ item.title }}
      v-tab-item(v-for='(item, idx) in subjects' :key='item.title' :value='\'tab-\' + idx')
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
    subjects: Object
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Create three columns of equal width */
.columns {
  float: left;
  width: 33.3%;
  padding: 8px;
}

/* Style the list */
.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

/* Add shadows on hover */
.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

/* Pricing header */
.price .header {
  background-color: #77222d;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  height: 105px;
}

/* List items */
.price li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

/* Grey list item */
.price .greyList {
  background-color: #eee;
  font-size: 20px;
}

/* The "Sign Up" button */
.button {
  background-color: #77222d;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

/* Change the width of the three columns to 100%
(to stack horizontally on small screens) */
@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}

</style>
