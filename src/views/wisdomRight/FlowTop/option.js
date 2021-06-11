export function chartOptionPie() {
  // return {
  //   color: ['#419aee', '#2a62bf', '#eaa13a'],
  //   legend: {
  //     top: '80%',
  //     left: '30%',
  //     itemWidth: 30,
  //     itemHeight: 20,
  //     data: ['合计', '蓝牌', '黄牌'],
  //     textStyle: {
  //       color: '#fff',
  //       fontSize: 16
  //     }
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '5%',
  //     bottom: '0%',
  //     top: '5%',
  //     containLabel: true
  //   },
  //   xAxis: {
  //     show: false,
  //     type: 'value',
  //     axisLabel: {
  //       // show: true,
  //       textStyle: {
  //         color: '#fff',
  //         fontSize: 16
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: false
  //     }
  //   },
  //   yAxis: {
  //     type: 'category',
  //     axisTick: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: false
  //     },
  //     axisLabel: {
  //       textStyle: {
  //         color: '#fff',
  //         fontSize: 16
  //       }
  //     },
  //     data: ['', '', '']
  //   },
  //   series: [
  //     {
  //       name: '合计',
  //       type: 'bar',
  //       stack: 'Tik Tok',
  //       barWidth: 25,
  //       itemStyle: {
  //         shadowColor: 'rgba(0, 0, 0, .3)',
  //         shadowBlur: 1,
  //         shadowOffsetY: 1,
  //         shadowOffsetX: 0,
  //         emphasis: {
  //           borderWidth: '10',
  //           borderColor: '#de0b1a',
  //           color: '#fff',
  //           opacity: 1,
  //           shadowColor: '#de0b1a',
  //           shadowBlur: 0,
  //           shadowOffsetY: 0,
  //           shadowOffsetX: 0
  //         }
  //       },
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'inside',
  //           formatter: '{c}',
  //           textStyle: {
  //             align: 'center',
  //             baseline: 'middle',
  //             fontSize: 16,
  //             fontWeight: '400',
  //             color: '#fff'
  //           }
  //         }
  //       },
  //       data: [29, 19, 26, 44, 20, 21, 32, 34]
  //     },
  //     {
  //       name: '蓝牌',
  //       type: 'bar',
  //       stack: 'Tik Tok',
  //       barWidth: 25,
  //       itemStyle: {
  //         shadowColor: 'rgba(0, 0, 0, .3)',
  //         shadowBlur: 1,
  //         shadowOffsetY: 1,
  //         shadowOffsetX: 0,
  //         emphasis: {
  //           borderWidth: '10',
  //           borderColor: '#d6d6d6',
  //           color: '#d6d6d6',
  //           opacity: 1,
  //           shadowColor: '#d6d6d6',
  //           shadowBlur: 0,
  //           shadowOffsetY: 0,
  //           shadowOffsetX: 0
  //         }
  //       },
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'inside',
  //           formatter: '{c}',
  //           textStyle: {
  //             align: 'center',
  //             baseline: 'middle',
  //             fontSize: 16,
  //             fontWeight: '400',
  //             color: '#fff'
  //           }
  //         }
  //       },
  //       data: [38, 36, 44, 33, 21, 32, 41, 45]
  //     },
  //     {
  //       name: '黄牌',
  //       type: 'bar',
  //       stack: 'Tik Tok',
  //       barWidth: 25,
  //       itemStyle: {
  //         shadowColor: 'rgba(0, 0, 0, .3)',
  //         shadowBlur: 1,
  //         shadowOffsetY: 1,
  //         shadowOffsetX: 0,
  //         emphasis: {
  //           borderWidth: '10',
  //           borderColor: '#00c1c1',
  //           color: '#00c1c1',
  //           opacity: 1,
  //           shadowColor: '#00c1c1',
  //           shadowBlur: 0,
  //           shadowOffsetY: 0,
  //           shadowOffsetX: 0
  //         }
  //       },
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'inside',
  //           formatter: '{c}',
  //           textStyle: {
  //             align: 'center',
  //             baseline: 'middle',
  //             fontSize: 16,
  //             fontWeight: '400',
  //             color: '#fff'
  //           }
  //         }
  //       },
  //       data: [33, 45, 30, 23, 59, 47, 27, 21]
  //     }
  //   ]
  // }
  return {
    // '#419aee', '#2a62bf', '#eaa13a'
    color: ['#419aee', '#2a62bf', '#eaa13a'],
    grid: {
      top: '10%',
      bottom: '30%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    legend: {
      data: ['蓝牌', '黄牌', '合计'],
      top: '0%',
      right: '10',
      textStyle: {
        color: 'rgba(250,250,250,0.6)',
        fontSize: 16
      }
    },
    xAxis: {
      data: [
        'G92_红垦枢纽_宁波方向',
        'G92_红垦枢纽_杭州方向',
        'G92_红垦枢纽_杭州方向'
      ],
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: '#8c8c8c',
          width: 2
        }
      },
      axisTick: {
        show: true //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        // 坐标轴刻度标签换行处理
        formatter: function(params) {
          var newParamsName = '' // 最终拼接成的字符串
          var paramsNameNumber = params.length // 实际标签的个数
          var provideNumber = 7 // 每行能显示的字的个数
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
          /**
           * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
           */
          // 条件等同于rowNumber>1
          if (paramsNameNumber > provideNumber) {
            /** 循环每一行,p表示行 */
            for (var p = 0; p < rowNumber; p++) {
              var tempStr = '' // 表示每一次截取的字符串
              var start = p * provideNumber // 开始截取的位置
              var end = start + provideNumber // 结束截取的位置
              // 此处特殊处理最后一行的索引值
              if (p == rowNumber - 1) {
                // 最后一次不换行
                tempStr = params.substring(start, paramsNameNumber)
              } else {
                // 每一次拼接字符串并换行
                tempStr = params.substring(start, end) + '\n'
              }
              newParamsName += tempStr // 最终拼成的字符串
            }
          } else {
            // 将旧标签的值赋给新标签
            newParamsName = params
          }
          //将最终的字符串返回

          return newParamsName
        },
        textStyle: {
          color: '#8c8c8c', //X轴文字颜色
          fontSize: 12
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.1)', 'rgba(250,250,250,0)']
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        /*name: "亿元",*/
        nameTextStyle: {
          color: '#ebf8ac',
          fontSize: 16
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#26D9FF',
            width: 2
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(250,250,250,0.6)',
            fontSize: 16
          }
        }
      },
      {
        type: 'value',
        /*name: "同比",*/
        nameTextStyle: {
          color: '#ebf8ac',
          fontSize: 16
        },
        position: 'right',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          formatter: '{value} %', //右侧Y轴文字显示
          textStyle: {
            color: 'rgba(250,250,250,0.6)',
            fontSize: 16
          }
        }
      }
    ],
    series: [
      {
        name: '合计',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          normal: {
            color: '#419aee',
            borderWidth: 2
          }
        },
        data: [4, 3, 2, 8, 3, 5]
      },
      {
        name: '蓝牌',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          normal: {
            color: '#2a62bf',
            borderWidth: 2
          }
        },
        data: [3, 2, 3, 5, 4, 3]
      },
      {
        name: '黄牌',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          normal: {
            color: '#eaa13a',
            borderWidth: 2
          }
        },
        data: [3, 2, 3, 5, 4, 3]
      }
    ]
  }
}
