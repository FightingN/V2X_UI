<template>
  <div class="wisdom-map">
    <div id="container"></div>
  </div>
</template>
<script>
import data from './G92_road.json'
export default {
  data () {
    return {
      name: 'wisdomMap',
      mapData: []
    }
  },
  mounted () {
    this.getMapData()
  },
  methods: {
    getMapData () {
      data.forEach(item => {
        this.mapData.push({
          lnglat: item.shape
        })
      })
      this.initMap()
    },
    initMap () {
      var map = new AMap.Map('container', {
        center: [120.869918039475, 30.0288031704103],
        // mapStyle: 'amap://styles/f16c3d9d063154bda65431e782c1ad56',
        mapStyle: 'amap://styles/grey',
        zoom: 5
      })
      var polyline
      this.mapData.forEach(item => {
        polyline = new AMap.Polyline({
          path: item.lnglat,
          isOutline: true,
          outlineColor: '#a6f993',
          borderWeight: 1,
          strokeColor: '#a6f993',
          strokeOpacity: 1,
          strokeWeight: 1,
          // 折线样式还支持 'dashed'
          strokeStyle: 'solid',
          // strokeStyle是dashed时有效
          strokeDasharray: [10, 5],
          lineJoin: 'round',
          lineCap: 'round',
          zIndex: 5
        })
        polyline.setMap(map)
      })
      // 缩放地图到合适的视野级别
      map.setFitView([polyline])

      var polyEditor = new AMap.PolyEditor(map, polyline)
    }
  }
}
</script>
<style lang="scss" scoped>
.wisdom-map {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
