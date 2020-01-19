/**
* Created by OXOYO on 2018/4/18.
*
* 嵌套提示弹窗
*/

<style scoped lang="less" rel="stylesheet/less">
  .xpe_nest-notice-modal {

  }
</style>

<template>
  <XUIDialog
    class="xpe_nest-notice-modal"
    :visible.sync="isShow"
    title="提示"
  >
    <div class="content">该节点不支持嵌套！</div>
    <div slot="footer">
      <XUIButton type="text" size="large" @click="handleCancel">关闭</XUIButton>
    </div>
  </XUIDialog>
</template>

<script>
import utils from '@/global/utils'

export default {
  name: 'NestNoticeModal',
  data () {
    return {
      // 是否显示弹窗
      isShow: false
    }
  },
  methods: {
    handleCancel: function () {
      let _t = this
      // 关闭弹窗
      _t.isShow = false
    }
  },
  created: function () {
    let _t = this
    // 监听事件
    utils.bus.$on('XPE/canvas/nest/notice', function () {
      _t.isShow = true
    })
  }
}
</script>
