export function chartOptionPie(flowData) {
  var legend = ['黄牌流量', '蓝牌流量', '总计']
  return {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   orient: 'vertical',
    //   top: '40%',
    //   right: '5%',
    //   bottom: '0',
    //   textStyle: {
    //     //图例文字的样式
    //     color: '#73879c',
    //     fontSize: 26
    //   },
    // },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 20,
      textStyle: {
        align: 'left',
        verticalAlign: 'middle',
        rich: {
          name: {
            color: '#73879c',
            fontSize: 26
          },
          value: {
            color: '#73879c',
            fontSize: 26
          },
          rate: {
            color: '#73879c',
            fontSize: 26
          }
        }
      },
      data: legend,
      formatter: name => {
        if (flowData.length) {
          const item = flowData.filter(item => item.name === name)[0]
          console.log('item', item)
          // return `{name|${name}：}{value| ${item.value}} {rate| ${item.value}%}`
          return `{name|${name}: }{value| ${item.value}} `
        }
      }
    },
    color: ['#f8d607', '#2b62bf', '#419aee'],
    series: [
      {
        name: '交通流量',
        type: 'pie',
        radius: ['40%', '75%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: flowData
        // data: [
        //   { value: 44725, name: '黄牌流量' },
        //   { value: 13800, name: '绿牌流量' },
        //   { value: 30800, name: '总计' }
        // ]
      }
    ]
  }
}
