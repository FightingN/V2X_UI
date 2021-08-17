<template>
  <div class="wisdom-left">
    <text-echarts></text-echarts>
    <service-level></service-level>
    <!-- <V-Data></V-Data> -->
    <service-data></service-data>
    <Contaminant />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TextEcharts from './TextEcharts/TextEcharts'
import ServiceLevel from './ServiceLevel/ServiceLevel'
// import VData from './VData/VData'
import ServiceData from './serviceData'
import Contaminant from './Contaminant/Contaminant'
import { getCoreData } from 'api/leftApi.js'
export default {
  components: {
    TextEcharts,
    ServiceLevel,
    // VData,
    ServiceData,
    Contaminant
  },
  data () {
    return {
      name: 'wisdomLeft',
      roadName: '路网',
      interval: null
    }
  },
  computed: {
    ...mapGetters(['coreData'])
  },
  mounted () {
    this.getCoreData()
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      this.getCoreData()
      // 10秒更新
    }, 1000 * 10)
    this.$once('hook:beforeDestroy', () => {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
        console.log('定时器清空')
      }
    })
  },
  methods: {
    ...mapActions({
      set_coreData: 'SET_COREDATA'
    }),
    async getCoreData () {
      const res = await getCoreData(this.roadName)
      this.set_coreData(res.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-left {
  box-sizing: border-box;
  width: 24%;
  height: 100%;
  z-index: 10;
}
</style>
