<template>
  <div ref="asideLeftHook">
     <fun-hd></fun-hd>
     <dash-parent :editBgColor="'#00c091'" :addBgColor="'#0bedf0'">
        <hd :swidth="swidth" :sheight="sheight" :backgroundStyle="backgroundStyle"></hd>
     </dash-parent> 
     <dash-parent :editBgColor="'#00c091'" :addBgColor="'#0bedf0'">  
        <d-banner></d-banner>
     </dash-parent>
     <dash-parent @eventShowDialog="ShowFormDialog" :editBgColor="'#00c091'" :addBgColor="'#0bedf0'">
        <d-item></d-item>
     </dash-parent> 
     <!--编辑表单信息的弹窗-->
    <base-dialog v-show="false" id="idBaseDialog"
                 @dialogEventSave="dialogSaveForm"
                 @dialogEventCancel="dialogCancelForm">
    </base-dialog>
    <div class="dialog-btns">
      <XUIButton class="dialog-btn dialog-save" @click="saveFn">保存</XUIButton>
      <XUIButton class="dialog-btn dialog-cancel" @click="cancelFn">取消</XUIButton>
    </div>
  </div>
</template>

<script>
import dashParent from '../dashParent/dashParent.vue';
import hd from '../hd/hd.vue';
import funHd from '../funhd/funhd.vue';
import dBanner from '../banner/banner.vue';
import dItem from '../item/item.vue';
import baseDialog from '../baseDialog/baseDialog.vue';
export default {
  components: {
    dashParent,
    hd,
    dBanner,
    dItem,
    baseDialog,
    funHd
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
    // 打开编辑表单信息框
    ShowFormDialog() {
      this.dialogIndex = this.$layer.open({
          type: 1,
          shadeClose: true,
          title: '编辑表单信息',
          skin: 'layui-layer-molv',
          area: ['740px', '400px'],
          content: this.$jquery('#idBaseDialog')
        }
      );
    },
    // 表单信息编辑保存
    dialogSaveForm(userInfo) {
     
      this.$layer.close(this.dialogIndex);
    },
    // 表单信息编辑取消
    dialogCancelForm() {
      this.$layer.close(this.dialogIndex);
    },
    //保存
    saveFn(){
        
    },
    //撤销
    cancelFn(){
        
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
</style>
