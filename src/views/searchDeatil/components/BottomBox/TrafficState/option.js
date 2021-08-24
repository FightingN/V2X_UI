export function chartOptionPie(data) {
  // let  = [20, 90, 90]
  let dataLine = []
  data.forEach((item, index) => {
    if (index == 0) {
      dataLine.push({
        name: '平均车头时距',
        value: item
      })
    } else if (index == 1) {
      dataLine.push({
        name: '车辆平均速度',
        value: 927
      })
    } else if (index == 2) {
      dataLine.push({
        name: '大车混入率',
        value: 1260
      })
    }
  })
  // var dataLine = [25, 33, 66]
  // var myColor = ['#1bbf9f', '#1bbf9f', '#1bbf9f']
  // return {
  //   grid: [
  //     {
  //       left: '18%',
  //       top: '15%',
  //       right: '10%',
  //       bottom: '15%'
  //     }
  //   ],
  //   xAxis: [
  //     {
  //       show: false
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       axisTick: {
  //         show: false
  //       },
  //       axisLine: {
  //         show: false
  //       },
  //       axisLabel: {
  //         textStyle: {
  //           color: '#73879c',
  //           fontSize: 12
  //         }
  //       },
  //       data: ['平均车头时距', '车辆平均速度', '大车混入率']
  //     },
  //     {
  //       axisTick: 'none',
  //       axisLine: 'none',
  //       show: false,
  //       axisLabel: {
  //         textStyle: {
  //           color: '#fff',
  //           fontSize: 16
  //         }
  //       },
  //       data: [1, 1, 1]
  //     },
  //     {
  //       axisLine: {
  //         lineStyle: {
  //           color: 'rgba(0,0,0,0)'
  //         }
  //       },
  //       data: []
  //     }
  //   ],
  //   series: [
  //     {
  //       name: '条',
  //       type: 'bar',
  //       stack: 'b',
  //       yAxisIndex: 0,
  //       data: dataLine,
  //       label: {
  //         normal: {
  //           show: false,
  //           position: 'right',
  //           distance: 10,
  //           formatter: function(param) {
  //             console.log('111', param)
  //             return param.value + '%'
  //           },
  //           textStyle: {
  //             color: '#2F6781',
  //             fontSize: 16
  //           }
  //         }
  //       },
  //       barWidth: 25,
  //       itemStyle: {
  //         normal: {
  //           color: function(params) {
  //             var num = myColor.length
  //             return myColor[params.dataIndex]
  //           }
  //         }
  //       },
  //       z: 2
  //     },
  //     {
  //       name: '框',
  //       type: 'bar',
  //       yAxisIndex: 1,
  //       barGap: '-100%',
  //       data: [100, 100, 100],
  //       barWidth: 27,
  //       itemStyle: {
  //         normal: {
  //           color: '#eee'
  //         }
  //       },
  //       z: 1,
  //       label: {
  //         normal: {
  //           show: true,
  //           position: 'right',
  //           distance: 8,
  //           formatter: function(data) {
  //             if (data.dataIndex == 0) {
  //               return dataLine[data.dataIndex] + 'm'
  //             } else if (data.dataIndex == 1) {
  //               return dataLine[data.dataIndex] + 'km/h'
  //             } else if (data.dataIndex == 2) {
  //               return dataLine[data.dataIndex] + '%'
  //             }
  //           },
  //           textStyle: {
  //             color: '#73879c',
  //             fontSize: 12
  //           }
  //         }
  //       }
  //     }
  //   ]
  // }
  const getArrByKey = (data, k) => {
    const key = k || 'value'
    const res = []
    if (data) {
      data.forEach(function(t) {
        res.push(t[key])
      })
    }
    return res // ["桂林", "柳州", "北海", "防城巷", "百色"]
  }
  return {
    grid: {
      top: '2%',
      bottom: -15,
      right: 24,
      left: 15,
      containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(dataLine, 'name'),
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          interval: 0,
          color: '#73879c',
          align: 'right',
          margin: 70,
          formatter: function(value) {
            return '{title|' + value + '}'
          },
          rich: {
            title: {
              width: 50,
              align: 'left',
              fontSize: 18,
              fontFamily: 'PingFang Regular'
            }
          }
        }
      },
      {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(dataLine, 'name'),
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          shadowOffsetX: '-20px',
          color: '#73879c',
          align: 'left',
          verticalAlign: 'center',
          lineHeight: 40,
          fontSize: 20,
          margin: 25,
          formatter: function(value, index) {
            if (index == 0) {
              return dataLine[index].value + 'm'
            } else if (index == 1) {
              return dataLine[index].value + 'km/h'
            } else if (index == 2) {
              return dataLine[index].value + '%'
            }
            return dataLine[index].value
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        showBackground: true,
        // barBorderRadius: 30,
        yAxisIndex: 0,
        data: dataLine,
        barWidth: 27,
        // align: left,
        itemStyle: {
          normal: {
            color: '#1bbf9f',
            barBorderRadius: 5
          }
        },
        backgroundStyle: {
          color: '#eee'
        }
      }
    ]
  }
}
