<template>
  <div class="v-data border">
    <div class="title title-style">管控措施</div>
    <div class="content">
      <template v-if="measureData.length > 0">
        <screen-table
          :headerData="headerList"
          :tableContent="measureData"
          :ava="2"
          :tableContentAva="4"
        ></screen-table>
      </template>
      <template v-else>
        <div class="no-data">暂无数据~</div>
      </template>
    </div>
  </div>
</template>

<script>
import { getServiceTodo } from 'api/wisdomRight.js'
export default {
  name: 'Control',
  data () {
    return {
      roadName: '路网',
      measureData: [],
      headerList: [],
      data: []
    }
  },
  mounted () {
    this.getServiceTodo()
  },
  methods: {
    async getServiceTodo () {
      if (this.measureData.length > 0) {
        this.measureData = []
      }
      const res = await getServiceTodo(this.roadName)
      console.log('管控措施', res)
      // res.data = this.data
      res.data.forEach(item => {
        this.measureData.push({
          recRoadSectionName: item.recRoadSectionName,
          needTodo: item.needTodo
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v-data {
  box-sizing: border-box;
  height: 40%;
  width: 100%;
  background-color: #0c1427;
  padding: 0.0625rem;
  border: solid 1px #4c5c9a;
  margin-top: 0.25rem;
  .content {
    width: 100%;
    height: 80%;
    color: #fff;
    font-size: 16px;
    line-height: 0.5rem;
    // margin-top: 0.25rem;
    word-break: break-all;
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
    /deep/ .screenTable .tableContent div {
      overflow: auto !important;
      white-space: pre-wrap !important;
      text-overflow: clip !important;
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
