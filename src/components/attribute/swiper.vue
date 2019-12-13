<template>
  <div class="attr-box"> 
    <!--轮播图配置文件-->
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="左右箭头:">
            <el-switch v-model="form.arrows"></el-switch>
        </el-form-item>
        <el-form-item label="分页器:">
            <el-switch v-model="form.pagination"></el-switch>
        </el-form-item>
        <el-form-item label="自动播放:">
            <el-radio-group v-model="form.autoplay">
                <el-radio :label="1">启用</el-radio>
                <el-radio :label="0">关闭</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  props: {
    
  },
  name: 'swiper',
  data () {
    return {
        form: {
          arrows: false,
          pagination: false,
          autoplay: 0
        }
    }
  },
  created: function () {
    
  },
  methods: {
   onSubmit() {
     this.$hub.$emit('swiperConfig', this.form);
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
