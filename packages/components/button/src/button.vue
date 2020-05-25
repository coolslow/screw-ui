<template>
  <button class="screw-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ScrewButton',
  props: {
    type: {},
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
@import './button.less';
</style>
