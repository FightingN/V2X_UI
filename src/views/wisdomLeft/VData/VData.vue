<template>
  <div class="v-data border">
    <div class="title title-style" style="margin-bottom:10px">V2X车辆数据</div>
    <div class="content">
      <div class="item">
        <span>平均车速</span>
        <span class="span2">{{ v2xAvgSpeed }}km/h</span>
      </div>
      <div class="item">
        <span>V2X车辆数据</span>
        <span class="span2">{{ v2Xcls }}辆</span>
      </div>
      <div class="item">
        <span>V2X车辆行驶里程</span>
        <span class="span2">{{ v2xDrivenDistance }}km</span>
      </div>
      <div class="item">
        <span>车辆ID</span>
        <span class="span2">{{ carId ? carId : '暂无' }}</span>
      </div>
      <div class="item">
        <span>车辆类型</span>
        <span class="span2">{{ carType ? carType : '暂无' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCoreData } from 'api/leftApi.js'

export default {
  name: 'index',
  data () {
    return {
      roadName: '路网',
      interval: null,
      v2xAvgSpeed: '',
      v2Xcls: '',
      v2xDrivenDistance: '',
      carId: '',
      carType: ''
    }
  },
  mounted () {
    this.getCoreData()
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getCoreData()
    }, 1000 * 60)
  },
  methods: {
    async getCoreData () {
      const res = await getCoreData(this.roadName)
      console.log('v2x车辆数据', res)
      this.v2xAvgSpeed = res.data.v2xAvgSpeed
      this.v2Xcls = res.data.v2Xcls
      this.v2xDrivenDistance = res.data.v2xDrivenDistance
      this.carId = res.data.id
      this.carType = res.data.carType
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 30%;
  width: 100%;
  background-color: #0c1427;
  border: solid 1px #4c5c9a;
  padding: 0.0625rem;
  .content {
    width: 100%;
    color: #fff;
    font-size: 0.2rem;
    height: 80%;
    .item {
      width: 100%;
      height: 22%;
      // border-top: 1px solid #4c5c9a;
      span {
        display: inline-block;
        width: 49%;
        text-align: center;
        // border-right: 1px solid #4c5c9a;
      }
      .span2 {
        // border-right: none;
      }
    }
  }
}
</style>
