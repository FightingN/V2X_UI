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
        avoidLabelOverlap: true,
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
export function getAvaChartOption(data = []) {
  var total = 0
  var data1 = []
  for (var i = 0; i < data.length; i++) {
    total += data[i].value
    data1.push({
      value: data[i].value,
      name: data[i].name,
      itemStyle: {
        normal: {
          borderWidth: 2,
          borderColor: 'rgba(23, 27, 31, 0.4)'
        }
      }
    })
  }
  var seriesOption = [
    {
      type: 'pie',
      radius: ['45%', '50%'],
      center: ['50%', '40%'],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: false,
            color: 'white'
          }
        }
      },
      data: [
        {
          value: 50,
          name: '',
          itemStyle: {
            normal: {
              color: ' #22627a',
              opacity: 0.5
            }
          }
        }
      ]
    },
    {
      name: '排放量',
      minAngle: 10,
      type: 'pie',
      avoidLabelOverlap: true,
      clockWise: false,
      radius: ['55%', '68%'],
      center: ['50%', '40%'],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: '#FCFEFF',
            formatter: '{c|{c}g}\n{per|{d}%}',
            // padding: [0, -100, 25, 0],
            rich: {
              c: {
                color: '#FCFEFF',
                fontSize: 12,
                lineHeight: 20,
                align: 'center',
                fontFamily: 'PingFang Regular'
              },
              hr: {
                width: '100%',
                height: 0,
                alien: 'center'
              },
              per: {
                color: '#FCFEFF',
                align: 'left',
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'PingFang Regular'
              }
            }
            // formatter: function(params) {
            //   console.log('name', params)
            //   return '' + params.value + params.percent + '%'
            // }
          },
          labelLine: {
            length: 0,
            length2: 50,
            show: true,
            color: '#00ffff'
          }
        }
      },
      data: data1
    }
  ]
  return {
    tooltip: {},
    title: {
      text: total,
      subtext: '总数',
      top: '30%',
      left: '49%',
      textAlign: 'center',
      textStyle: {
        fontSize: 20,
        fontFamily: 'PingFang Regular',
        fontWeight: 'bold',
        color: '#FCFEFF'
      },
      subtextStyle: {
        fontSize: 14,
        fontFamily: 'PingFang Regular',
        fontWeight: '300',
        color: '#FCFEFF'
      }
    },
    legend: {
      icon:
        'path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z',
      right: 'center',
      bottom: '5%',
      width: '70%',
      itemGap: 15,
      textStyle: {
        color: '#FCFEFF',
        fontSize: 12,
        fontFamily: 'PingFang Regular'
      }
    },
    color: ['#b5954a', '#2b62bf'],
    series: seriesOption
  }
}
