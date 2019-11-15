<template>
  <div ref="asideLeftHook">
     <dash-parent v-if="isDash == true">
        <hd :swidth="swidth" :sheight="sheight" :backgroundStyle="backgroundStyle"></hd>
     </dash-parent> 
     <dash-parent v-if="isDash == true">  
        <d-banner></d-banner>
     </dash-parent v-if="isDash == true">
     <dash-parent v-if="isDash == true" @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
        <d-item></d-item>
     </dash-parent> 
     <div style="width: 1200px; margin: 0 aut;">
      <button type="button" class="layui-btn layui-btn-lg layui-btn-normal" @click="">保存</button>
      <button type="button" class="layui-btn layui-btn-lg layui-btn-normal">取消</button>
    </div>
  </div>
</template>

<script>
import dashParent from '../dashParent/dashParent.vue';
import hd from '../hd/hd.vue';
import dBanner from '../banner/banner.vue';
import dItem from '../item/item.vue';
export default {
  components: {
    dashParent,
    hd,
    dBanner,
    dItem
  },
  name: 'index',
  data () {
    return {
      isDash: true,
      swidth: '100%',
      sheight: '40px',
      backgroundStyle: '#d50000'
    }
  },
  // 生命周期函数
  created: function () {
    // 接收到保存的信息
    
  },
  methods: {

  }
}
</script>
<style lang="scss">
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
</style>
