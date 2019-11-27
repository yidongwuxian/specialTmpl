<template>
  <div class="attr-box"> 
    <!--文字样式-->
    <div class="font-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="文字样式" class="attr_tt"></el-form-item>
          <el-form-item label="字体：" class="mb15">
            <el-select v-model="form.font" placeholder="字体" @change="changeFont">
              <el-option label="思源黑体 CN Regular"     value="思源黑体 CN Regular"></el-option>
              <el-option label="思源黑体 CN Thin"        value="思源黑体 CN Thin"></el-option>
              <el-option label="思源黑体 CN Light"       value="思源黑体 CN Light"></el-option>
              <el-option label="思源黑体 CN DemiLight"   value="思源黑体 CN DemiLight"></el-option>
              <el-option label="思源黑体 CN Medium"      value="思源黑体 CN Medium"></el-option>
              <el-option label="思源黑体 CN Blod"        value="思源黑体 CN Blod"></el-option>
              <el-option label="思源黑体 CN Black"       value="思源黑体 CN Black"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="对齐：" class="mb15">
            <el-select v-model="form.align" placeholder="对齐方式" @change="changeAlign">
              <el-option label="left" value="left"></el-option>
              <el-option label="right" value="right"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="justify" value="justify"></el-option>
              <el-option label="inherit" value="inherit"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容：" class="mb15" @change="changeText">
             <el-input type="textarea" v-model="form.text" placeholder="输入内容"></el-input>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  props: {
    
  },
  name: 'attribute',
  data () {
    return {
      form: {
        font: '',
        align: '',
        text: '',
        num: ''
      }
    }
  },
  created: function () {
    this.$hub.$on('fontNum', (numObj) => {
      this.form.num = numObj.num;
      this.$hub.$emit('fontFn', this.form);
    })
  },
  methods: {
   changeFont(val){
    this.form.font = val;
    this.$hub.$emit('fontFn', this.form);
   },
   changeAlign(val){
    this.form.align = val;
    this.$hub.$emit('fontFn', this.form);
   },
   changeText(val){
     this.form.text = val;
     this.$hub.$emit('fontFn', this.form);
   }
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
