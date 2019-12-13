<template>
  <div> 
    <div class="banner">
        <swiper-item 
          :picArr="picArr"
        ></swiper-item>
    </div>
  </div>
</template>
<script>
import swiperItem from '@/components/swiper/swiperItem.vue';
export default {
  components: {
    swiperItem
  },
  name: 'swiper',
  data () {
    return {
      /*
      ** 轮播图配置选项
      */
      /*
      ** 轮播图数据源
      */
      picArr:[
        {
          pic: 'banner.jpg'
        },
        {
          pic: 'banner_item1.jpg'
        }
      ]
    } 
  },
  created() {
    
  },
}
</script>
<style lang="scss" scoped>
</style>
