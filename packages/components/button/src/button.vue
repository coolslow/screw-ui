<template>
  <button class="sw-button">
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
