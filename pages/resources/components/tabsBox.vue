<style scoped lang="scss">

</style>

<template>
  <div>
    <!--<XUITabs :tab-position="tabPosition" style="height: 200px;">
        <XUITabPane label="用户管理">用户管理</XUITabPane>
        <XUITabPane label="配置管理">配置管理</XUITabPane>
        <XUITabPane label="角色管理">角色管理</XUITabPane>
        <XUITabPane label="定时任务补偿">定时任务补偿</XUITabPane>
    </XUITabs>-->
    <tabs :tab-position="tabPosition" style="height: 200px;">
      <tab-pane label="用户管理">用户管理</tab-pane>
      <tab-pane label="配置管理">配置管理</tab-pane>
      <tab-pane label="角色管理">角色管理</tab-pane>
      <tab-pane label="定时任务补偿">定时任务补偿</tab-pane>
    </tabs>
  </div>
</template>

<script>
  export default {
    name: 'BaseTabs',
    props: {
      tabPosition: {
        type: String,
        default: 'left'
      }
    }
  }
</script>

