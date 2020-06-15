<template>
  <div class="badge-samples">
    <screw-badge :value="value">
      <screw-button type="primary">测试</screw-button>
    </screw-badge>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 98
    }
  }
}
</script>
