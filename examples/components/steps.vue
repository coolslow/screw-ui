<template>
  <div class="steps-samples">
    <screw-steps :steps="steps" direction="horizontal"></screw-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          title: '第一步',
          desc: '测试一下',
          status: 'process'
        },
        {
          title: '第二步',
          desc: '测试下培根',
          status: 'pending'
        },
        {
          title: '第三步',
          desc: '测试下这是为啥',
          status: 'pending'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.steps-samples {
  display: flex;
  width: 100%;
}
</style>
