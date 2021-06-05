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
    <div class="echarts-title1">
      G92_红垦枢纽_机场互通_宁波方向 &nbsp;&nbsp;&nbsp;&nbsp;合计3400
    </div>
    <div class="echarts-title2">
      G92_红垦枢纽_机场互通_杭州方向 &nbsp;&nbsp;&nbsp;&nbsp;合计2972
    </div>
    <div class="echarts-title3">
      G92_红垦枢纽_机场互通_宁波方向 &nbsp;&nbsp;&nbsp;&nbsp;合计2431
    </div>
  </div>
</template>

<script>
import { chartOptionPie } from './option.js'

export default {
  name: 'FlowTop',
  data () {
    return {}
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie())
    }
  }
}
</script>
<style lang="scss" scoped>
.flow-top {
  box-sizing: border-box;
  width: 800px;
  height: 432px;
  background-color: #0c1427;
  border: solid 3px #4c5c9a;
  padding: 5px 14px 0;
  position: relative;
  color: #fff;
  .content {
    display: flex;
    width: 100%;
    height: 230px;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
  .echarts-title1 {
    position: absolute;
    left: 5%;
    top: 30%;
    font-size: 24px;
  }
  .echarts-title2 {
    position: absolute;
    left: 5%;
    top: 45%;
    font-size: 24px;
  }
  .echarts-title3 {
    position: absolute;
    left: 5%;
    top: 60%;
    font-size: 24px;
  }
}
</style>
