<template>
  <div class="flow">
    <div class="echarts">
      <div class="div">
        <div class="title">
          G92_红垦枢纽-机场互通_杭州方向未来10分钟交通流量：6000辆
        </div>
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
      <div class="div">
        <div class="title">
          G92_瓜沥互通-柯桥互通_杭州方向未来10分钟交通流量：7000辆
        </div>
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod2"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
    </div>
  </div>
</template>

<script>
import { chartOptionPie, chartOptionPie2 } from './option.js'

export default {
  name: 'Flow',
  data () {
    return {}
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie())
    },
    chartManageBarMethod2 (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie2())
    }
  }
}
</script>
<style lang="scss" scoped>
.flow {
  box-sizing: border-box;
  width: 1783px;
  height: 349px;
  background-color: #0c1427;
  border: solid 3px #4c5c9a;
  padding: 5px 14px 0;
  position: absolute;
  bottom: 10px;
  .echarts {
    width: 100%;
    height: 350px;
    display: flex;
    .div {
      width: 50%;
      height: 100%;
      .title {
        color: #fff;
        font-size: 24px;
        text-align: center;
      }
    }
  }
}
</style>
