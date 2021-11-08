<template>
  <div class="revision-center-bottom">
    <div class="top">
      <revision-title></revision-title>
      <div style="width:350px">
        <screen-dropdown-menu
          :menuList="menuList"
          @onChooseItem="onChooseItem"
        ></screen-dropdown-menu>
      </div>
    </div>
    <div class="revision-center-bottom-chart">
      <wisdom-echarts-frame
        @myChartMethod="initChart"
        ref="chartManageBar"
      ></wisdom-echarts-frame>
    </div>
  </div>
</template>

<script>
import { getAvaChartOption } from './options'
import { getRoads } from 'api/wisdomRight.js'
export default {
  name: 'revision-center',
  data () {
    return {
      avaChart: '',
      xData: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
      yData: [22, 33, 300, 100, 89, 33],
      yData2: [2, 23, 200, 300, 69, 3],
      menuList: []
    }
  },
  mounted () {
    this.getRoads()
  },
  methods: {
    initChart (chart) {
      chart.clear()
      this.avaChart = chart
      this.avaChart.setOption(
        getAvaChartOption(this.xData, this.yData, this.yData2)
      )
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
    },
    onChooseItem () {
      console.log('onChooseItem')
    }
  }
}
</script>
<style lang="scss" scoped>
.revision-center-bottom {
  box-sizing: border-box;
  width: 100%;
  height: 26%;
  background: url('../../../../assets/revision/bac-bottom.png') no-repeat center;
  background-size: 100% 100%;
  .top {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 0;
  }
  &-chart {
    width: 100%;
    height: calc(100% - 50px);
  }
  /deep/ .screen-dropdown-menu-list {
    height: 160px !important;
  }
}
</style>
