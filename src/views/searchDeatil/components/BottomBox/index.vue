<template>
  <div class="bottom-box">
    <traffic-state></traffic-state>
    <traffic-flow></traffic-flow>
    <car-info></car-info>
  </div>
</template>

<script>
import TrafficState from './TrafficState/index'
import TrafficFlow from './TrafficFlow/index'
import CarInfo from './CarInfo/index'
export default {
  name: 'BottomBox',
  components: {
    TrafficState,
    CarInfo,
    TrafficFlow
  },
  data () {
    return {}
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.bottom-box {
  box-sizing: border-box;
  width: 100%;
  height: 34%;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
</style>
