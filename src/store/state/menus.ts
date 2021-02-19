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
        { name: '연혁', path: 'About' },
        { name: '교수 소개', path: 'About' }
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
  ]
}

export default menuState
