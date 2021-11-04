<template>
  <div class="revision-map">
    地图
  </div>
</template>

<script>
import { getMapData } from 'api/wisdomRight.js'
export default {
  name: 'revision-map',
  data () {
    return {
      mapData: []
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.revision-map {
  box-sizing: border-box;
  width: 100%;
  height: calc(74% - 31px);
  border: 1px solid red;
  margin-bottom: 11px;
  margin-top: 20px;
}
</style>
