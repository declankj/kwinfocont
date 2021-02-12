<template>

  <div id="home">
    <div id="app">
      <Slider
        animation="fade"
        v-model="sliderValue"
        :duration="5000"
        :speed="1000"
        style="height:400px"
      >
        <SliderItem
          v-for="(i, index) in list"
          :key="index"
          @click="changeIndex(1);"
          :style="i"
        >
          <p style="line-height: 280px; font-size: 5rem; text-align: center;">
            Page  {{i.backgroundColor}}
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
            backgroundColor: '#3f51b5',
            width: '100%',
            height: '700px'
          },
          {
            backgroundColor: '#eee',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#f44336',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#eee',
            width: '100%',
            height: '100%'
          }
        ]), 10
    )
  }
}
</script>
