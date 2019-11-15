<template>
  <div> 
    <div v-for="(item,index) in picArr" :key="index">
        <div class="item">
            <img v-lazy="'/static/image/item/'+item.pic" />
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
  name: 'dItem',
  data () {
    return {
      picArr:[
        {
          pic: 'item1.jpg'
        },
        {
          pic: 'item2.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
