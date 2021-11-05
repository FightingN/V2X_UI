<template>
  <div class="traffic-flow">
    <revision-title>G92高速在途量</revision-title>
    <div class="traffic-flow-content">
      <div class="left">
        <div class="left-title">
          总计<br />
          <span>40</span>
        </div>
        <div class="left-content">
          <div class="item">
            <span>蓝牌流量</span>
            <span>30</span>
            <span>75%</span>
            <div class="border"></div>
          </div>
          <div class="item">
            <span>黄牌流量</span>
            <span>10</span>
            <span>25%</span>
            <div class="border item-orange"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <wisdom-echarts-frame
          @myChartMethod="initChart"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
    </div>
  </div>
</template>

<script>
import { pieOptions } from '../options'
import { debounce } from 'utils/common'
export default {
  name: 'traffic-flow',
  data () {
    return {
      chartData: [
        {
          name: '黄牌流量',
          value: 17513
        },
        {
          name: '蓝牌流量',
          value: 6510
        }
      ],
      trafficChart: ''
    }
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
  },
  methods: {
    initChart (chart) {
      this.trafficChart = chart
      chart.clear()
      this.trafficChart.setOption(pieOptions({ data: this.chartData }))
    },
    resizeEcharts () {
      if (this.trafficChart) {
        this.trafficChart.resize()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.traffic-flow {
  box-sizing: border-box;
  width: 100%;
  height: 27.8%;
  font-family: 'PingFang SC';
  &-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    .left {
      box-sizing: border-box;
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px 0 0 47px;
      &-title {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.76);
        span {
          font-size: 32px;
          font-weight: bold;
          color: #ffffff;
        }
      }
      &-content {
        box-sizing: border-box;
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        .item {
          box-sizing: border-box;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
          span:nth-child(1) {
            font-size: 14px;
            font-weight: 400;
            color: #eff0f1;
            z-index: 1;
          }
          span:nth-child(2) {
            font-size: 20px;
            font-weight: 500;
            color: #eff0f1;
            z-index: 1;
          }
          span:nth-child(3) {
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
          }
        }
        .border {
          position: absolute;
          left: 0;
          top: 18px;
          width: 100px;
          height: 12px;
          background: url('../../../../../assets/revision/blue.png') no-repeat
            center;
          background-size: 100% 100%;
        }
        .item-orange {
          position: absolute;
          left: 0;
          top: 18px;
          background: url('../../../../../assets/revision/orange.png') no-repeat
            center;
        }
      }
    }
    .right {
      box-sizing: border-box;
      width: 60%;
      height: 100%;
    }
  }
}
</style>
