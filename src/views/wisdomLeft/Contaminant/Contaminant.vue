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
import { getCoreData } from 'api/leftApi.js'

export default {
  name: 'Contaminant',
  data () {
    return {
      roadName: '路网',
      interval: null,
      // 可摄入数据
      data1: 0,
      // 氮氧化物排放物
      data2: 0
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.getCoreData()
    this.interval = setInterval(() => {
      this.getCoreData()
    }, 1000 * 60)
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie(this.data1))
    },
    chartManageBarMethod2 (myChart) {
      this.myChartBar2 = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar2.setOption(chartOptionPie2(this.data2))
    },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
      if (this.myChartBar2) {
        this.myChartBar2.resize()
      }
    },
    async getCoreData () {
      const res = await getCoreData(this.roadName)
      this.data1 = res.data.inhalableEmissions
      this.data2 = res.data.noxEmissions
      this.myChartBar.setOption(chartOptionPie(this.data1))
      this.myChartBar2.setOption(chartOptionPie2(this.data2))
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
