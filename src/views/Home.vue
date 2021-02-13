<template>
  <div id="home">
    <div id="app">
      <Slider animation="fade" v-model="sliderValue" :interval="20000" :duration="5000" :speed="1000" style="height:400px">
        <SliderItem v-for="(i, index) in list" :key="index" @click="changeIndex(1);" :style="i">
          <!--<img :src="i.path">-->
          <img :src="i.path">
              <p style="line-height: 280px; font-size: 5rem; text-align: center;">
            광운대학교  {{i.backgroundColor}}
          </p>
        </SliderItem>
      </Slider>
    </div>
    <div id="notice" class="notice">
      <div id="gallery">
        <ul>
          <li>
            <a href="">
              <span>
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
              </span>
            </a>
          </li>
       </ul>
      </div>
      <div id="gallery">
          <ul>
            <li>
              <a href="">
                <span>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                </span>
              </a>
            </li>
         </ul>
       </div>
     </div>

  </div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'App',
  components: {
    Slider,
    SliderItem
  },
  data () {
    return {
      list: [],
      sliderValue: 2
    }
  },
  methods: {
    changeIndex (index) {
      this.sliderValue = index
    }
  },
  mounted () {
    setTimeout(
      () =>
        (this.list = [
          {
            path: require('../assets/img/pegasus-big.png'),
            width: '100%',
            height: '700px',
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'gradient 20s ease infinite'
          },
          {
            path: require('../assets/img/pegasus-big.png'),
            width: '100%',
            height: '100%',
            background: 'linear-gradient(-45deg, #ee7752, #8f4643, #7e051f, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'gradient 10s ease infinite',
            color: 'white'
          }
        ]), 10
    )
  }
}
</script>
<style>
#app {
            background1: linear-gradient(-45deg, #7a0501, #e73c7e, #ffffff, #7e051f);
            background2: linear-gradient(-45deg, #ee7752, #e73c7e, #7e051f, #23d5ab);
}

@keyframes gradient {
0% {
background-position: 0% 50%;
}
50% {
background-position: 100% 50%;
}
100% {
background-position: 0% 50%;
}
}
</style>
