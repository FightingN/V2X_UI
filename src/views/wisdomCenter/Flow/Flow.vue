<template>
  <div class="flow">
    <div class="select-box">
      <screen-dropdown-menu
        :menuList="menuList"
        @onChooseItem="onChooseItem"
      ></screen-dropdown-menu>
    </div>
    <div class="echarts">
      <div class="div">
        <div class="title">{{ roadName }} 实际值</div>
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
      <div class="div">
        <div class="title">{{ roadName }} 预测值</div>
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
import { getRoads } from 'api/wisdomRight.js'

export default {
  name: 'Flow',
  data () {
    return {
      interval: null,
      flowData: {
        predict: [
          {
            nums: 100,
            rec_time: '08:00'
          },
          {
            nums: 170,
            rec_time: '09:00'
          },
          {
            nums: 120,
            rec_time: '10:00'
          },
          {
            nums: 270,
            rec_time: '11:00'
          }
        ],
        real: [
          {
            nums: 100,
            rec_time: '08:00'
          },
          {
            nums: 170,
            rec_time: '09:00'
          },
          {
            nums: 120,
            rec_time: '10:00'
          },
          {
            nums: 270,
            rec_time: '11:00'
          }
        ]
      },
      menuList: [],
      roadName: '',
      leftXData: [],
      leftYData: [],
      rightXData: [],
      rightYData: []
    }
  },
  mounted () {
    this.getRoads()
    window.addEventListener('resize', debounce(this.resizeEcharts))
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getCenterData()
    }, 1000 * 60 * 10)
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
    },
    chartManageBarMethod2 (myChart) {
      this.myChartBar2 = myChart
      this.$refs.chartManageBar.clear()
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
      console.log('预测流量----10分钟更新一次')
      const res = await getCenterData(this.roadName)
      if (
        this.leftXData.length > 0 ||
        this.rightXData.length > 0 ||
        this.leftYData.length > 0 ||
        this.rightYData.length > 0
      ) {
        this.leftXData = []
        this.leftYData = []
        this.rightXData = []
        this.rightYData = []
      }
      // res.data = this.flowData
      const leftXData = []
      const leftYData = []
      const rightXData = []
      const rightYData = []
      res.data.predict.forEach(item => {
        leftXData.push(item.rec_time + ':00')
        leftYData.push(item.nums)
      })
      res.data.real.forEach(item => {
        rightXData.push(item.rec_time + ':00')
        rightYData.push(item.nums)
      })
      this.leftXData = leftXData
      this.leftYData = leftYData
      this.rightXData = rightXData
      this.rightYData = rightYData
      // 接口请求完再调用echats
      this.myChartBar.setOption(chartOptionPie(this.leftXData, this.leftYData))
      this.myChartBar2.setOption(
        chartOptionPie2(this.rightXData, this.rightYData)
      )
    },
    onChooseItem (value) {
      this.roadName = value.label
      this.getCenterData()
    },
    async getRoads () {
      try {
        const res = await getRoads()
        res.data.forEach((item, index) => {
          if (index == 0) {
            this.menuList.push({
              label: item,
              select: true,
              value: index
            })
          } else {
            this.menuList.push({
              label: item,
              select: false,
              value: index
            })
          }
        })
        this.roadName = this.menuList[0].label
        console.log('路网', this.roadName)
        this.getCenterData()
      } catch (error) {}
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
    height: 80%;
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
  .select-box {
    padding-left: 30%;
    height: 20%;
    width: 40%;
  }
}
/deep/ .screen-dropdown-menu-list {
  height: 160px !important;
}
</style>
