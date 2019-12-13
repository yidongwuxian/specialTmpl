<template>
  <div class="attr-box"> 
    <!--轮播图配置文件-->
    <div>
        <swiper-box v-if="this.hConfig.isSwiperShow === true"></swiper-box>
    </div>
  </div>
</template>
<script>
import swiperBox from '@/components/attribute/swiper.vue';
export default {
  components: {
    swiperBox
  },
  props: {
    hConfig: {
        type: Object
    }
  },
  name: 'index',
  data () {
    return {
      
    }
  },
  created: function () {
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
.attr_tt{
  margin-bottom:15px;
  padding:0 10px;
  border-bottom:1px solid #606266;
}

/deep/ .el-form-item__label{
  color:#fff;
}
</style>
