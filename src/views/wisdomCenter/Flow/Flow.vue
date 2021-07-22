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
import { debounce } from 'utils/common'

export default {
  name: 'Flow',
  data () {
    return {
      interval: null
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))

    if (this.interval) {
      clearInterval(this.interval)
    }
    // this.interval = setInterval(() => {
    //   this.resizeEcharts()
    //   this.myChartBar.setOption(chartOptionPie())
    //   this.myChartBar2.setOption(chartOptionPie2())
    // }, 1000 * 60 * 10)
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
.flow {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem;
  position: absolute;
  bottom: 0%;
  .echarts {
    width: 100%;
    height: 100%;
    display: flex;
    .div {
      width: 50%;
      height: 100%;
      .title {
        color: #fff;
        font-size: 0.175rem;
        text-align: center;
      }
    }
  }
}
</style>
