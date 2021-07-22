export function chartOptionPie(bacData) {
  // var bacData = 300
  // var data1 = 240
  // var data2 = 60
  // var data1 = Math.floor(Math.random() * 100)
  var data2 = Math.floor(Math.random() * 100)
  var data1 = bacData - data2
  // var bacData = data1 + data2
  // data1+data2=bacData 才是半圆
  return {
    title: {
      text: '可吸入颗粒排放量',
      textStyle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
      },
      left: 'center',
      top: '60%'
    },
    tooltip: {
      show: false
    },
    color: ['#b5954a'],
    series: [
      {
        name: 'C',
        type: 'pie',
        startAngle: 0,
        hoverAnimation: false,
        radius: ['60%', '87%'],
        center: ['50%', '50%'],
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '10',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: bacData,
            itemStyle: {
              normal: {
                color: 'rgba(1,218,220,0)'
                // color: 'red'
              }
            },
            label: {
              normal: {
                formatter: '{c}g',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            }
          },
          {
            // value: 240,
            value: data1,
            itemStyle: {
              normal: {
                // shadowColor: 'rgba(0, 0, 0, .3)',
                // shadowBlur: 10,
                // shadowOffsetY: 3,
                // shadowOffsetX: 0,
                color: '#b5954a'
                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                //     offset: 0,
                //     color: 'rgb(129, 227, 238)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(25, 183, 207)'
                // }])
              }
            }
          },
          {
            // value: 60,
            value: data2,
            itemStyle: {
              normal: {
                color: 'rgba(1,218,220,0.1)'
              }
            }
          }
        ]
      }
    ]
  }
}
export function chartOptionPie2(bacData) {
  // var data1 = Math.floor(Math.random() * 100)
  var data2 = Math.floor(Math.random() * 100)
  var data1 = bacData - data2

  // var bacData = data1 + data2
  return {
    title: {
      text: '氮氧化物排放量',
      textStyle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
      },
      left: 'center',
      top: '60%'
    },
    tooltip: {
      show: false
    },
    color: ['#b5954a'],
    series: [
      {
        name: 'C',
        type: 'pie',
        startAngle: 0,
        hoverAnimation: false,
        radius: ['60%', '87%'],
        center: ['50%', '50%'],
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '10',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: bacData,
            itemStyle: {
              normal: {
                color: 'rgba(1,218,220,0)'
              }
            },
            label: {
              normal: {
                formatter: '{c}g',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            }
          },
          {
            value: data1,
            itemStyle: {
              normal: {
                // shadowColor: 'rgba(0, 0, 0, .3)',
                // shadowBlur: 10,
                // shadowOffsetY: 3,
                // shadowOffsetX: 0,
                color: '#2b62bf'
                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                //     offset: 0,
                //     color: 'rgb(129, 227, 238)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(25, 183, 207)'
                // }])
              }
            }
          },
          {
            value: data2,
            itemStyle: {
              normal: {
                color: 'rgba(1,218,220,0.1)'
              }
            }
          }
        ]
      }
    ]
  }
}
