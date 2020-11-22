module.exports = {
  css: {
    loaderOptions: {
      //scss 로드 (전역 사용가능)
      scss: {
        prependData: `@import "@/assets/scss/main.scss";
                      @import "@/assets/scss/tabmenu.scss";`
      }
    }
  }
}
