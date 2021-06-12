export function chartOptionPie(oxideXdata, carNum) {
  return {
    tooltip: {
      trigger: 'axis'
      //				        trigger: 'yAxis',
    },
    color: ['#01a67a'],
    grid: {
      left: '2%',
      right: '2%',
      top: '10%',
      bottom: '13%',
      containLabel: true
    },
    xAxis: [
      {
        show: true,
        type: 'category',
        splitLine: {
          show: false
        },
        data: oxideXdata,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        boundaryGap: true
      }
    ],
    yAxis: [
      {
        name: '辆',
        type: 'value',
        splitLine: {
          show: true
        },
        min: 0,
        axisLabel: {
          color: '#999'
        },
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999'
          }
        }
      }
    ],
    series: [
      {
        name: '车流量',
        type: 'line',
        symbolSize: 8,
        lineStyle: {
          normal: {
            width: 2,
            shadowOffsetY: 4,
            shadowBlur: 4,
            shadowColor: 'rgba(0,0,0,.08)'
          }
        },
        smooth: true,
        data: carNum
      }
    ]
  }
}
