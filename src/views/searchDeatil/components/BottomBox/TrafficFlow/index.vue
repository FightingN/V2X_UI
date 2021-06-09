<template>
  <div class="traffic-state">
    <div class="title">交通流量</div>
    <div class="echarts">
      <wisdom-echarts-frame
        @myChartMethod="chartManageBarMethod"
        ref="chartManageBar"
      ></wisdom-echarts-frame>
    </div>
  </div>
</template>

<script>
import { chartOptionPie } from './option.js'
import { debounce } from 'utils/common'

export default {
  name: 'traffic',
  data () {
    return {
      myChartBar: null
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie())
    },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.traffic-state {
  width: 32%;
  height: 100%;
  box-shadow: 0 0 10px 5px #eee;
  padding: 0.125rem;
  background: #fff;
  .title {
    height: 0.75rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: #73879c;
    border-bottom: 1px solid #dce0e6;
  }
  .echarts {
    width: 100%;
    height: calc(100% - 0.75rem);
    // border: 1px solid red;
  }
}
</style>
