<template>
  <div class="wisdom-right">
    <!-- <screen-dropdown-menu></screen-dropdown-menu> -->
    <div class="search" @click="onChangeSearch">二级页面</div>
    <search-input></search-input>
    <flow-top></flow-top>
    <V-Data></V-Data>
    <control></control>
    <!-- <Contaminant /> -->
    <state></state>
  </div>
</template>
<script>
import FlowTop from '@/views/wisdomRight/FlowTop/FlowTop'
import VData from './VData/VData'
import Control from './Control/Control'
import Contaminant from './Contaminant/Contaminant'
import State from './State/State'
import searchInput from './searchInput/searchInput'

export default {
  components: {
    FlowTop,
    VData,
    Control,
    Contaminant,
    State,
    searchInput
  },
  data () {
    return {
      name: 'wisdom-right'
    }
  },
  methods: {
    onChangeSearch () {
      this.$router.push({
        path: '/searchDeatil'
        // query: {
        //   id: this.id
        // }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-right {
  box-sizing: border-box;
  width: 40%;
  height: 100%;
  z-index: 10;
  .search {
    width: 100%;
    height: 50px;
    background: #fff;
  }
}
</style>
