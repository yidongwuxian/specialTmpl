<!--编辑表单信息弹框-->
<template>
  <div class="base-info-dialog">
    <!--信息输入区域-->
    <div class="dialog-msg-input">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="domain.name"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true, message: '域名不能为空', trigger: 'blur'
            }"
          >
          <el-input v-model="domain.value" class="input-width mb20"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item class="dialog-btns">
          <el-button class="dialog-btn dialog-save" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button class="dialog-btn dialog-cancel" @click="addDomain">新增选项</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        city: '',
        workAge: '',
        phone: '',
        email: '',
        desc: '',
        // 信息汇总
        dynamicValidateForm: {
          domains: [{
            value: '',
            name: '姓名',
          }]
        }
      };
    },
    methods: {
      eventSave() {
        this.$emit('dialogEventSave', this.dynamicValidateForm.domains);
      },
      eventCancel() {
        this.$emit('dialogEventCancel', 'cancel');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$emit('dialogEventSave', this.dynamicValidateForm.domains);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          name: '姓名',
          key: Date.now()
        });
      }
    }
  };
</script>
<style lang="scss">
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
.base-info-dialog{
  text-align: left;
  .dialog-msg-input{
     padding: 25px 40px 10px;
     overflow: hidden;
     .base-info-item{
        display: inline-block;
        float: left;
        margin: 0 20px 24px 0;
        label{
          margin-right: 20px;
        }
        input{
          width: 210px;
          height: 32px;
          border: 1px solid #d4dbe0;
          color: #222;
          padding-left: 10px;
          box-sizing: border-box;
        }
     }  
  }
  .dialog-btns{
    margin-top: 15px;
    text-align: center;
    .dialog-btn{
        border: none;
        outline: none;
        border-radius: 8px;
        width: 100px;
        height: 40px;
        margin: 0 15px;
        cursor: pointer;
    }
    .dialog-save{
        color: #fff;
        background-color: #009f95;
        &:hover{
          background-color: #11c4b9;
        }
    }
    .dialog-cancel{
        background-color: #ccc;
        &:hover{
          background-color: #ddd;
        }
    }
  }
}
</style>
