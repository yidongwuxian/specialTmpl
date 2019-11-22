<template>
  <div id="app">
    <fun-hd></fun-hd>
    <div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import funHd from '@/components/funhd/funhd.vue';
export default {
  components: {
    funHd
  },
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: "思源黑体 CN Regular";
  background-color: #fff;
}
</style>
