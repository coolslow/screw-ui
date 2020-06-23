<template>
  <div class="sw-steps" :class="['sw-steps--' + direction]">
    <div class="sw-steps__item" v-for="(step, idx) in steps" :key="idx">
      <!-- step 节点 -->
      <div class="sw-steps__item" :class="`is-${step.status}`">
        <!-- icon 设置 -->
        <div v-if="step.icon">
          <!-- TODO Icon组件 -->
        </div>
        <div v-else>{{ idx + 1 }}</div>
        <div class="sw-steps__line" :class="[isLast ? '' : '']"></div>
      </div>
      <!-- step 描述信息 -->
      <div class="sw-steps__content" :class="[]">
        <div v-if="step.title" class="sw-step__title">
          <slot name="title">{{ step.title }}</slot>
        </div>
        <div v-if="step.desc" class="sw-steps__desc">
          <slot name="desc">{{ step.desc }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrewSteps',
  props: {
    // step方向，默认水平
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    },
    // 每一步所包含的信息，步骤是一个数组，包含了step对象
    // steps: [{
    //    title: '',
    //    description: '',
    //    status: ''
    // }]
    steps: {
      type: Array
    }
  },
  computed: {
    stepCounts() {
      return this.steps.length
    },
    // 是否为最后一个节点
    isLast() {
      return this.steps.length - 1
    }
  }
}
</script>
