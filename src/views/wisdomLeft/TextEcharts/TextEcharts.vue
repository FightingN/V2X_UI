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
export default {
  name: 'TextEcharts',
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
