<template>
  <div> 
    <div v-for="(item,index) in picArr" :key="index">
        <div :class="item.name">
            <img v-lazy="'/static/image/item/'+item.pic" />
            <div v-if="item.name == 'item1' ">

            </div>
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
          name: 'item1',
          pic: 'item1.jpg'
        },
        {
          name: 'item2',
          pic: 'item2.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
