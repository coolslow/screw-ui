<template>
  <div class="avatar-samples">
    <div v-for="size in sizeList" :key="size" class="avatars">
      <screw-avatar :size="size" :src="src"></screw-avatar>
    </div>
    <div v-for="shape in shapes" :key="shape" class="avatars">
      <screw-avatar size="large" :shape="shape" :src="src"></screw-avatar>
    </div>
    <screw-avatar :size="100" shape="circle" :src="src"></screw-avatar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shapes: ['circle', 'square'],
      sizeList: ['large', 'medium', 'small'],
      src: 'https://avatars0.githubusercontent.com/u/10891613'
    }
  }
}
</script>
<style lang="less" scoped>
.avatar-samples {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
</style>
