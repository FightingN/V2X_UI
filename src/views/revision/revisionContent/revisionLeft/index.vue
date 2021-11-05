<template>
  <div class="revision-left">
    <traffic-flow></traffic-flow>
    <service-level></service-level>
    <level-appraise></level-appraise>
    <pollutant-emission></pollutant-emission>
  </div>
</template>

<script>
import TrafficFlow from './trafficFlow'
import serviceLevel from './serviceLevel'
import levelAppraise from './levelAppraise'
import pollutantEmission from './pollutantEmission'
export default {
  name: 'revision-left',
  components: {
    TrafficFlow,
    serviceLevel,
    levelAppraise,
    pollutantEmission
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.revision-left {
  box-sizing: border-box;
  width: calc(26.2%);
  height: 100%;
  background: url('../../../../assets/revision/left-bac.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
