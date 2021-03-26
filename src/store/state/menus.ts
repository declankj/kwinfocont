const menuState = {
  menuIndex: {
    main: 0,
    child: 0
  },
  menus: [
    {
      name: '학과소개',
      img: 'visual02.jpg',
      child: [
        { name: '학과장 인사말', path: 'About' },
        { name: '연혁', path: 'History' },
        { name: '교수 소개', path: 'Member' }
      ]
    },
    {
      name: '교육과정',
      img: 'visual02.jpg',
      child: [
        { name: '커리큘럼', path: 'Curriculum' }
      ]
    },
    {
      name: '학사행정',
      img: 'visual02.jpg',
      child: [
        { name: '학사일정', path: '' }
      ]
    },
    {
      name: '커뮤니티',
      img: 'visual02.jpg',
      child: [
        { name: '공지사항', path: '' }
      ]
    }
  ],
  footer: [
    { name: '개인정보처리방침', link: './' },
    { name: '이메일 무단 수집 거부', link: './' },
    { name: '광운대학교 홈페이지', link: './' },
    { name: '강의실 현황', link: './' }
  ]
}

export default menuState
