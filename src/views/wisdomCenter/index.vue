<template>
  <div class="wisdom-center">
    <flow></flow>
  </div>
</template>
<script>
import Flow from './Flow/Flow'

export default {
  components: {
    Flow
  },
  data () {
    return {
      name: 'wisdomCenter'
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-center {
  box-sizing: border-box;
  width: 50%;
  height: 28%;
  z-index: 10;
  margin-left: 0.125rem;
  position: relative;
  top: 72%;
}
</style>
