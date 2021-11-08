<template>
  <div class="local-index">
    <div id="container"></div>
  </div>
</template>

<script>
import { getMapData } from 'api/wisdomRight.js'
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'local-index',
  data () {
    return {
      map: '',
      loca: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      AMapLoader.load({
        key: '219a489e9207991cd479d01cfc601330', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [],
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: '2.0.0' // Loca 版本，缺省 1.3.2
        }
      })
        .then(AMap => {
          this.map = new AMap.Map('container', {
            center: [120.869918039475, 30.0288031704103],
            mapStyle: 'amap://styles/grey',
            zoom: 7,
            pitch: 45,
            viewMode: '3D' // 地图设置成 3D 模式，否则图层会失去高度信息
          })
          // 创建 Loca 实例
          this.loca = new Loca.Container({
            map: this.map
          })
          this.map.on('complete', () => {
            this.loca.animate.start()
            setTimeout(this.animate, 2000)
          })
          // this.getMapData()
        })
        .catch(e => {
          console.log(e)
        })
    },
    animate () {
      console.log('动画开始', this.loca)
      this.loca.viewControl.addAnimates(
        [
          {
            // 地图中心点动画
            center: {
              value: [120.869918039475, 30.0288031704103], // 动画终点的经纬度
              control: [
                [120, 31],
                [119, 30]
              ], // 过渡中的轨迹控制点，地图上的经纬度
              timing: [0.42, 0, 0.4, 1], // 动画时间控制点
              duration: 2000 // 过渡时间，毫秒（ms）
            },
            // 俯仰角动画
            pitch: {
              value: 40, // 动画终点的俯仰角度
              control: [
                [0.3, 25],
                [0.4, 40]
              ], // 控制器，x是0～1的起始区间，y是pitch值
              timing: [0, 0, 1, 1], // 这个值是线性过渡
              duration: 2000
            },
            // 缩放等级动画
            zoom: {
              value: 10, // 动画终点的地图缩放等级
              control: [
                [0.4, 10],
                [0.6, 10]
              ], // 控制器，x是0～1的起始区间，y是zoom值
              timing: [0.42, 0, 0.4, 1],
              duration: 2000
            },
            // 旋转动画
            rotation: {
              value: 30, // 动画终点的地图旋转角度
              control: [
                [0.4, 10],
                [0.6, 40]
              ], // 控制器，x是0～1的起始区间，y是rotation值
              timing: [0.42, 0, 0.4, 1],
              duration: 2000
            }
          }
        ],
        () => {
          // 动画执行结束
          console.log('动画结束了')
        }
      )
    },
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

      this.getLine()
    },
    getLine () {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.local-index {
  box-sizing: border-box;
  width: 100%;
  height: calc(74% - 31px);
  margin-bottom: 11px;
  margin-top: 20px;
  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
