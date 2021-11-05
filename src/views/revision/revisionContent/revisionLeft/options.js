export function pieOptions({ data = [] }) {
  const newData = []
  data.forEach((d, index) => {
    const { value, name } = d
    newData.push(
      Object.assign(
        { value, name },
        {
          label: {
            show: (function() {
              if (index == 1) {
                return false
              } else {
                return false
              }
            })(),
            formatter: '{c|{c}}\n{b|{b}}',
            rich: {
              c: {
                color: '#fff',
                fontSize: 22,
                fontWeight: 500,
                fontFamily: 'PingFang Regular'
              },
              b: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                fontFamily: 'PingFang Regular'
              }
            },
            padding: [0, -60],
            lineHeight: 30,
            position: 'outside'
          },
          labelLine: {
            // length: 30,
            length: 0,
            // length2: 80,
            length2: 0,
            color: '#D0A955',
            show: (function() {
              if (index == 1) {
                return false
              } else {
                return false
              }
            })()
          },
          emphasis: {
            labelLine: {
              show: true
            }
          }
        }
      )
    )
  })
  console.log('newData', newData)
  const color = 'rgba(255, 255, 255, 0)'
  return {
    color: ['#fac026', '#2865FA'],
    backgroundColor: color,
    tooltip: {
      show: true
    },
    graphic: {
      // 图形中间图片
      elements: [
        {
          type: 'image',
          style: {
            image: require('assets/revision/quanquan.png'), // 你的图片地址
            width: 90,
            height: 90
          },
          left: '25%',
          top: 'center'
        }
      ]
    },
    series: [
      {
        radius: ['48%', '60%'],
        center: ['40%', '50%'],
        type: 'pie',
        clockwise: false,
        // startAngle: 120,
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#0C192C'
          }
        },
        data: newData
      },
      {
        type: 'gauge',
        detail: false,
        splitNumber: 5,
        radius: '70%',
        center: ['40%', 'center'],
        startAngle: 0,
        endAngle: -360,
        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            shadowBlur: 0
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'rgba(1, 220, 239, 0.7)',
            width: 5
          },
          length: 1,
          splitNumber: 10
        },
        splitLine: {
          show: false,
          length: 10,
          lineStyle: {
            color: '#01FBBD'
          }
        },
        axisLabel: {
          show: false
        }
      }
    ]
  }
}
