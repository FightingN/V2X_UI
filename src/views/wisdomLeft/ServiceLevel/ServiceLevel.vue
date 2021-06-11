<template>
  <div class="service-level">
    <div class="title">
      <span>服务水平 B级</span>
      <span class="right">拥堵路段占比：10%</span>
    </div>
    <div class="content">
      <wisdom-echarts-frame
        @myChartMethod="chartManageBarMethod"
        ref="chartManageBar"
      ></wisdom-echarts-frame>
    </div>
  </div>
</template>

<script>
import { debounce } from 'utils/common'
import { chartOptionPie } from './option.js'

export default {
  name: 'ServiceLevel',
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
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.service-level {
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  color: #fff;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem 0.0625rem 0;
  margin-top: 0.125rem;
  .title {
    margin-bottom: 0.125rem;
    span {
      font-family: AdobeHeitiStd-Regular;
      font-size: 0.25rem;
      font-weight: normal;
    }
    .right {
      margin-left: 1rem;
    }
  }
  .content {
    width: 100%;
    height: 70%;
  }
}
</style>
