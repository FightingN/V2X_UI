export function chartOptionPie() {
  return {
    color: ['#419aee', '#2a62bf', '#eaa13a'],
    legend: {
      top: '90%',
      left: '30%',
      itemWidth: 30,
      itemHeight: 20,
      data: ['合计', '蓝牌', '黄牌'],
      textStyle: {
        color: '#fff',
        fontSize: 20
      }
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '0%',
      top: '5%',
      containLabel: true
    },
    xAxis: {
      show: false,
      type: 'value',
      axisLabel: {
        // show: true,
        textStyle: {
          color: '#fff',
          fontSize: 20
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 30
        }
      },
      data: ['', '', '']
    },
    series: [
      {
        name: '合计',
        type: 'bar',
        stack: 'Tik Tok',
        barWidth: 25,
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 1,
          shadowOffsetY: 1,
          shadowOffsetX: 0,
          emphasis: {
            borderWidth: '10',
            borderColor: '#de0b1a',
            color: '#fff',
            opacity: 1,
            shadowColor: '#de0b1a',
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0
          }
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}',
            textStyle: {
              align: 'center',
              baseline: 'middle',
              fontSize: 28,
              fontWeight: '400',
              color: '#fff'
            }
          }
        },
        data: [29, 19, 26, 44, 20, 21, 32, 34]
      },
      {
        name: '蓝牌',
        type: 'bar',
        stack: 'Tik Tok',
        barWidth: 25,
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 1,
          shadowOffsetY: 1,
          shadowOffsetX: 0,
          emphasis: {
            borderWidth: '10',
            borderColor: '#d6d6d6',
            color: '#d6d6d6',
            opacity: 1,
            shadowColor: '#d6d6d6',
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0
          }
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}',
            textStyle: {
              align: 'center',
              baseline: 'middle',
              fontSize: 24,
              fontWeight: '400',
              color: '#fff'
            }
          }
        },
        data: [38, 36, 44, 33, 21, 32, 41, 45]
      },
      {
        name: '黄牌',
        type: 'bar',
        stack: 'Tik Tok',
        barWidth: 25,
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 1,
          shadowOffsetY: 1,
          shadowOffsetX: 0,
          emphasis: {
            borderWidth: '10',
            borderColor: '#00c1c1',
            color: '#00c1c1',
            opacity: 1,
            shadowColor: '#00c1c1',
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0
          }
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}',
            textStyle: {
              align: 'center',
              baseline: 'middle',
              fontSize: 28,
              fontWeight: '400',
              color: '#fff'
            }
          }
        },
        data: [33, 45, 30, 23, 59, 47, 27, 21]
      }
    ]
  }
}
