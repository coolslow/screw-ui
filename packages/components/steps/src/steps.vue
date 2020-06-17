<template>
  <div class="sw-steps" :class="[]">
    <div class="sw-step" :class="[]">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrewSteps',
  props: {
    // step之间的间距
    distance: {
      type: Number
    },
    // step方向，默认水平
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    },
    // 每一步所包含的信息，步骤是一个数组，包含了step对象
    steps: {
      type: Array
    }
  }
}
</script>
