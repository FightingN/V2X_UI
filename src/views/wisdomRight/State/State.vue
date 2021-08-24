<template>
  <div class="v-data border">
    <div class="title title-style">态势预警</div>
    <div class="content">
      <!-- <template v-if="itemData.length > 0">
        <div class="item" v-for="(item, index) in itemData" :key="index">
          <span>{{ item.recRoadSectionName }}</span>
          <span class="span2">{{ item.numsRate }}辆/10分钟</span>
        </div>
      </template>
      <template v-else>
        <div class="no-data">暂无数据~</div>
      </template> -->
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
import { getSituation } from 'api/wisdomRight.js'

export default {
  name: 'index',
  data () {
    return {
      roadName: '路网',
      itemData: [],
      interval: null,
      headerList: []
    }
  },
  mounted () {
    this.getSituation()
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getSituation()
    }, 1000 * 60 * 10)
  },
  methods: {
    async getSituation () {
      console.log('态势预警--10分钟更新')
      if (this.itemData.length > 0) {
        this.itemData = []
      }
      const res = await getSituation()
      res.data.forEach(item => {
        this.itemData.push({
          recRoadSectionName: item.recRoadSectionName,
          numsRate: item.numsRate + '辆/10分钟'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 26%;
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
    /deep/
      .screenTable
      .table-body
      .scroll-view
      .tableContent
      div:nth-child(1) {
      width: 80%;
    }
    /deep/
      .screenTable
      .table-body
      .scroll-view
      .tableContent
      div:nth-child(2) {
      color: #dd8933;
    }
  }
}
</style>
