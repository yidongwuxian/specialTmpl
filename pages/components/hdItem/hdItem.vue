<template>
  <div>
     <div class="head">
          <div class="head_c">
              <ul class="nav">
                  <li><a v-for="(item,index) in navArr" :key="index" :href="item.href" target="_blank">{{item.name}}</a></li>
                  <li class="nav_tel">
                    <img v-if="imgSrc" :src="imgSrc">
                        {{tel}} 
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    navArr:{
      type: Array,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    tel: {
      type: String,
      default: ''
    }
  },
  name: 'hdItem',
  data () {
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
    width: 1200px;
    height: 40px;
    margin: 0 auto;
}

.nav {
    height: 40px;
    line-height: 40px;
    width: 1200px;
    margin: auto;
}

.nav li {
    float: left;
    color: #fff;
}

.nav li a {
    display: inline;
    padding: 0 35px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
}

.nav li a:hover {
    color: #fec144;
    text-decoration: none;
}

.nav_tel{
  float: right;
  font-size: 18px;
  img{
    float: left;
    margin-top: 13px; 
    margin-right: 6px;
  }
}
</style>
