<template>
  <div class="wisdom-left">
    <div class="left-box">
      <text-echarts></text-echarts>
      <service-level></service-level>
      <V-Data></V-Data>
      <Contaminant />
    </div>
  </div>
</template>
<script>
import TextEcharts from './TextEcharts/TextEcharts'
import ServiceLevel from './ServiceLevel/ServiceLevel'
import VData from './VData/VData'
import Contaminant from './Contaminant/Contaminant'
export default {
  components: {
    TextEcharts,
    ServiceLevel,
    VData,
    Contaminant
  },
  data () {
    return {
      name: 'wisdomLeft'
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-left {
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  z-index: 10;
  .left-box {
    margin-top: 100px;
  }
}
</style>
