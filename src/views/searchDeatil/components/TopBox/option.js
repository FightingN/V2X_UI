export function chartOptionPie() {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '0%',
      right: '3%',
      left: '5%',
      bottom: '12%'
    },
    xAxis: [
      {
        type: 'category',
        show: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)'
          }
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 14
          }
        }
      }
    ],
    yAxis: [
      {
        show: false,
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}',
          color: '#e2e9ff'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#233e64'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156],
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#26b99a' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#26b99a' // 100% 处的颜色
                }
              ],
              false
            ),
            shadowColor: '#26b99a',
            shadowBlur: 4
          }
        }
      }
    ]
  }
}
export function chartOptionPie2() {
  return {
    // backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'red'
              },
              {
                offset: 0.5,
                color: '#48b3FF'
              },
              {
                offset: 1,
                color: '#d9efff'
              }
            ],
            global: false
          }
        }
      }
    },
    grid: {
      top: '5%',
      left: '5%',
      right: '3%',
      bottom: '8%'
      // containLabel: true
    },
    xAxis: [
      {
        show: false,
        type: 'category',
        color: '#59588D',
        axisLine: {
          show: true
        },
        axisLabel: {
          color: '#282828'
        },
        splitLine: {
          // show: true
        },

        axisTick: {
          show: false
        },
        // boundaryGap: true,
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      }
    ],

    yAxis: [
      {
        show: false,
        type: 'value',
        min: 0,
        splitNumber: 4,
        splitLine: {
          show: true
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          // margin: 20,
          textStyle: {
            color: '#737373'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(131,101,101,0.2)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        // smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: '#26b99a'
          }
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#26b99a'
          }
        },

        itemStyle: {
          color: '#FFF',
          borderColor: '#26b99a',
          borderWidth: 1
        },
        tooltip: {
          show: true
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(195,230,255,1)'
                },
                {
                  offset: 1,
                  color: 'rgba(195,230,255,0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(195,230,255,0.1)',
            shadowBlur: 20
          }
        },
        data: [55, 35, 62, 55, 97, 64, 44, 66, 78, 82, 33, 77]
      }
    ]
  }
}
