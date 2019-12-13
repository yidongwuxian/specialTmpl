<template>
  <div> 
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in picArr" :key="index" >
            <img class="lazy" v-lazy="'/static/image/banner/'+item.pic" />
        </swiper-slide>
        <div v-if="swiperConfig.isPage   === true" class="swiper-pagination" slot="pagination"></div>
        <div v-if="swiperConfig.isArrows === true" class="swiper-button-prev" slot="button-prev"></div>
        <div v-if="swiperConfig.isArrows === true" class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    /*
    ** 组件显示
    */
    // swiperConfig: {
    //   type: Object
    // },
    /*
    *  数据源
    */
    picArr: {
      type: Array
    }
  },
  name: 'swiperItem',
  data () {
    return {
      /*
      ** 轮播图配置文件
      */
      swiperOption: {
        autoplay: false,
        observer:true, 
        observeParents:true
      }, 
      swiperConfig: {}
    } 
  },
  created() {
    
  },
  mounted() {
    this.$hub.$on('swiperConfig', (data) => {  
      this.swiperConfig.isAutoPlay = data.autoplay;
      this.swiperConfig.isPage = data.pagination;
      this.swiperConfig.isArrows = data.arrows;
       this.$nextTick(() => {
           this.initSwiper();
       });  
    })
  },
  methods: {
    initSwiper(){
        //自动播放
        if(this.swiperConfig.isAutoPlay === 1){
            this.$set(this.swiperOption, 'autoplay', {
                delay: 1500,
                disableOnInteraction: false
            });
        }
        //分页器
        if(this.swiperConfig.isPage === true){
            this.$set(this.swiperOption, 'pagination', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }
        //左右箭头
        if(this.swiperConfig.isArrows === true){
            this.$set(this.swiperOption, 'navigation', {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            });
        }
    }
  },
}
</script>
<style lang="scss" scoped>
.banner .swiper-container{
  width:100%;
  height:300px;
  .swiper-wrapper{
    height:300px;
  }
}
.lazy{
  width: 100%;
  height:100%;
}
</style>
