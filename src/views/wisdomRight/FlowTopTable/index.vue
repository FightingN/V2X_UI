<template>
  <div class="v-data border">
    <div class="title title-style">实时路段交通流量Top</div>
    <div class="content">
      <template v-if="itemData.length > 0">
        <screen-table
          :headerData="headerList"
          :tableContent="itemData"
          :ava="2"
          :tableContentAva="3"
        ></screen-table>
      </template>
      <template v-else>
        <div class="no-data">暂无数据~</div>
      </template>
    </div>
  </div>
</template>

<script>
import { getTopRate } from 'api/wisdomRight.js'

export default {
  name: 'flow-top-table',
  data () {
    return {
      roadName: '路网',
      itemData: [],
      interval: null,
      headerList: []
      // data: [
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   },
      //   {
      //     roadSectionName: '红垦枢纽_机场互通_杭州方向',
      //     numsBlueCar: 0,
      //     numsYellCar: 1
      //   }
      // ]
    }
  },
  mounted () {
    this.getTopRate()
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getTopRate()
    }, 1000 * 10)
  },
  methods: {
    async getTopRate () {
      console.log('实时路段交通流量Top---10秒更新')
      if (this.itemData.length > 0) {
        this.itemData = []
      }
      const res = await getTopRate()
      console.log('Top', res)
      // res.data = this.data
      res.data.forEach(item => {
        this.itemData.push({
          recRoadSectionName: item.roadSectionName,
          numsRate: item.numsBlueCar + item.numsYellCar + '辆'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 23.5%;
  width: 100%;
  background-color: #0c1427;
  padding: 0.0625rem;
  border: solid 1px #4c5c9a;
  margin-top: 0.25rem;
  .content {
    width: 100%;
    height: 85%;
    color: #fff;
    font-size: 0.15rem;
    .item {
      width: 100%;
      height: 33%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        display: inline-block;
        text-align: center;
      }
      .span2 {
        color: #dd8933;
      }
    }
    .item-title {
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 16px;
    }
    /deep/ .screenTable .header {
      height: 0%;
      display: flex;
      align-items: center;
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 0.2rem;
    }
    /deep/ .screenTable .table-body {
      height: 100%;
    }
    /deep/ .screenTable .table-body .scroll-view .tableContent {
      border: none;
    }
  }
}
</style>
