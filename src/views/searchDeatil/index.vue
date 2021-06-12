<template>
  <div class="search-deail">
    <div class="title">G92_红垦枢纽-机场互通_杭州方向</div>
    <div class="content">
      <top-box></top-box>
      <center-box></center-box>
      <bottom-box></bottom-box>
    </div>
  </div>
</template>

<script>
// import { getEchartsData } from 'api/wisdomRight.js'
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
      categoryId: 1,
      pageSize: 30,
      communityId: ''
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    // async getEchartsData () {
    //   // const res = await getEchartsData()
    //   console.log('res', res)
    // }
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
