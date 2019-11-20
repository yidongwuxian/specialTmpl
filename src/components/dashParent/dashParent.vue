<template>
  <!--<div class="dash-parent" :class="[isActive? 'active':'']" @mouseover="showDash" @mouseleave="hideDash"-->
  <div class="dash-parent" :class="[isActive? 'active':'']"
       v-if="isModuleShow">
    <div class="dash-box">
        <span class="dash-icon icon-edit" v-if="isActive" :style="{'background-color':editBgColor}"
          @click="showEditDialog">编辑</span>
        <span class="dash-icon icon-add" v-if="isActive" :style="{'background-color':addBgColor}" @click="childAdd">添加</span> 
        <span class="dash-icon icon-delete" v-if="isActive" :style="{'background-color':delBgColor}" @click="childDelete">删除</span>
    </div>     
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      editBgColor: {
        type: String,
        default: '#d9420d'
      },
      addBgColor: {
        type: String,
        default: '#d9420d'
      },
      delBgColor: {
        type: String,
        default: '#d9420d'
      }
    },
    data() {
      return {
        isActive: true,
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
    cursor: pointer;
    border: 1px dashed transparent;
    padding: 24px 0 10px;
    margin: 0 20px;
    .dash-box{
        position:absolute;
        right:0;
        top:0;
        z-index:10;
        width:150px;
        height:24px;
        .dash-icon{
          display:inline-block;
          float:left;
          width: 50px;
          height: 24px;
          color:#5b5e05;
          &:hover{
            background-color: #2bd8ae;
          }
          .icon-edit{
          }
          .icon-add{
            
          }
          .icon-delete{
            
          }
        }
    }
}
</style>
