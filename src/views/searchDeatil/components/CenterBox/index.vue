<template>
  <div class="center-box">
    <div class="title">历史车流量展示</div>
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
  name: 'CenterBox',
  props: {
    oxideXdata: {
      value: [],
      default: []
    },
    carNum: {
      value: [],
      default: []
    }
  },
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
      setTimeout(() => {
        this.myChartBar = myChart
        this.$refs.chartManageBar.clear()
        this.myChartBar.setOption(chartOptionPie(this.oxideXdata, this.carNum))
      }, 1000)
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
.center-box {
  box-sizing: border-box;
  width: 100%;
  height: calc(51% - 0.25rem);
  background: #fff;
  box-shadow: 0 0 10px 5px #eee;
  .title {
    box-sizing: border-box;
    width: 100%;
    height: 0.8125rem;
    line-height: 0.8125rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: #73879c;
    padding-left: 0.25rem;
    border: 1px solid #eee;
  }
  .echarts {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 0.8125rem);
  }
}
</style>
