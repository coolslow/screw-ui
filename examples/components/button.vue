<template>
  <div>
    <screw-button @click="handleClick1">按钮一</screw-button>
    <screw-button size="small">按钮二</screw-button>
    <screw-button size="mini">按钮三</screw-button>
    <screw-button type="success">按钮一</screw-button>
    <screw-button type="danger" size="small">按钮二</screw-button>
    <screw-button type="warning" size="mini">按钮三</screw-button>
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
