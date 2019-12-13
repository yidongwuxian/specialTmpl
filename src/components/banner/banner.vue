<template>
  <div> 
    <div class="banner pr">
        <img class="mtNegative" v-for="(item,index) in picArr" :key="index" v-lazy="'/static/image/banner/'+item.pic" />
    </div>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  props: {
   
  },
  name: 'dBanner',
  data () {
    return {
      picArr:[
        {
          pic: 'banner.jpg'
        },
        {
          pic: 'banner_item1.jpg'
        }
      ]
    } 
  }
}
</script>
<style lang="scss" scoped>
</style>
