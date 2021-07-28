<template>
  <div class="wisdom-map">
    <div id="container"></div>
  </div>
</template>
<script>
// import data from './G92_road.json'
import { getMapData } from 'api/wisdomRight.js'
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
    async getMapData () {
      // data.forEach(item => {
      //   this.mapData.push({
      //     lnglat: item.shape
      //   })
      // })
      try {
        const res = await getMapData()
        res.data.forEach(item => {
          this.mapData.push({
            lnglat: item.shape,
            flow: item.flow
          })
        })
      } catch (err) {
        console.log('erros', err)
      }

      this.initMap()
    },
    initMap () {
      var map = new AMap.Map('container', {
        center: [120.869918039475, 30.0288031704103],
        // mapStyle: 'amap://styles/f16c3d9d063154bda65431e782c1ad56',
        mapStyle: 'amap://styles/grey',
        zoom: 5
      })
      var colors = [
        '#07E8E4',
        '#1f78b4',
        '#b2df8a',
        '#33a02c',
        '#fb9a99',
        '#e31a1c',
        '#fdbf6f',
        '#ff7f00'
      ]
      var polyline
      this.mapData.forEach(item => {
        console.log('1', typeof item.flow)
        if (item.flow < 300) {
          console.log('小于300绿色', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            outlineColor: 'green',
            borderWeight: 1,
            strokeColor: 'green',
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
        } else if (item.flow > 300 && item.flow < 500) {
          console.log('小于500黄色', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            outlineColor: 'yellow',
            borderWeight: 1,
            strokeColor: 'yellow',
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
        } else {
          console.log('大于500', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            outlineColor: 'red',
            borderWeight: 1,
            strokeColor: 'red',
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
        }

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
