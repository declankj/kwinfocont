<template>
    <div class="header" id="nav">
      <div class="nav" >
        <div class="logo">
          <router-link to="/">
          <img alt="Kwangwoon Logo" src="../assets/img/logo.gif" />
          <span>정보콘텐츠학과</span>
          </router-link>
        </div>
        <div id='navmenu' class = "nav_menu" >
            <router-link to="/info">학과안내<div class="line"></div></router-link>
            <router-link to="/bachelor">학사행정</router-link>
            <router-link to="/curriculum">커리큘럼</router-link>
            <router-link to="/community">커뮤니티</router-link>
            <router-link to="/apply">입학</router-link>
        </div>
      </div>
    </div>
</template>
<script>

// import Vue from 'vue'

</script>
