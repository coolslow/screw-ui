<template>
  <div class="sw-badge">
    <slot></slot>
    <transition name="">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="sw-badge__content"
        :class="[type, { 'is-dot': isDot, 'is-fixed': $slots.default }]"
      ></sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ScrewBadge',

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        if (
          val !== undefined &&
          ['primary', 'success', 'warning', 'info', 'danger'].includes(val)
        ) {
          return 'sw-badge__content' + val
        } else {
          return ''
        }
      }
    }
  },

  computed: {
    content() {
      if (this.isDot) {
        return
      }

      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    }
  }
}
</script>
