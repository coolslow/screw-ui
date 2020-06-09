<template>
  <button
    class="sw-button"
    @click="handleClick"
    :class="[
      type ? 'sw-button--' + type : '',
      btnSize ? 'sw-button--' + btnSize : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ScrewButton',
  props: {
    type: {
      type: String,
      default: ''
    },
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
  },
  computed: {
    btnSize() {
      return this.size
    },
    btnDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
