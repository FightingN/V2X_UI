<template>
  <div class="wisdom-map">
    <div id="container"></div>
  </div>
</template>
<script>
// import data from './data.json'
import data from './G92_road.json'
import { getMapData } from 'api/wisdomRight.js'
export default {
  data () {
    return {
      name: 'wisdomMap',
      mapData: [],
      dataMap: {}
    }
  },
  mounted () {
    this.getMapData()
  },
  methods: {
    async getMapData () {
      const dataMap = {
        type: 'FeatureCollection',
        features: []
      }
      data.forEach((item, index) => {
        if (index < 10) {
          dataMap.features.push({
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: item.shape
            },
            properties: {
              type: 1
            }
          })
        } else if (index > 10) {
          dataMap.features.push({
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: item.shape
            },
            properties: {
              type: 2
            }
          })
        }
      })
      this.dataMap = dataMap
      // try {
      //   const res = await getMapData()
      //   res.data.forEach(item => {
      //     this.mapData.push({
      //       lnglat: item.shape,
      //       flow: item.flow
      //     })
      //   })
      // } catch (err) {
      //   console.log('erros', err)
      // }
      // setTimeout(() => {
      this.initMap()
      // }, 500)
    },
    initMap () {
      var map = new AMap.Map('container', {
        zoom: 11.2,
        // center: [116.352734, 39.8447], // 北京
        center: [120.869918039475, 30.0288031704103], // 线
        // center: [113.97199630737305, 22.5807295363949], // 点
        showLabel: false,
        viewMode: '3D',
        mapStyle: 'amap://styles/grey',
        pitch: 50
      })
      var loca = new Loca.Container({
        map
      })
      window._loca = loca
      var geo = new Loca.GeoJSONSource({
        data: this.dataMap
        // data: data
      })

      var layer = new Loca.PulseLineLayer({
        // loca,
        zIndex: 10,
        opacity: 1,
        visible: true,
        zooms: [2, 22]
      })

      var headColors = [
        'red',
        '#EFBB51',
        '#7F3CFF',
        '#4CC19B',
        '#0B5D74',
        '#E06AC4',
        '#223F9B',
        '#F15C1A',
        '#7A0FA6'
      ]

      console.log('geo', geo)
      layer.setSource(geo)
      layer.setStyle({
        altitude: 0,
        lineWidth: 2,
        // 脉冲头颜色
        headColor: (_, feature) => {
          return headColors[feature.properties.type - 1]
        },
        // 脉冲尾颜色
        trailColor: 'rgba(128, 128, 128, 0.5)',
        // 脉冲长度，0.25 表示一段脉冲占整条路的 1/4
        interval: 0.25,
        // 脉冲线的速度，几秒钟跑完整段路
        duration: 5000
      })
      loca.add(layer)

      // 打点
      // var geoLevelF = new Loca.GeoJSONSource({
      //   // data: [],
      //   url:
      //     'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json'
      // })
      // console.log('geoLevelF', geoLevelF)
      // var breathRed = new Loca.ScatterLayer({
      //   loca,
      //   zIndex: 113,
      //   opacity: 1,
      //   visible: true,
      //   zooms: [2, 22],
      //   eventSupport: true
      //   // container: map
      // })
      // breathRed.setSource(geoLevelF)
      // breathRed.setStyle({
      //   unit: 'meter',
      //   size: [2600, 2600],
      //   borderWidth: 0,
      //   texture:
      //     'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
      //   duration: 500,
      //   animate: true
      // })
      loca.animate.start()
    },
    getMarker () {
      this.markers = []
      // const partyIcon = new this.AMap.Icon({
      //   size: new this.AMap.Size(54, 64),
      //   image: require('assets/images/yushanScreen/party-icon.png')
      // })
      this.popAllData.forEach((item, index) => {
        const marker = new this.AMap.Marker({
          position: [item.longitude, item.latitude],
          icon: new this.AMap.Icon({
            size: new this.AMap.Size(54, 64),
            image: item.imgUrl
          }),
          map: this.map,
          extData: {
            lng: item.longitude,
            lat: item.latitude,
            title: item.partyOrgName,
            id: item.id
          }
        })
        this.markers.push(marker)
        marker.on('click', this.markerClick.bind(this))
      })
      this.map.add(this.markers)
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
