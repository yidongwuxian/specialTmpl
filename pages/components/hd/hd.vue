<template>
  <div> 
    <div class="headWrap" :style="{'width':swidth, 'height':sheight, 'background-color':backgroundStyle}">
      <hd-item :navArr="navArr" :imgSrc="imgSrc" :tel="tel"></hd-item>
    </div>
  </div>
</template>
<script>
import hdItem from '../hdItem/hdItem.vue';
export default {
  components: {
    hdItem
  },
  props: {
    swidth: {
      type: String,
      default: ''
    },
    sheight: {
      type: String,
      default: ''
    },
    backgroundStyle:{
      type: String,
      default: ''
    }
  },
  name: 'hd',
  data () {
    return {
      navArr:[
        {
          'href':'/',
          'name':'首页'
        },
        {
          'href':'/case',
          'name':'家装案例'
        },
        {
          'href':'/building',
          'name':'热装楼盘'
        },
        {
          'href':'/designer',
          'name':'设计团队'
        },
        {
          'href':'/special/20190307/108859',
          'name':'获取报价'
        },
        {
          'href':'/construction',
          'name':'在施工地'
        }
      ],
      imgSrc: "http://img.dyrs.cc/special/255/100/107255/phone.png!c",
      tel: "400-102-9699"
    }
  }
}
</script>
<style lang="scss" scoped>
.headWrap {
    margin: 0 auto;
    position: fixed;
    z-index: 99999;
}
</style>
