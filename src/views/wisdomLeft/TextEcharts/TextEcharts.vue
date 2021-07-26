<template>
  <div class="text-echarts border">
    <div class="title title-style">G92高速交通流量</div>
    <div class="content">
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
import { chartOptionPie } from './option.js'
import { debounce } from 'utils/common'
import { getCoreData } from 'api/leftApi.js'
export default {
  name: 'TextEcharts',
  data () {
    return {
      interval: null,
      roadName: '路网',
      echartsData: []
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
    this.getCoreData()
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getCoreData()
    }, 1000 * 60)
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie(this.echartsData))
    },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
    },
    async getCoreData () {
      const res = await getCoreData(this.roadName)
      this.echartsData = [
        { value: res.data.numsYellCar, name: '黄牌流量' },
        { value: res.data.numsBlueCar, name: '蓝牌流量' },
        { value: res.data.numsYellCar + res.data.numsBlueCar, name: '总计' }
      ]
      this.myChartBar.setOption(chartOptionPie(this.echartsData))
    }
  }
}
</script>
<style lang="scss" scoped>
.text-echarts {
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem 0.0625rem 0;
  .content {
    display: flex;
    width: 100%;
    height: calc(100% - 0.375rem);
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
