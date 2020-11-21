module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/main.scss";
                      @import "@/assets/scss/tabmenu.scss";`
      }
    }
  }
}
