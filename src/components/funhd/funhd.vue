<template>
  <div> 
    <ul class="headWrap">
      <li v-for="(item,index) in funArr" :key="index">
        <a href="javascript:;" @click="clickMenu(item.id)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  props: {
    
  },
  name: 'funhd',
  data () {
    return {
      fontNum: 1,
      posLeftNum: 10,
      funArr:[
        {
          'id': '1',
          'name':'文字'
        },
        {
          'id': '2',
          'name':'图片'
        },
        {
          'id': '3',
          'name':'按钮'
        },
        {
          'id': '4',
          'name':'输入框'
        },
        {
          'id': '5',
          'name':'弹窗'
        }
      ]
    }
  },
  methods: {
    clickMenu(id){
      switch(id){
        case '1':
          let numObj = {
            num: this.fontNum++,
            posLeft: this.posLeftNum + 10
          };
          this.$hub.$emit('funSel', id);
          this.$hub.$emit('fontNum', numObj);
          break;
        case '2':
          this.$hub.$emit('funSel', id);
        break;
        case '3':
          this.$hub.$emit('funSel', id);
        break;
        case '4':
          this.$hub.$emit('funSel', id);
        break;
        case '5':
          this.$hub.$emit('funSel', id);
        break;
        default:
          
          break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/reset.scss';
@import '../../styles/page.scss';
.headWrap {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #083540;
    >li{
      float:left;
      width:100px;
      height:40px;
      >a{
        display:inline-block;
        width:80px;
        height: 30px;
        line-height: 30px;
        background-color: #091f24;
        color:#fff;
      }
    }
}
</style>
