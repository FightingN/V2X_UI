<template>
  <div class="wisdom-box">
    <!-- <scale-box> -->
    <wisdom-header></wisdom-header>
    <wisdom-content></wisdom-content>
    <!-- </scale-box> -->
  </div>
</template>

<script>
import wisdomContent from './wisdomContent'
import wisdomHeader from './wisdomHeader'
export default {
  name: 'wisdom-box',
  data () {
    return {}
  },
  components: {
    wisdomContent,
    wisdomHeader
  }
}
</script>
<style lang="scss" scoped>
.wisdom-box {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>
