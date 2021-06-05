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
      <div class="lengend">
        <div class="top-item">
          <span class="lengend-border"></span>
          <span class="text" style="margin-right:29px">黄牌流量</span>
          <span class="text">13800</span>
        </div>
        <div class="top-item bottom-item">
          <span class="lengend-border"></span>
          <span class="text" style="margin-right:29px">绿牌流量</span>
          <span class="text">44725</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chartOptionPie } from './option.js'
export default {
  name: 'TextEcharts',
  data () {
    return {}
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      this.myChartBar.setOption(chartOptionPie())
    }
  }
}
</script>
<style lang="scss" scoped>
.text-echarts {
  box-sizing: border-box;
  width: 856px;
  height: 352px;
  background-color: #0c1427;
  border: solid 3px #4c5c9a;
  padding: 5px 14px 0;
  .content {
    display: flex;
    width: 100%;
    height: 230px;
    .echarts {
      width: 60%;
      height: 100%;
    }
    .lengend {
      color: #fff;
      width: 40%;
      height: 100%;
      .top-item {
        display: flex;
        margin-bottom: 40px;
        .lengend-border {
          display: inline-block;
          width: 35px;
          height: 35px;
          background: #b5954a;
          margin-right: 29px;
          border-radius: 5px;
        }
        .text {
          font-family: AdobeHeitiStd-Regular;
          font-size: 33px;
          font-weight: normal;
          color: #ffffff;
        }
      }
      .bottom-item {
        .lengend-border {
          background-color: #2b62bf;
        }
      }
    }
  }
}
</style>
