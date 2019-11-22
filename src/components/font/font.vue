<template>
  <div> 
    <div v-for="(item,index) in fontNameArr" :key="index">
      <div :class="item.isClick? 'current_sty font_style' : 'font_style'" @click="clickFontDiv(item)">
            <!-- :style="{
            'font-family':fontFam, 
            'text-align':fontAlign, 
            'min-width': + minw+ 'px', 
            'min-height':+minh+'px', 
            'width': + vw+ 'px', 
            'height':+vh+'px', 
            'left':+ left +'px', 
            'top':+ top +'px', 
            'z-index':+item.num 
            }">-->
          <vue-drag-resize 
              :w="200" 
              :h="30" 
              :resizing="resize" 
              :dragging="resize" 
              :isActive = 'true'
              >
              <p ref="dfont">{{item.name}}</p>
          </vue-drag-resize>
      </div>
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
      vw: 0,
　　　 vh: 0,
　　　 top: 20,
　　　 left:20,
      initPos: 20,
      fontNameArr: [{
        isClick: false,
        num: 1,
        name: '输入文字'
      }],
      //字体库
      fontFam: '',
      //对齐方式
      fontAlign: '',
    }
  },
  created: function () {
    this.vw = 200 + "px";
　　this.vh = 30 + "px";
    // 接收到保存的信息
    this.$hub.$on('fontNum', (num) => {
      let fontObj = {
        isClick: false,  
        num: num,
        name: '输入文字'
      };
      this.fontNameArr.push(fontObj);
    })
  },
  mounted() {
    this.initPos+= this.initPos + 5; 
    this.left = this.left + this.initPos;
    this.top  = this.top  + this.initPos;
    //字体文件
    this.$hub.$on('fontFn', (data) => {
      console.log('data:'+JSON.stringify(data) );
      console.log('fontNameArr:'+JSON.stringify(this.fontNameArr) );
       if(data.font){
            this.fontNameArr[i].style.fontFamily = data.font;
       }
       if(data.align){
            this.fontNameArr[i].style.textAlign = data.align;
       }  
    })
    //console.log('arr:'+JSON.stringify(this.fontNameArr) );
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
</style>
