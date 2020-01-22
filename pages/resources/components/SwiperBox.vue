<style scoped lang="scss">
.swiper_b{
    width:333px;
    height:227px;
}
</style>
<template>
  <div>
    <swiper :options="swiperOption" class="swiper_b">
        <swiper-slide v-for="(item,index) in swiperArrBox" :key="index">
            <img :src="item.picUrl" style="height:100%"/>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
  export default {
    name: 'SwiperBox',
    data() {
      return {
          swiperArrBox: [{
                "picUrl": "/static/imgs/baseSwiper/swiper1.jpg"
            },
            {
                "picUrl": "/static/imgs/baseSwiper/swiper2.jpg"
            },
            {
                "picUrl": "/static/imgs/baseSwiper/swiper3.jpg"
            }],
          swiperOption: {
            //可选选项，自动滑动
            autoplay: true,
            // 循环滚动
            loop : true
          }
      };
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

