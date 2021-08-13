<template>
  <div class="wisdom-right">
    <screen-dropdown-menu
      :menuList="menuList"
      @onChooseItem="onChooseItem"
    ></screen-dropdown-menu>
    <!-- <flow-top></flow-top> -->
    <flow-top-table></flow-top-table>
    <!-- <V-Data></V-Data> -->
    <control></control>
    <!-- <Contaminant /> -->
    <state></state>
  </div>
</template>
<script>
import { getRoads } from 'api/wisdomRight.js'
// import FlowTop from '@/views/wisdomRight/FlowTop/FlowTop'
import FlowTopTable from '@/views/wisdomRight/FlowTopTable'
// import VData from './VData/VData'
import Control from './Control/Control'
import Contaminant from './Contaminant/Contaminant'
import State from './State/State'
import searchInput from './searchInput/searchInput'

export default {
  components: {
    // FlowTop,
    FlowTopTable,
    // VData,
    Control,
    Contaminant,
    State,
    searchInput
  },
  data () {
    return {
      name: 'wisdom-right',
      menuList: [
        // {
        //   label: '选项1',
        //   select: true,
        //   value: '1'
        // },
      ]
    }
  },
  mounted () {
    this.getRoads()
  },
  methods: {
    onChooseItem (value) {
      console.log('value', value)
      this.$router.push({
        path: '/searchDeatil'
        // query: {
        //   id: value.label
        // }
      })
      localStorage.setItem('roadName', value.label)
    },
    async getRoads () {
      try {
        const res = await getRoads()
        if (res.code == '500') {
          if (res.data.url) {
            window.location.replace(res.data.url)
          }
        } else {
          res.data.forEach((item, index) => {
            if (index == 0) {
              this.menuList.push({
                label: item,
                select: true,
                value: index
              })
            } else {
              this.menuList.push({
                label: item,
                select: false,
                value: index
              })
            }
          })
        }
      } catch (error) {}
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-right {
  box-sizing: border-box;
  width: 24%;
  height: 100%;
  z-index: 10;
  // border: 1px solid red;
  margin-left: 0.25rem;
  .search {
    width: 100%;
    height: 50px;
    background: #fff;
  }
}
</style>
