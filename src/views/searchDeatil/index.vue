<template>
  <div class="search-deail">
    <div class="title">
      {{ roadname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管控措施:{{
        meausreInfo
      }}
    </div>
    <div class="content">
      <top-box
        :oxideXdata="oxideXdata"
        :oxideList="oxideList"
        :carbonList="carbonList"
        :inhalableEmissions="inhalableEmissions"
      ></top-box>

      <center-box
        :carNum="carNum"
        :oxideXdata="oxideXdata"
        @onChangePicker="onChangePicker"
      ></center-box>
      <bottom-box
        :dataLine="dataLine"
        :flowData="flowData"
        :infoData="infoData"
      ></bottom-box>
    </div>
  </div>
</template>

<script>
import { getEchartsData, getTimeData } from 'api/searchDeatil.js'
import CenterBox from './components/CenterBox'
import TopBox from './components/TopBox'
import BottomBox from './components/BottomBox'
export default {
  name: 'searchDetail',
  components: {
    CenterBox,
    BottomBox,
    TopBox
  },
  data () {
    return {
      roadname: localStorage.getItem('roadName'),
      oxideList: [],
      oxideXdata: [],
      carbonList: [],
      inhalableEmissions: [],
      carNum: [], // 历史车流量
      dataLine: [],
      flowData: [],
      infoData: [],
      interval: null,
      meausreInfo: '' // 管控措施
    }
  },
  mounted () {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getEchartsData()
    }, 1000 * 60 * 5)
    this.getEchartsData()
  },
  methods: {
    async onChangePicker (valueTime) {
      const time = new Date(valueTime)
      const t = time.getTime(time)
      const params = {
        roadname: this.roadname,
        startTimeStamp: (t / (24 * 60 * 60 * 1000)) * (24 * 60 * 60 * 1000),
        endTimeStamp: (t / (24 * 60 * 60 * 1000) + 1) * (24 * 60 * 60 * 1000)
      }
      const res = await getTimeData(params)
      debugger
      this.oxideXdata = []
      this.carNum = []
      res.data.forEach((item, index) => {
        // 氮氧化物排放物
        this.oxideXdata.push(item.formatedTime.slice(10, 13) + '点')
        // 车流量
        this.carNum.push(item.numsBlueCar + item.numsYellCar)
      })
    },
    async getEchartsData () {
      const res = await getEchartsData(this.roadname)
      debugger
      console.log('getEchartsData', res)
      // noxEmissions氮氧化物排放物
      const carNum = []
      var numsBlueCar = 0
      var numsYellCar = 0
      res.data.forEach((item, index) => {
        // 氮氧化物排放物
        this.oxideXdata.push(item.formatedTime.slice(10, 13) + '点')
        this.oxideList.push(item.noxEmissions)
        // 一氧化碳
        if (item.carbonMonoxideEmissions == null) {
          this.carbonList.push('0')
        } else {
          this.carbonList.push(item.carbonMonoxideEmissions)
        }
        // inhalableEmissions ---可吸入物
        if (item.inhalableEmissions == null) {
          this.carbonList.push('0')
        } else {
          this.inhalableEmissions.push(item.inhalableEmissions)
        }
        // 车流量
        this.carNum.push(item.numsBlueCar + item.numsYellCar)
        item.numsBlueCar = parseInt(item.numsBlueCar)
        item.numsYellCar = parseInt(item.numsYellCar)
        numsBlueCar += item.numsBlueCar
        numsYellCar += item.numsYellCar
      })
      // 交通运行状况
      /***
      @params cartMixRate 大车混入率
      @params avgSpeed 车辆平均速度
      @params  avgHeadWay: 0.61平均车头石距
       */
      const arr = [res.data[res.data.length - 1].avgHeadway]
      this.dataLine = arr
      this.dataLine.push(res.data[res.data.length - 1].avgSpeed)
      this.dataLine.push(res.data[res.data.length - 1].cartMixRate)
      // 交通流量
      this.flowData = [
        { value: numsBlueCar, name: '黄牌流量' },
        { value: numsYellCar, name: '绿牌流量' },
        { value: numsYellCar + numsBlueCar, name: '总计' }
      ]
      // 车辆信息展示  ['V2X车辆平均车速', 'V2X车辆氮氧化物排放', '历史V2X车辆数'] v2xAvgSpeed v2xNoxEmissions
      this.infoData.push(res.data[res.data.length - 1].v2xAvgSpeed)
      this.infoData.push(res.data[res.data.length - 1].v2xNoxEmissions)
      this.infoData.push(numsYellCar + numsBlueCar)

      // 管控措施
      this.meausreInfo = res.data[res.data.length - 1].meausreInfo
        ? res.data[res.data.length - 1].meausreInfo
        : '暂无'
    }
  }
}
</script>
<style lang="scss" scoped>
.search-deail {
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  box-sizing: border-box;
  padding-bottom: 20px;
  .title {
    box-sizing: border-box;
    width: 100%;
    height: 6.4%;
    font-size: 0.4rem;
    color: #73879c;
    background: #ededed;
    padding-left: 0.25rem;
    display: flex;
    align-items: center;
  }
  .content {
    box-sizing: border-box;
    width: 100%;
    padding: 0.25rem;
    height: calc(100% - 6.4%);
  }
}
</style>
