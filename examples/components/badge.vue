<template>
  <div class="badge-samples">
    <div class="item">
      <screw-badge :is-dot="true">
        <screw-button type="primary" @click="handleTestClick"
          >测试</screw-button
        >
      </screw-badge>
    </div>
    <div class="item">
      <screw-badge value="98" :max="20">
        <screw-button type="success">测试</screw-button>
      </screw-badge>
    </div>
    <div class="item">
      <screw-badge :max="20" :value="value1">
        <screw-button>测试</screw-button>
      </screw-badge>
    </div>
    <div class="item">
      <screw-badge :value="value2">
        <screw-button type="warning">测试</screw-button>
      </screw-badge>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 100,
      value2: 'hot'
    }
  },
  methods: {
    handleTestClick() {
      console.log('testing ')
    }
  }
}
</script>

<style lang="scss" scoped>
.badge-samples {
  display: flex;
  flex-direction: row;
  .item {
    padding: 10px 20px;
  }
}
</style>
