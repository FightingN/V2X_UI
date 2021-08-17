<template>
  <div class="search-deail">
    <div class="title">
      {{ roadname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管控措施:{{
        meausreInfo
      }}
      <div class="picker">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <el-button
          type="primary"
          style="margin-left:20px"
          @click="onExcelPicker"
          >导出excel</el-button
        >
      </div>
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
import {
  getEchartsData,
  getTimeData,
  getExportExcel,
  getDayData
} from 'api/searchDeatil.js'
import CenterBox from './components/CenterBox'
import TopBox from './components/TopBox'
import BottomBox from './components/BottomBox'
import { getData } from 'utils/common'

export default {
  name: 'searchDetail',
  components: {
    CenterBox,
    BottomBox,
    TopBox
  },
  data () {
    return {
      value1: '',
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
    // if (this.interval) {
    //   clearInterval(this.interval)
    // }
    // this.interval = setInterval(() => {
    //   this.getEchartsData()
    // }, 1000 * 10)
    this.getEchartsData()
  },
  methods: {
    async onExcelPicker () {
      if (this.value1 == '') {
        this.$message({
          message: '请选择导出时间范围',
          type: 'warning'
        })
      } else {
        const start = new Date(this.value1[0])
        console.log('start', start)
        const end = new Date(this.value1[1])
        const startTimestamp = start.getTime(start)
        const endTimestamp = end.getTime(end)
        const params = {
          roadname: this.roadname,
          startTimeStamp:
            (startTimestamp / (24 * 60 * 60 * 1000)) * (24 * 60 * 60 * 1000), // 0点
          endTimeStamp:
            (endTimestamp / (24 * 60 * 60 * 1000) + 1) * (24 * 60 * 60 * 1000) // 24点
        }
        try {
          const res = await getExportExcel(params)
          console.log('导出', blob)
          var blob = new Blob([res], {
            type: 'application/vnd.ms-excel;charset=UTF-8'
          })
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = `${this.roadname}.xls`
          link.target = '_blank'
          link.click()
          window.URL.revokeObjectURL(link.href)
          // 新窗口打开
          // window.location.href = `http://localhost:8081/v1/core/export?roadname=${this.roadname}&startTimeStamp=${params.startTimeStamp}&endTimeStamp=${params.endTimeStamp}&skip=true`
        } catch (error) {}
      }
    },
    async onChangePicker (valueTime) {
      console.log('valueTime', valueTime)
      console.log('time', time)
      if (this.oxideXdata.length > 0 || this.carNum.length > 0) {
        this.carNum = []
        this.oxideXdata = []
      }
      const time = new Date(valueTime)
      const t = time.getTime(time)
      const params = {
        roadname: this.roadname,
        day: valueTime
        // startTimeStamp: (t / (24 * 60 * 60 * 1000)) * (24 * 60 * 60 * 1000),
        // endTimeStamp: (t / (24 * 60 * 60 * 1000) + 1) * (24 * 60 * 60 * 1000)
      }
      const res = await getDayData(params)
      this.oxideXdata = []
      this.carNum = []
      res.data.forEach((item, index) => {
        // 氮氧化物排放物
        this.oxideXdata.push(item.formatedTime.slice(10, 13) + '点')
        // 车流量
        this.carNum.push(item.numsBlueCar + item.numsYellCar)
      })
      console.log('this.carNum', this.carNum)
      console.log('this.oxideXdata', this.oxideXdata)
    },
    async getEchartsData () {
      console.log('二级页面指标10秒更新一次')
      if (this.oxideXdata.length > 0 || this.carNum.length > 0) {
        this.carNum = []
        this.oxideXdata = []
      }
      try {
        const res = await getEchartsData(this.roadname)
        if (res.code == '500') {
          if (res.data.url) {
            window.location.replace(res.data.url)
          }
        } else {
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
            { value: numsYellCar, name: '蓝牌流量' },
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
      } catch (error) {}
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
  .picker {
    width: 50%;
    text-align: right;
  }
}
</style>
