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
  font-size: 25px;
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

<template>
  <v-container fluid>
    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-2"
      >커리큘럼</v-flex
    >
    <v-tabs color="cyan" slider-color="red darken-4">
      <v-tab
        v-for="(item, idx) in items"
        :key="item.title"
        :href="'#tab-' + idx"
        >{{ item.title }}</v-tab
      >
      <v-tab-item
        v-for="(item, idx) in items"
        :key="item.title"
        :value="'tab-' + idx"
      >
        <v-card flat>
          <v-card-title primary-title>
                        <div v-for="curriculum in item.curriculums" :key="curriculum.subject" class="columns">
                          <ul class="price" >
                              <li class="header">{{curriculum.subject}}</li>
                              <li class="greyList">{{curriculum.professor}}</li>
                              <li>{{curriculum.day}}</li>
                              <li>{{curriculum.semester}}</li>
                              <li class="greyList"><a href="#" class="button">상세정보</a></li>
                          </ul>
                        </div>

                <!--<table id="list">
                    <thead>
                        <tr>
                            <th>과목</th>
                            <th>교수명</th>
                            <th>수업요일</th>
                            <th>학기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="curriculum in item.curriculums" :key="curriculum.subject">
                            <td>{{curriculum.subject}}</td>
                            <td>{{curriculum.professor}}</td>
                            <td>{{curriculum.day}}</td>
                            <td>{{curriculum.semester}}</td>
                        </tr>
                    </tbody>
                </table>!-->
          </v-card-title>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          title: '1학년',
          text: '각 나라, 도시별로 특색있는 음식 맛보기',
          curriculums: [{
            subject: '문화콘텐츠의 이해',
            professor: '정형원',
            day: '수요일',
            semester: '1학기',
            credits: 3
          },
          {
            subject: '멀티미디어개론',
            professor: '홍길동',
            day: '토요일',
            semester: '1학기',
            address: 1
          },
          {
            subject: '현대사회와 윤리',
            professor: '정형원',
            day: '토요일',
            semester: '1학기',
            address: 1
          },
          {
            subject: '창의적 아이디어 발상',
            professor: '정형원',
            day: '토요일',
            semester: '1학기',
            address: 1
          }
          ]
        },
        {
          title: '2학년', text: '각 나라, 도시별로 특색있는 공연, 미술 관람하기'
        },
        { title: '3학년', text: '각 나라, 도시별만의 특별한 아이템 쇼핑하기' },
        {
          title: '4학년', text: '색다른 체험이나 자연 속에서 휴식하기'
        }
      ]
    }
  }
}
</script>
