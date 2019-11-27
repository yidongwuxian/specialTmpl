<template>
  <div> 
    <div v-for="(item,index) in fontNameArr" :key="index" :ref="item.id"  @click="clickFontDiv(index)">
      <!--文字内容 start-->
      <vue-drag-resize 
          :w="vw" 
          :h="vh" 
          :minw="minw"
          :minh="minh"
          :left="item.position.left"
          :top="item.position.top"
          :z="item.position.zIndex" 
          style="position:absolute;"
          :isActive = 'true'
          >
          <p 
           :class="{current_sty:index+1==arrNum}" 
           :style="{
            'font-family':item.style.font, 
            'text-align':item.style.align,
            //'color': arrNum === index+1 ? '#ff0000' : ''
            }"
          ><span>{{item.style.text}}{{arrNum}}</span></p>
      </vue-drag-resize>
      <!--文字内容 end-->
      <!--文字样式 start-->
      <div class="attr-box"> 
        <div class="font-box" v-if="arrNum === index+1">
            <el-form ref="form" :model="item.style" label-width="80px">
              <el-form-item label="文字样式" class="attr_tt"></el-form-item>
              <el-form-item label="字体：" class="mb15">
                <el-select v-model="item.style.font" placeholder="字体">
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
                <el-select v-model="item.style.align" placeholder="对齐方式">
                  <el-option label="left" value="left"></el-option>
                  <el-option label="right" value="right"></el-option>
                  <el-option label="center" value="center"></el-option>
                  <el-option label="justify" value="justify"></el-option>
                  <el-option label="inherit" value="inherit"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="内容：" class="mb15">
                <el-input type="textarea" v-model="item.style.text" placeholder="输入内容"></el-input>
              </el-form-item>
            </el-form>
        </div>
      </div>
      <!--文字样式 end-->
    </div>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  props: {
    
  },
  name: 'font',
  data () {
    return {
      minw: 200,
      minh: 30,
      vw: 200,
　　　 vh: 50,
      initPos: 20,
      arrNum: 1,
      fontNameArr: [{
        isClick: false,
        id: 'zBoy1',
        position:{
          top: 20,
　　　    left:20,
          zIndex: 1
        }, 
        style:{
            font: '',
            align: '',
            text: '输入文字'
        }
      }],
      //字体库
      fontFam: '',
      //对齐方式
      fontAlign: '',
    }
  },
  created: function () {
    this.initPos+= this.initPos + 15; 
    // this.left = this.left + this.initPos;
    // this.top  = this.top  + this.initPos;
    
    // 接收到保存的信息
    this.$hub.$on('fontNum', (numObj) => {
        this.arrNum = numObj.num;
        console.log('num1:'+JSON.stringify(this.arrNum ) );
        //  let ztop = this.fontNameArr[num].position.top + this.initPos;
        //  let zleft = this.fontNameArr[num].position.left + this.initPos;
        //  console.log('ztop:'+JSON.stringify(ztop) );
        //  console.log('zleft:'+JSON.stringify(zleft) );
          
            let fontObj = {
              isClick: false,
              id: 'zBoy'+numObj.num,
              position:{
                top:    this.vh + numObj.posLeft,
      　　　     left:  20,
                zIndex: this.arrNum
              }, 
              style:{
                  font: '',
                  align: '',
                  text: '输入文字'
              }
            };
            this.fontNameArr.push(fontObj);
          
    })
  },
  mounted() {
    this.initPos+= this.initPos + 5; 
    this.left = this.left + this.initPos;
    this.top  = this.top  + this.initPos;
    //字体文件
    // this.$hub.$on('fontFn', (data) => {
    //    if(data.font){
    //         this.fontNameArr[i].style.fontFamily = data.font;
    //    }
    //    if(data.align){
    //         this.fontNameArr[i].style.textAlign = data.align;
    //    }  
    // })

  },
  methods: {
    //点击选项
    clickFontDiv(index){
      this.arrNum = index + 1;
    },
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
.font_style{
  position:absolute;
  top:30px;
}
.current_sty{
    border:1px dashed #ff0000;
}
.attr_tt{
  margin-bottom:15px;
  padding:0 10px;
  border-bottom:1px solid #606266;
}

/deep/ .el-form-item__label{
  color:#fff;
}
</style>
