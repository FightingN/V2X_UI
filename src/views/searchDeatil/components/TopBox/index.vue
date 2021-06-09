<template>
  <div class="top-box">
    <div class="echarts-item">
      <div class="title">氮氧化物排放量230g</div>
      <div class="echarts">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
    </div>
    <div class="echarts-item">
      <div class="title">一氧化碳排放量120g</div>
      <div class="echarts">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod2"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
    </div>
    <div class="echarts-item">
      <div class="title">可吸入物颗粒排放量160g</div>
      <div class="echarts">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
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
  name: 'TopBox',
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
.top-box {
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  display: flex;
  margin-bottom: 0.125rem;
  .echarts-item {
    box-sizing: border-box;
    width: 25%;
    height: 100%;
    margin-right: 0.25rem;
    background: #fff;
    box-shadow: 0 0 10px 5px #eee;
    padding: 0.125rem;
    .title {
      font-size: 0.225rem;
      font-weight: bold;
      color: #73879c;
    }
    .echarts {
      width: 100%;
      height: 80%;
    }
  }
}
</style>
