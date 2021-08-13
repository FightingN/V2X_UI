export function chartOptionPie(leftXData, leftYData) {
  return {
    grid: {
      left: '3%',
      bottom: '20%',
      top: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#FFF',
      extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)',
      textStyle: {
        color: '#000'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: '90%',
      left: '40%',
      itemWidth: 10,
      itemHeight: 4,
      data: ['费用金额', '订单数量'],
      textStyle: {
        color: '#8c8c8c'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: leftXData,
      show: true,
      axisLabel: {
        // show: true,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: '#8c8c8c'
        }
      },
      axisTick: {
        show: true,
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 5,
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: 'transparent'
        }
      },

      splitLine: {
        show: true,
        lineStyle: {
          color: '#B4B3C0',
          type: 'solid'
        }
      }
    },
    series: [
      {
        backgroundColor: 'rgba(36, 53, 135, 0.298039215686275)',
        name: '交通流量',
        type: 'line',
        smooth: true,
        stack: '交通流量',
        data: leftYData,
        // data: [
        //   7000,
        //   6900,
        //   9500,
        //   14500,
        //   18400,
        //   21500,
        //   25200,
        //   26500,
        //   23300,
        //   18300,
        //   13900,
        //   9600
        // ],
        itemStyle: {
          normal: { color: 'rgba(52,177,95,0.9)' }
        }
      }
    ]
  }
}
export function chartOptionPie2(rightXData, rightYData) {
  return {
    grid: {
      left: '3%',
      bottom: '20%',
      top: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#FFF',
      extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)',
      textStyle: {
        color: '#000'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      top: '90%',
      left: '40%',
      itemWidth: 10,
      itemHeight: 4,
      data: ['费用金额', '订单数量'],
      textStyle: {
        color: '#8c8c8c'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: rightXData,
      show: true,
      axisLabel: {
        // show: true,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: '#8c8c8c'
        }
      },
      axisTick: {
        show: true,
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 5,
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },
      axisLine: {
        lineStyle: {
          color: 'transparent'
        }
      },

      splitLine: {
        show: true,
        lineStyle: {
          color: '#B4B3C0',
          type: 'solid'
        }
      }
    },
    series: [
      {
        backgroundColor: 'rgba(36, 53, 135, 0.298039215686275)',
        name: '交通流量',
        type: 'line',
        smooth: true,
        stack: '交通流量',
        data: rightYData,
        itemStyle: {
          normal: { color: 'rgba(41,138,231,0.9)' }
        }
      }
    ]
  }
}
