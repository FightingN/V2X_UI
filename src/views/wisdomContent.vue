<template>
  <div class="wisdom-content">
    <wisdom-left></wisdom-left>
    <wisdom-center></wisdom-center>
    <wisdom-right></wisdom-right>
    <wisdom-map></wisdom-map>
  </div>
</template>
<script>
import wisdomLeft from './wisdomLeft'
import wisdomRight from './wisdomRight'
import wisdomCenter from './wisdomCenter'
import wisdomMap from './wisdomMap'
export default {
  data () {
    return {
      name: 'wisdomContent'
    }
  },
  components: {
    wisdomLeft,
    wisdomRight,
    wisdomCenter,
    wisdomMap
  }
}
</script>
<style lang="scss" scoped>
.wisdom-content {
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 66px);
  position: relative;
  display: flex;
  padding: 20px;
}
</style>
