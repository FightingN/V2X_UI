<template>
  <div class="v-data border">
    <div class="title title-style">路段服务水平评价</div>
    <div class="content">
      <template v-if="serviceData.length > 0">
        <screen-table
          :headerData="headerList"
          :tableContent="serviceData"
          :ava="2"
          :tableContentAva="3"
        ></screen-table>
      </template>
      <template v-else>
        <div class="no-data">暂无数据~</div>
      </template>
      <!-- <template v-if="serviceData.length > 0">
        <div class="item item-title">
          <span>路段名称</span>
          <span class="span2">服务水平</span>
        </div>
        <div class="item" v-for="(item, index) in serviceData" :key="index">
          <span>{{ item.recRoadSectionName }}</span>
          <span class="span2">{{ item.serviceLevel }}级</span>
        </div>
      </template>
      <template v-else>
        <div class="no-data">暂无数据~</div>
      </template> -->
    </div>
  </div>
</template>

<script>
import { getService } from 'api/wisdomRight.js'

export default {
  name: 'index',
  data () {
    return {
      roadName: '路网',
      serviceData: [],
      interval: null,
      headerList: [
        {
          text1: '路段名称',
          text2: '服务水平'
        }
      ]
    }
  },
  mounted () {
    this.getService()
    // if (this.interval) {
    //   clearInterval(this.interval)
    // }
    // this.interval = setInterval(() => {
    //   this.getService()
    // }, 1000 * 60 * 10)
  },
  methods: {
    async getService () {
      if (this.serviceData.length > 0) {
        this.serviceData = []
      }
      const res = await getService(this.roadName)
      // console.log('路段服务水平评价', res)
      res.data.forEach(item => {
        this.serviceData.push({
          recRoadSectionName: item.recRoadSectionName,
          serviceLevel: item.serviceLevel
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 20%;
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
      height: 25%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      span {
        flex: 1;
        display: inline-block;
        text-align: center;
      }
    }
    .item-title {
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 0.2rem;
    }
    /deep/ .screenTable .header {
      height: 20%;
      display: flex;
      align-items: center;
      text-align: center;
      background: rgba(21, 33, 77, 0.6);
      color: #3c7ca9;
      font-size: 0.2rem;
    }
    /deep/ .screenTable .table-body {
      height: 80%;
    }
    /deep/ .screenTable .table-body .scroll-view .tableContent {
      border: none;
    }
  }
}
</style>
