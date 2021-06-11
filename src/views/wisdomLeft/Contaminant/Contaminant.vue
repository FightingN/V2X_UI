<template>
  <div class="contaminant">
    <div class="title title-style">污染物排放</div>
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
import { debounce } from 'utils/common'

export default {
  name: 'Contaminant',
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
    chartManageBarMethod2 (myChart) {
      this.myChartBar2 = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar2.setOption(chartOptionPie2())
    },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
      if (this.myChartBar2) {
        this.myChartBar2.resize()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contaminant {
  box-sizing: border-box;
  width: 100%;
  height: calc(30% - 0.25rem);
  background-color: #0c1427;
  border: solid 1px #4d5c9d;
  padding: 0.0625rem;
  color: #fff;
  margin-top: 0.125rem;
  .echarts {
    width: 100%;
    height: 90%;
    display: flex;
    .div {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
