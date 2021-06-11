<template>
  <div class="flow-top">
    <div class="title title-style">实时路段交通流量Top</div>
    <div class="content">
      <div class="echarts">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
    </div>
    <!-- <div class="echarts-title1">
      G92_红垦枢纽_机场互通_宁波方向 &nbsp;&nbsp;&nbsp;&nbsp;合计3400
    </div>
    <div class="echarts-title2">
      G92_红垦枢纽_机场互通_杭州方向 &nbsp;&nbsp;&nbsp;&nbsp;合计2972
    </div>
    <div class="echarts-title3">
      G92_红垦枢纽_机场互通_宁波方向 &nbsp;&nbsp;&nbsp;&nbsp;合计2431
    </div> -->
  </div>
</template>

<script>
import { chartOptionPie } from './option.js'
import { debounce } from 'utils/common'

export default {
  name: 'FlowTop',
  data () {
    return {}
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
.flow-top {
  box-sizing: border-box;
  width: 100%;
  height: 22%;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem;
  position: relative;
  color: #fff;
  margin-top: 0.25rem;
  .content {
    display: flex;
    width: 100%;
    height: 85%;
    margin-top: 0.125rem;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
  .echarts-title1 {
    position: absolute;
    left: 5%;
    top: 12%;
    font-size: 16px;
  }
  .echarts-title2 {
    position: absolute;
    left: 5%;
    top: 35%;
    font-size: 16px;
  }
  .echarts-title3 {
    position: absolute;
    left: 5%;
    top: 56%;
    font-size: 16px;
  }
}
</style>
