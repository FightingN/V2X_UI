export function chartOptionPie(dataLine) {
  // var dataLine = [25, 33]
  // var dataLine = [
  //   Math.floor(Math.random() * 100),
  //   Math.floor(Math.random() * 100)
  // ]
  var myColor = ['#1960c6', '#bb953a']
  return {
    grid: [
      {
        left: '20%',
        top: '10%',
        right: '15%',
        bottom: '10%'
      }
    ],
    xAxis: [
      {
        max: 100,
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
        data: ['大车混入率', '平均车速']
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
        data: [1, 1]
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
        barWidth: 15,
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
        data: [100, 200],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: '#2e4364'
          }
        },
        z: 1,
        label: {
          normal: {
            show: true,
            position: 'right',
            distance: 10,
            formatter: function(data) {
              if (data.dataIndex == 0) {
                return dataLine[data.dataIndex] + '%'
              } else if (data.dataIndex == 1) {
                return dataLine[data.dataIndex] + 'km/h'
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
