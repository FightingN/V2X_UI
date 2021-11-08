<template>
  <div class="revision-map">
    <div id="container"></div>
    <div class="radar">
      <div class="ripple"></div>
      <div class="ripple"></div>
      <div class="ripple"></div>
    </div>
  </div>
</template>

<script>
import { getMapData } from 'api/wisdomRight.js'
export default {
  name: 'revision-map',
  data () {
    return {
      mapData: [],
      marker: null,
      map: '',
      markerData: [
        {
          icon: require('assets/revision/circle.png'),
          anchor: 'top-center',
          position: [120.52348791747553, 30.1528096608299],
          offset: new AMap.Pixel(-13, -30)
        },
        {
          icon: require('assets/revision/circle.png'),
          anchor: 'top-bottom',
          position: [120.44966688527875, 30.19651588393488],
          offset: new AMap.Pixel(-60, -30)
        },
        {
          icon: require('assets/revision/car.png'),
          anchor: 'top-center',
          position: [121.39132187541735, 29.935313675826293],
          offset: new AMap.Pixel(-20, -30)
        },
        {
          icon: require('assets/revision/car.png'),
          anchor: 'top-center',
          position: [120.98539786798106, 30.062568094243957],
          offset: new AMap.Pixel(10, -15)
        },
        {
          icon: require('assets/revision/bus.png'),
          anchor: 'top-center',
          position: [120.98539786798106, 30.062568094243957],
          offset: new AMap.Pixel(-72, -70)
        }
        // {
        //   content: document.querySelector('.radar'),
        //   anchor: 'top-center',
        //   position: [120.44966688527875, 30.19651588393488],
        //   offset: new AMap.Pixel(-72, -70)
        // }
      ]
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
      this.map = new AMap.Map('container', {
        center: [120.869918039475, 30.0288031704103],
        mapStyle: 'amap://styles/grey',
        zoom: 10
      })
      // this.animate()
      var polyline
      this.mapData.forEach(item => {
        if (item.flow < 300) {
          // console.log('小于300绿色', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            // outlineColor: 'green',
            outlineColor: '#0064E3',
            borderWeight: 1,
            strokeColor: '#0064E3',
            strokeOpacity: 1,
            strokeWeight: 4,
            // 折线样式还支持 'dashed'
            strokeStyle: 'solid',
            // strokeStyle是dashed时有效
            strokeDasharray: [10, 5],
            lineJoin: 'round',
            lineCap: 'round',
            zIndex: 5,
            showDir: true
          })
        } else if (item.flow > 300 && item.flow < 500) {
          console.log('小于500黄色', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            outlineColor: '#FCA100',
            borderWeight: 1,
            strokeColor: '#FCA100',
            strokeOpacity: 1,
            strokeWeight: 4,
            // 折线样式还支持 'dashed'
            strokeStyle: 'solid',
            // strokeStyle是dashed时有效
            strokeDasharray: [10, 5],
            lineJoin: 'round',
            lineCap: 'round',
            zIndex: 5,
            showDir: true
          })
        } else {
          console.log('大于500', item.flow)
          polyline = new AMap.Polyline({
            path: item.lnglat,
            isOutline: true,
            outlineColor: '#F61313',
            borderWeight: 1,
            strokeColor: '#F61313',
            strokeOpacity: 1,
            strokeWeight: 4,
            // 折线样式还支持 'dashed'
            strokeStyle: 'solid',
            // strokeStyle是dashed时有效
            strokeDasharray: [10, 5],
            lineJoin: 'round',
            lineCap: 'round',
            zIndex: 5,
            showDir: true
          })
        }

        polyline.setMap(this.map)
      })
      var polyEditor = new AMap.PolyEditor(this.map, polyline)
      this.getMarker()
    },
    getMarker () {
      this.markerData.forEach(item => {
        this.marker = new AMap.Marker(item)
        this.marker.setMap(this.map)
        this.marker.on('click', () => {
          alert('1')
        })
      })
    },
    animate () {
      // 镜头动画
      this.map.setZoom(10)
      this.map.setCenter([120.869918039475, 30.0288031704103])
    }
  }
}
</script>
<style lang="scss" scoped>
.revision-map {
  box-sizing: border-box;
  width: 100%;
  height: calc(74% - 31px);
  margin-bottom: 11px;
  margin-top: 20px;
  #container {
    width: 100%;
    height: 100%;
  }
  .radar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    position: relative;
    z-index: -1;
    .ripple {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid red;
      animation: ripple 2s linear infinite;
    }
    @keyframes ripple {
      to {
        width: 150px;
        height: 150px;
        opacity: 0;
      }
    }
    .radar :nth-child(1) {
      animation-delay: 0.666s;
    }
    .radar :nth-child(2) {
      animation-delay: 1.322s;
    }
  }
}
</style>
