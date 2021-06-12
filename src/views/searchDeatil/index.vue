<template>
  <div class="search-deail">
    <div class="title">G92_红垦枢纽-机场互通_杭州方向</div>
    <div class="content">
      <top-box :oxideXdata="oxideXdata" :oxideList="oxideList"></top-box>
      <center-box></center-box>
      <bottom-box></bottom-box>
    </div>
  </div>
</template>

<script>
import { getEchartsData } from 'api/searchDeatil.js'
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
      oxideXdata: []
    }
  },
  mounted () {
    this.getEchartsData()
  },
  methods: {
    async getEchartsData () {
      const res = await getEchartsData(this.roadname)
      // noxEmissions氮氧化物排放物
      res.data.forEach((item, index) => {
        // 氮氧化物排放物
        this.oxideXdata.push(item.formatedTime)
        this.oxideList.push(item.noxEmissions)
      })
      console.log('11', this.oxideXdata)
      console.log('11', this.oxideList)
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
