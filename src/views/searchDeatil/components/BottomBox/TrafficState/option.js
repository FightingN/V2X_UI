export function chartOptionPie(dataLine) {
  // var dataLine = [25, 33, 66]
  var myColor = ['#1bbf9f', '#1bbf9f', '#1bbf9f']
  return {
    grid: [
      {
        left: '18%',
        top: '15%',
        right: '10%',
        bottom: '15%'
      }
    ],
    xAxis: [
      {
        show: false
      }
    ],
    yAxis: [
      {
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#73879c',
            fontSize: 12
          }
        },
        data: ['平均车头时距', '车辆平均速度', '大车混入率']
      },
      {
        axisTick: 'none',
        axisLine: 'none',
        show: false,
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        data: [1, 1, 1]
      },
      {
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: []
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        stack: 'b',
        yAxisIndex: 0,
        data: dataLine,
        label: {
          normal: {
            show: false,
            position: 'right',
            distance: 10,
            formatter: function(param) {
              console.log('111', param)
              return param.value + '%'
            },
            textStyle: {
              color: '#2F6781',
              fontSize: 16
            }
          }
        },
        barWidth: 25,
        itemStyle: {
          normal: {
            color: function(params) {
              var num = myColor.length
              return myColor[params.dataIndex]
            }
          }
        },
        z: 2
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100],
        barWidth: 27,
        itemStyle: {
          normal: {
            color: '#eee'
          }
        },
        z: 1,
        label: {
          normal: {
            show: true,
            position: 'right',
            distance: 8,
            formatter: function(data) {
              if (data.dataIndex == 0) {
                return dataLine[data.dataIndex] + 'm'
              } else if (data.dataIndex == 1) {
                return dataLine[data.dataIndex] + 'km/h'
              } else if (data.dataIndex == 2) {
                return dataLine[data.dataIndex] + 's'
              }
            },
            textStyle: {
              color: '#73879c',
              fontSize: 12
            }
          }
        }
      }
    ]
  }
}
