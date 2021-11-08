const echarts = require('echarts')
export function getAvaChartOption(xData = [], yData = [], yData2 = []) {
  return {
    grid: {
      top: 40,
      containLabel: true,
      bottom: 20,
      left: 20
    },
    // legend: {
    //   align: 'left',
    //   right: '10%',
    //   top: '10%',
    //   type: 'plain',
    //   textStyle: {
    //     color: '#7ec7ff',
    //     fontSize: 16
    //   },
    //   // icon:'rect',
    //   itemGap: 25,
    //   itemWidth: 18,
    //   icon:
    //     'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

    //   data: [
    //     {
    //       name: '真实值'
    //     },
    //     {
    //       name: '预测值'
    //     }
    //   ]
    // },
    tooltip: {
      trigger: 'axis'
      // backgroundColor: 'rgba(13,75,201,0)',
      // borderColor: 'rgba(255,255,255,0)',
      // padding: 0,
      // formatter(params) {
      //   let html = ''
      //   params.forEach(item => {
      //     /* eslint-disable */
      //     html += `<span
      //     style='display:block; width:100px; height:26px; line-height: 23px; background: linear-gradient(to right, #22B3F0 0%,#0D4BC9 100%); color:#fff;fontWeight:500; fontFamily:PingFang Regular; fontSize:16px; border-radius: 13px;padding: 0 9px'>
      //     人次 : ${item.value}
      //     </span>`
      //   })
      //   return html
      // }
      // formatter: '{a0}: {c0}'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          fontSize: 12,
          margin: 20,
          textStyle: {
            color: 'rgba(255,255,255,0.5)'
          }
        },
        axisLine: {
          show: false
          // lineStyle: {
          //     color: '#243753'
          // }，
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#243753'
          }
        },
        axisTick: {
          show: false
        },
        data: xData
      }
    ],
    yAxis: [
      {
        name: '车流量',
        boundaryGap: false,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,0.5)'
          }
        },
        nameTextStyle: {
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
          align: 'right'
          // lineHeight: 40
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#243753',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#283352'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '真实值',
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbolSize: 0,
        zlevel: 3,
        itemStyle: {
          color: '#19a3df',
          borderColor: '#a3c8d8'
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#1E8BFF'
            // color: 'rgba(0,216,255,0.55)'
          }
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
                  color: 'rgba(30,139,255,.9)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(30,139,255,.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(30,139,255,0)'
                }
              ],
              false
            )
          }
        },
        data: yData
      },
      {
        name: '预测值',
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbolSize: 0,
        zlevel: 3,
        itemStyle: {
          color: '#FFF212',
          borderColor: '#FFF212'
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#FFF212'
            // color: 'rgba(0,216,255,0.55)'
          }
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
                  color: 'rgba(255, 242, 18, 0.9)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(255, 242, 18, 0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 242, 18, 0)'
                }
              ],
              false
            )
          }
        },
        data: yData2
      }
    ]
  }
}
