<template>
    <div class="header">
      <div class="nav" >
        <div class="logo">
          <router-link to="/">
          <img alt="Kwangwoon Logo" src="../assets/img/logo.gif" />
          <span>정보콘텐츠학과</span>
          </router-link>
        </div>
        <div id="navmenu" class = "nav_menu">
            <router-link to="/info" >
              <div @mouseover="mouseOver('info')" >
                학과안내
              </div>
            </router-link>
            <router-link to="/bachelor" >
              <div @mouseover="mouseOver('bachelor')" >
                학사행정
              </div>
            </router-link>
            <router-link to="/curriculum">
              <div @mouseover="mouseOver('curriculum')">
                커리큘럼
              </div>
            </router-link>
            <router-link to="/community">
              <div @mouseover="mouseOver('community')">
                커뮤니티
              </div>
            </router-link>
            <router-link to="/apply">
              <div @mouseover="mouseOver('apply')">
                입학
              </div>
            </router-link>
        </div>
      </div>
    </div>
</template>
<script >
export default {
  methods: {
    data: {
      selMenu: String
    },
    mouseOver: function (select) {
      this.selMenu = select
    }
  }
}
</script>
