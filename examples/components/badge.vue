<template>
  <div class="badge-samples">
    <screw-badge is-dot>
      <screw-button type="primary" @click="handleTestClick">测试</screw-button>
    </screw-badge>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 98
    }
  },
  methods: {
    handleTestClick() {
      console.log('testing ')
    }
  }
}
</script>
