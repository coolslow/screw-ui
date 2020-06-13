<template>
  <div class="button-samples">
    <div class="item">
      <screw-button @click="handleClick1">按钮一</screw-button>
      <screw-button size="small">按钮二</screw-button>
      <screw-button size="mini">按钮三</screw-button>
      <screw-button type="primary">Primary</screw-button>
      <screw-button type="success">Success</screw-button>
      <screw-button type="danger" size="small">Danger</screw-button>
      <screw-button type="warning" size="mini">Warning</screw-button>
    </div>
    <div class="item">
      <screw-button @click="handleClick1" disabled>按钮一</screw-button>
      <screw-button size="small" disabled>按钮二</screw-button>
      <screw-button size="mini" disabled>按钮三</screw-button>
      <screw-button type="primary" disabled>Primary</screw-button>
      <screw-button type="success" disabled>Success</screw-button>
      <screw-button type="danger" size="small" disabled>Danger</screw-button>
      <screw-button type="warning" size="mini" disabled>Warning</screw-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick1() {
      console.log('testing ...')
    }
  }
}
</script>
<style lang="scss" scoped>
.button-samples {
  display: flex;
  flex-direction: column;
  .item {
    margin: 5px 10px;
  }
}
</style>
