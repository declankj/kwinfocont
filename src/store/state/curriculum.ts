const curriculumState = {
  curriculum: {
    main: {
      title: '커리큘럼1',
      curriculum: [
        { time: '1971', content: '커리큘럼1' },
        { time: '1971', content: '커리큘럼2' },
        { time: '1971', content: '커리큘럼3' }
      ]
    }
  },
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
export default curriculumState
