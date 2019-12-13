<template>
  <div ref="asideLeftHook">
     <!-- 主体 start -->
     <div class="main">
        <!--版心 start -->
        <div class="d_layout">
            <!--组件 start -->
            <d-font v-if="hConfig.isFontShow == true"></d-font>
            <d-banner v-if="hConfig.isBannerShow == true"></d-banner>
            <d-swiper v-if="hConfig.isSwiperShow == true"></d-swiper>
            <!--组件 end -->
        </div>
        <!--版心 end -->
     </div>
     <!--组件编辑区 start -->
        <d-attribute v-if="isAttribute == true" :hConfig="hConfig"></d-attribute>
        <!--组件编辑区 end -->
     <!-- 主体 end -->
  </div>
</template>

<script>
//组件
//属性
import dFont from '@/components/font/font.vue';
import dBanner from '@/components/banner/banner.vue';
import dSwiper from '@/components/swiper/index.vue';
import dAttribute from '@/components/attribute/index.vue';

export default {
  components: {
    dFont,
    dBanner,
    dSwiper,
    dAttribute
  },
  name: 'index',
  data () {
    return {
      //默认样式
      //组件样式
      hConfig: {
        isFontShow: false,
        isBannerShow: false,
        isSwiperShow: false
      },
      //属性选择区是否显示
      isAttribute: false,
    }
  },
  // 生命周期函数
  created: function () {
    // 接收到保存的信息
    this.$hub.$on('funSel', (id) => {
      if(id == 1){
        this.hConfig.isFontShow = true;
      }
      if(id == 2){
        this.hConfig.isBannerShow = true;
      }
      if(id == 6){
        this.hConfig.isSwiperShow = true;
      }
      //显示属性编辑区
      this.isAttribute = true;
    })
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
.main{
  position:relative;
  width:1920px;
  height:1080px;
  background:#fff;
  margin:0 auto;
  .d_layout{
    position:relative;
    width:1200px;
    height:1080px;
    background:#ccc;
    margin:0 auto;
  }
}
</style>
