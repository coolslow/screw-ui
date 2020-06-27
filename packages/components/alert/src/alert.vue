<template>
  <transition name="sw-alert-fade">
    <div class="sw-alert"></div>
  </transition>
</template>

<script>
export default {
  name: 'ScrewAlert',
  props: {
    // Alert标题
    title: {
      type: String,
      default: ''
    }
  },
  method: {

  }
}
</script>
