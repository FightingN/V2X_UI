<template>
  <div class="revision-left">
    <traffic-flow></traffic-flow>
  </div>
</template>

<script>
import TrafficFlow from './trafficFlow'
export default {
  name: 'revision-left',
  components: {
    TrafficFlow
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
