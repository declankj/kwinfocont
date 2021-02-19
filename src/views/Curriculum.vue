<template>
  <v-container fluid>
    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-2"
      >커리큘럼</v-flex
    >
    <v-tabs color="cyan" slider-color="purple darken-4">
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
        <v-card flat height="400px" color="grey lighten-4">
          <v-card-title primary-title>
                <table id="list">
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
                </table>
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
