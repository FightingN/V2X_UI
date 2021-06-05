<template>
  <!-- <div class="wisdom-box"> -->
  <scale-box>
    <wisdom-header></wisdom-header>
    <wisdom-content></wisdom-content>
  </scale-box>
  <!-- </div> -->
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
  // width: 100%;
  // height: 100vh;
  // border: 1px solid red;
  // position: relative;
}
</style>
