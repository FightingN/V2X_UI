<template>
  <div class="contaminant">
    <div class="title title-style">污染物排放</div>
    <div class="echarts">
      <div class="div">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div>
      <!-- <div class="div">
        <wisdom-echarts-frame
          @myChartMethod="chartManageBarMethod2"
          ref="chartManageBar"
        ></wisdom-echarts-frame>
      </div> -->
    </div>
  </div>
</template>

<script>
import { chartOptionPie, chartOptionPie2, getAvaChartOption } from './option.js'
import { debounce } from 'utils/common'
import { mapGetters } from 'vuex'
// import { getCoreData } from 'api/leftApi.js'

export default {
  name: 'Contaminant',
  data () {
    return {
      roadName: '路网',
      interval: null,
      // // 可摄入数据
      // data1: 0,
      // // 氮氧化物排放物
      // data2: 0,
      dataList: [
        { value: 0, name: '可吸入颗粒排放量' },
        { value: 0, name: '氮氧化物排放量' }
      ],
      total: 0
    }
  },
  watch: {
    coreData: {
      deep: true,
      handler: function (val) {
        this.getCoreData()
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(['coreData'])
  },
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEcharts))
  },
  methods: {
    chartManageBarMethod (myChart) {
      this.myChartBar = myChart
      this.$refs.chartManageBar.clear()
      // this.myChartBar.setOption(chartOptionPie(this.data1))
    },
    // chartManageBarMethod2 (myChart) {
    //   this.myChartBar2 = myChart
    //   this.$refs.chartManageBar.clear()
    //   // this.myChartBar2.setOption(chartOptionPie2(this.data2))
    // },
    resizeEcharts () {
      if (this.myChartBar) {
        this.myChartBar.resize()
      }
      // if (this.myChartBar2) {
      //   this.myChartBar2.resize()
      // }
    },
    getCoreData () {
      console.log('污染物排放----10秒更新')
      this.data1 = this.coreData.inhalableEmissions
      this.data2 = this.coreData.noxEmissions
      this.dataList = [
        { value: this.data1, name: '可吸入颗粒排放量' },
        { value: this.data2, name: '氮氧化物排放量' }
      ]
      if (this.myChartBar) {
        this.myChartBar.setOption(getAvaChartOption(this.dataList))
        // this.myChartBar.setOption(chartOptionPie(this.data1))
      }
      // if (this.myChartBar2) {
      //   this.myChartBar2.setOption(chartOptionPie2(this.data2))
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.contaminant {
  box-sizing: border-box;
  width: 100%;
  height: calc(30% - 0.25rem);
  background-color: #0c1427;
  border: solid 1px #4d5c9d;
  padding: 0.0625rem;
  color: #fff;
  margin-top: 0.125rem;
  .echarts {
    width: 100%;
    height: 90%;
    display: flex;
    .div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
