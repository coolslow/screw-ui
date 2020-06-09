<template>
  <div class="button-samples">
    <screw-button @click="handleClick1">按钮一</screw-button>
    <screw-button size="small">按钮二</screw-button>
    <screw-button size="mini">按钮三</screw-button>
    <screw-button type="primary">Primary</screw-button>
    <screw-button type="success">Success</screw-button>
    <screw-button type="danger" size="small">Danger</screw-button>
    <screw-button type="warning" size="mini">Warning</screw-button>
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
