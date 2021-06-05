<template>
  <div class="contaminant">
    <div class="title title-style">拥堵路段指标展示</div>
    <div class="echarts">
      <div class="div">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
      <div class="div">
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
  name: 'Contaminant',
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
.contaminant {
  box-sizing: border-box;
  width: 800px;
  height: 410px;
  background-color: #0c1427;
  border: solid 3px #4d5c9d;
  padding: 5px 14px 0;
  color: #fff;
  margin-top: 20px;
  .echarts {
    width: 100%;
    height: 350px;
    display: flex;
    .div {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
