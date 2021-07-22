export function chartOptionPie(XData, data1, data2, data3) {
  // var data1 = [
  //   Math.floor(Math.random() * 100),
  //   Math.floor(Math.random() * 100),
  //   Math.floor(Math.random() * 100)
  // ]
  // var data2 = [
  //   Math.floor(Math.random() * 100),
  //   Math.floor(Math.random() * 100),
  //   Math.floor(Math.random() * 100)
  // ]
  // var data3 = [data1[0] + data2[0], data1[1] + data2[1], data1[2] + data2[2]]

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
      // type: 'category',
      data: XData,
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
    dataZoom: [
      {
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: '8%',
        start: 0,
        end: 0,
        handleIcon:
          'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5'
        },
        textStyle: {
          color: '#fff'
        },
        borderColor: '#90979c'
      },
      {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 3
      }
    ],
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
        // data: [4, 3, 2]
        data: data3
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
        // data: [3, 2, 3, 5, 4, 3]
        data: data1
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
        // data: [3, 2, 3, 5, 4, 3]
        data: data2
      }
    ]
  }
}
