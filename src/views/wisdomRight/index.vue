<template>
  <div class="wisdom-right">
    <flow-top></flow-top>
    <V-Data></V-Data>
    <control></control>
    <!-- <Contaminant /> -->
    <state></state>
  </div>
</template>
<script>
import FlowTop from '@/views/wisdomRight/FlowTop/FlowTop'
import VData from './VData/VData'
import Control from './Control/Control'
import Contaminant from './Contaminant/Contaminant'
import State from './State/State'

export default {
  components: {
    FlowTop,
    VData,
    Control,
    Contaminant,
    State
  },
  data () {
    return {
      name: 'wisdom-right'
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-right {
  box-sizing: border-box;
  width: 40%;
  height: 100%;
  z-index: 10;
}
</style>
