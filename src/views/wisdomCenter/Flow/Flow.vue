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
import { getCenterData } from 'api/leftApi.js'

export default {
  name: 'Flow',
  data () {
    return {
      interval: null,
      flowData: [
        {
          recRoadSectionName: '上虞互通_牟山互通_杭州方向',
          trafficFlow: '6000', // 未来车流量的字段
          data: [
            {
              nums: 100,
              recTime: '2021-07-27 16:00:00'
            },
            {
              nums: 100,
              recTime: '2021-07-27 18:00:00'
            }
          ]
        },
        {
          recRoadSectionName: '牟山互通_余姚西枢纽_宁波方向',
          trafficFlow: '6000', // 未来车流量的字段
          data: [
            {
              nums: 100,
              recTime: '2021-07-27 16:00:00'
            },
            {
              nums: 100,
              recTime: '2021-07-27 18:00:00'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
    this.getCenterData()
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
    },
    async getCenterData () {
      const res = await getCenterData()
      console.log('预测流量', res)
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
