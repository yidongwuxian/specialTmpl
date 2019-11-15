<template>
  <div class="dash-parent" :class="[isActive? 'active':'']" @mouseover="showDash" @mouseleave="hideDash"
       v-if="isModuleShow">
    <span class="dash-icon icon-edit" v-if="isActive" :style="{'background-color':editBgColor}"
          @click="showEditDialog"></span>
    <span class="dash-icon icon-add" v-if="isActive" :style="{'background-color':addBgColor}" @click="childAdd"></span>
    <span class="dash-icon icon-delete" v-if="isActive" @click="childDelete"></span>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      editBgColor: {
        type: String,
        default: '#666'
      },
      addBgColor: {
        type: String,
        default: '#666'
      }
    },
    data() {
      return {
        isActive: false,
        isModuleShow: true
      };
    },
    methods: {
      showDash() {
        this.isActive = true;
      },
      hideDash() {
        this.isActive = false;
      },
      childAdd() {
        this.$emit('eventAdd', 'add');
      },
      childDelete() {
        this.$layer.open({
          icon: 3,
          anim: 6,
          title: '删除',
          skin: 'layui-layer-molv',
          content: '您真的想删除这个模块吗？',
          shadeClose: true,
          btn: ['是哒~', '再想想'],
          btn1: (index) => {
            this.isModuleShow = false;
            this.$layer.close(index);
          },
          btn2: (index) => {
          }
        });
      },
      showEditDialog() {
        this.$emit('eventShowDialog', 'dialog');
      },
      // 打开编辑基础信息框
      ShowDialogListener() {
        this.dialogIndex = this.$layer.open({
            type: 1,
            shadeClose: true,
            title: '编辑基础信息',
            skin: 'layui-layer-molv',
            area: ['740px', '400px'],
            content: this.$jquery('#idBaseDialog')
          }
        );
      },

      // 基础信息编辑保存
      dialogSaveListener(userInfo, userName) {
        // 遍历赋值
        this.userInfoArr.forEach((info, index) => {
          info.title = userInfo[index].name;
          console.log(info.title);
        });
        // 姓名
        this.userName.name = userName.name;
        this.userName.desc = userName.desc;
        this.$layer.close(this.dialogIndex);
      },

      // 基础信息编辑取消
      dialogCancelListener() {
        this.$layer.close(this.dialogIndex);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dash-parent.active{
    border: 1px dashed #00c091;
  }
    
  .dash-parent{
    position: relative;
    text-align: left;
    cursor: pointer;
    border: 1px dashed transparent;
    padding: 24px 0 10px;
    margin: 0 20px;
    .dash-icon{
      float: right;
      margin-top: -24px;
      width: 24px;
      height: 24px;
      &:hover{
        background-color: #2bd8ae;
      }
      .icon-edit{
        background: #00c091 url(../../../static/image/toolbar.png) no-repeat 0 0;
        background-position: -210px 2px;
      }
      .icon-add{
        background: #00c091 url(../../../static/image/toolbar.png) no-repeat 0 0;
        background-position: -125px 3px;
        margin-right: 30px;
      }
      .icon-delete{
        background: #00c091 url(../../../static/image/toolbar.png) no-repeat 0 0;
        background-position: -154px 3px;
        margin-right: 60px;
      }
    }
  }
    
    
</style>
