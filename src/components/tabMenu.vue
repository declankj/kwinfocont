<template>
    <div class="header">
      <div class="nav">
        <div class="logo">
          <img alt="Kwangwoon Logo" src="../assets/img/logo.gif">
           <span>정보콘텐츠학과</span>
        </div>
        <div class = "nav_menu">
            <router-link to="/">학과안내</router-link>
            <router-link to="/about">학사행정</router-link>
            <router-link to="/about">커리큘럼</router-link>
            <router-link to="/about">커뮤니티</router-link>
        </div>
      </div>
    </div>
</template>
<style>
.notice {
  padding-top : 20px;
  width: 72%;
  height : 60px;
  margin: 0 auto;
}
#gallery ul li { float: left; width: 280px; }
#gallery ul li a { display: block; }
#gallery ul li a span { display: table-cell; vertical-align: middle; text-align: center; width: 280px; height: 192px; border: 1px solid #dfdfdf; }
#gallery ul li a p { width: 100%; font-size: 13px; color: #444; margin-top: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
ul,li { list-style: none; }
#gallery { height: 178px; }

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:10px;
}
.title {
height: 50px;
line-height: 50px;
background:skyblue;
font-weight: bold;
}
p {
  margin: 0;
}
</style>
