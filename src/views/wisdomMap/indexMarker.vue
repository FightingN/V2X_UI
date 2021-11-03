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
      dataMap: {},
      map: null
    }
  },
  mounted () {
    this.getMapData()
  },
  methods: {
    async getMapData () {
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
      this.map = new AMap.Map('container', {
        center: [120.869918039475, 30.0288031704103],
        // mapStyle: 'amap://styles/f16c3d9d063154bda65431e782c1ad56',
        mapStyle: 'amap://styles/grey',
        zoom: 5
      })
    },
    getMarker () {
      this.markers = []
      // const partyIcon = new this.AMap.Icon({
      //   size: new this.AMap.Size(54, 64),
      //   image: require('assets/images/yushanScreen/party-icon.png')
      // })
      const marker = new this.AMap.Marker({
        position: [120.869918039475, 30.0288031704103],
        icon: new this.AMap.Icon({
          size: new this.AMap.Size(54, 64),
          image: require('assets/event-marker.png')
        }),
        map: this.map
        // extData: {
        //   lng: item.longitude,
        //   lat: item.latitude,
        //   title: item.partyOrgName,
        //   id: item.id
        // }
      })
      this.markers.push(marker)
      // marker.on('click', this.markerClick.bind(this))
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
