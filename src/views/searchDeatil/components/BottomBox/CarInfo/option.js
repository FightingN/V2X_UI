export function chartOptionPie(dataLine) {
  // var dataLine = [25, 33, 66]
  var myColor = ['#1bbf9f', '#1bbf9f', '#1bbf9f']
  return {
    grid: [
      {
        left: '25%',
        top: '15%',
        right: '10%',
        bottom: '15%'
      }
    ],
    xAxis: [
      {
        // max: 100,
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
        data: ['V2X车辆平均车速', 'V2X车辆氮氧化物排放', '历史V2X车辆数']
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
                return dataLine[data.dataIndex] + '辆'
              } else if (data.dataIndex == 1) {
                return dataLine[data.dataIndex] + 'g'
              } else if (data.dataIndex == 2) {
                return dataLine[data.dataIndex] + 'km/h'
              }
              // return dataLine[data.dataIndex] + '%'
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
