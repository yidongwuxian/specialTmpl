<template>
  <div> 
    <div v-for="(item,index) in fontNameArr" :key="index">
      <!--文字内容 start-->
      <div :class="item.isClick? 'current_sty font_style' : 'font_style'" @click="clickFontDiv(item)">
          <vue-drag-resize 
              :w="vw" 
              :h="vh" 
              :minw="minw"
              :minh="minh"
              :left="item.position.left"
              :top="item.position.left"
              :z="item.position.zIndex" 
              :resizing="resize" 
              :dragging="resize" 
              :isActive = 'true'
              >
              <p :style="{
                'font-family':item.style.font, 
                'text-align':item.style.align
                }"
              >{{item.style.text}}</p>
          </vue-drag-resize>
      </div>
      <!--文字内容 end-->
      <!--文字样式 start-->
      <div class="attr-box"> 
        <div class="font-box">
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
      fontNameArr: [{
        isClick: false,
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
    this.$hub.$on('fontNum', (num) => {
        console.log('f:'+JSON.stringify(this.fontNameArr[0] ) );
        //  let ztop = this.fontNameArr[num].position.top + this.initPos;
        //  let zleft = this.fontNameArr[num].position.left + this.initPos;
        //  console.log('ztop:'+JSON.stringify(ztop) );
        //  console.log('zleft:'+JSON.stringify(zleft) );
          
            let fontObj = {
              isClick: false,
              position:{
                top:    ztop,
      　　　     left:  zleft,
                zIndex: num
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
    //缩小
    resize(newRect) {
      this.vw = newRect.width;
      this.vh = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    //点击选项
    clickFontDiv(item){
      //this.clearData();
      item.isClick = true;
      console.log('item:'+JSON.stringify(item) );
    },
    clearData(){
        this.fontNameArr.forEach((item) => {
            item.isClick = false;  
        });
    }
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
    font-family:'思源黑体 CN Medium'; 
    text-align: center;
    min-width:200px; 
    min-height:20px; 
    width: 200px; 
    height:30px;
    left: 40px;
    top: 80px; 
    z-index: 10; 
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
