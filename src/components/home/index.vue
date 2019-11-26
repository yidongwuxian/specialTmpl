<template>
  <div ref="asideLeftHook">
     <!-- 主体 start -->
     <div class="main">
        <!--版心 start -->
        <div class="d_layout">
            <!--组件 start -->
            <d-font v-if="isFontShow == true"></d-font>
            <!--组件 end -->
        </div>
        <!--版心 end -->
     </div>
     <!--组件编辑区 start -->
        <!--<d-attribute v-if="isAttribute == true"></d-attribute>-->
        <!--组件编辑区 end -->
     <!-- 主体 end -->
  </div>
</template>

<script>
//组件
//属性
import dFont from '../font/font.vue';
//import dAttribute from '../attribute/attribute.vue';

export default {
  components: {
    dFont,
    //dAttribute
  },
  name: 'index',
  data () {
    return {
      //默认样式
      //组件样式
      isFontShow: false,
      //属性选择区是否显示
      isAttribute: false,
    }
  },
  // 生命周期函数
  created: function () {
    // 接收到保存的信息
    this.$hub.$on('funSel', (id) => {
      if(id == 1){
        this.isFontShow = true;
      }
      //显示组件编辑区
      //this.isAttribute = true;
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
