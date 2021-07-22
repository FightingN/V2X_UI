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
import { getTopRate } from 'api/wisdomRight.js'
export default {
  name: 'FlowTop',
  data () {
    return {
      interval: null,
      XData: [],
      data1: [], // 蓝牌
      data2: [], // 黄牌
      data3: []
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
    // }, 1000)
    this.getTopRate()
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(
        chartOptionPie(this.XData, this.data1, this.data2, this.data3)
      )
    },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
    },
    async getTopRate () {
      if (this.XData.length > 0) {
        this.XData = []
      }
      const res = await getTopRate()
      // 得到x轴坐标
      const arr = []
      res.data.forEach(item => {
        arr.push(item.roadSectionName)
      })
      this.XData = arr
      res.data.forEach((item, index) => {
        this.data1.push(item.numsBlueCar)
        this.data2.push(item.numsYellCar)
      })
      this.data1.forEach((item, index) => {
        this.data3.push(item + this.data2[index])
      })
      this.myChartBar.setOption(
        chartOptionPie(this.XData, this.data1, this.data2, this.data3)
      )
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
