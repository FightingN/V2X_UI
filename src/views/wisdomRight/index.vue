<template>
  <div class="wisdom-right">
    <screen-dropdown-menu
      :menuList="menuList"
      @onChooseItem="onChooseItem"
    ></screen-dropdown-menu>
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
      name: 'wisdom-right',
      menuList: [
        {
          label: '选项1',
          select: true,
          value: '1'
        },
        {
          label: '选项2',
          select: true,
          value: '2'
        },
        {
          label: '选项3',
          select: true,
          value: '3'
        },
        {
          label: '选项4',
          select: true,
          value: '4'
        },
        {
          label: '选项5',
          select: true,
          value: '5'
        }
      ]
    }
  },
  methods: {
    onChooseItem (value) {
      console.log('value', value)
      this.$router.push({
        path: '/searchDeatil',
        query: {
          id: value.value
        }
      })
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
