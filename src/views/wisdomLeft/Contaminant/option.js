export function chartOptionPie() {
  // var placeHolderStyle = {
  //   normal: {
  //     label: {
  //       show: false
  //     },
  //     labelLine: {
  //       show: false
  //     },
  //     color: 'rgba(0,0,0,0)',
  //     borderWidth: 0
  //   },
  //   emphasis: {
  //     color: 'rgba(0,0,0,0)',
  //     borderWidth: 0
  //   }
  // }
  // var dataStyle = {
  //   normal: {
  //     formatter: '{c}g',
  //     position: 'center',
  //     show: true,
  //     textStyle: {
  //       fontSize: '60',
  //       fontWeight: 'normal',
  //       color: '#fff'
  //     }
  //   }
  // }
  // return {
  //   title: [
  //     {
  //       text: '可吸入颗粒排放量',
  //       left: '29.8%',
  //       top: '80%',
  //       textAlign: 'center',
  //       textStyle: {
  //         fontWeight: 'normal',
  //         fontSize: '34',
  //         color: '#fff',
  //         textAlign: 'center'
  //       }
  //     },
  //     {
  //       text: '氮氧化物排放量',
  //       left: '70%',
  //       top: '80%',
  //       textAlign: 'center',
  //       textStyle: {
  //         color: '#fff',
  //         fontWeight: 'normal',
  //         fontSize: '34',
  //         textAlign: 'center'
  //       }
  //     }
  //   ],
  //   //第一个图表
  //   series: [
  //     {
  //       type: 'pie',
  //       hoverAnimation: false, //鼠标经过的特效
  //       radius: ['65%', '30%'],
  //       center: ['30%', '50%'],
  //       startAngle: 225,
  //       labelLine: {
  //         normal: {
  //           show: false
  //         }
  //       },
  //       label: {
  //         normal: {
  //           position: 'center'
  //         }
  //       },
  //       data: [
  //         {
  //           value: 100,
  //           itemStyle: {
  //             normal: {
  //               color: '#fff'
  //             }
  //           }
  //         },
  //         {
  //           value: 35,
  //           itemStyle: placeHolderStyle
  //         }
  //       ]
  //     },
  //     //上层环形配置
  //     {
  //       type: 'pie',
  //       hoverAnimation: false, //鼠标经过的特效
  //       radius: ['65%', '30%'],
  //       center: ['30%', '50%'],
  //       startAngle: 225,
  //       labelLine: {
  //         normal: {
  //           show: false
  //         }
  //       },
  //       label: {
  //         normal: {
  //           position: 'center'
  //         }
  //       },
  //       data: [
  //         {
  //           value: 55,
  //           itemStyle: {
  //             normal: {
  //               color: '#b5954a'
  //             }
  //           },
  //           label: dataStyle
  //         },
  //         {
  //           value: 35,
  //           itemStyle: placeHolderStyle
  //         }
  //       ]
  //     },
  //     //第二个图表
  //     {
  //       type: 'pie',
  //       hoverAnimation: false,
  //       radius: ['65%', '30%'],
  //       center: ['70%', '50%'],
  //       startAngle: 225,
  //       labelLine: {
  //         normal: {
  //           show: false
  //         }
  //       },
  //       label: {
  //         normal: {
  //           position: 'center'
  //         }
  //       },
  //       data: [
  //         {
  //           value: 100,
  //           itemStyle: {
  //             normal: {
  //               color: '#E1E8EE'
  //             }
  //           }
  //         },
  //         {
  //           value: 35,
  //           itemStyle: placeHolderStyle
  //         }
  //       ]
  //     },
  //     //上层环形配置
  //     {
  //       type: 'pie',
  //       hoverAnimation: false,
  //       radius: ['65%', '30%'],
  //       center: ['70%', '50%'],
  //       startAngle: 225,
  //       labelLine: {
  //         normal: {
  //           show: false
  //         }
  //       },
  //       label: {
  //         normal: {
  //           position: 'center'
  //         }
  //       },
  //       data: [
  //         {
  //           value: 30,
  //           itemStyle: {
  //             normal: {
  //               color: '#2b62bf'
  //             }
  //           },
  //           label: dataStyle
  //         },
  //         {
  //           value: 55,
  //           itemStyle: placeHolderStyle
  //         }
  //       ]
  //     }
  //   ]
  // }
  return {
    title: {
      text: '可吸入颗粒排放量',
      textStyle: {
        color: '#FFF',
        fontSize: 34,
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
            value: 300,
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
                  fontSize: '60',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            }
          },
          {
            value: 240,
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
            value: 60,
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
export function chartOptionPie2() {
  return {
    title: {
      text: '氮氧化物排放量',
      textStyle: {
        color: '#FFF',
        fontSize: 34,
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
            value: 300,
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
                  fontSize: '60',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            }
          },
          {
            value: 240,
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
            value: 60,
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
