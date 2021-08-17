export function chartOptionPie(data) {
  // var data = [
  // { value: 44725, name: '黄牌流量' },
  // { value: 13800, name: '绿牌流量' },
  // { value: 30800, name: '总计' }
  // ]
  var legend = ['黄牌流量', '蓝牌流量', '总计']
  return {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   orient: 'vertical',
    //   top: '20%',
    //   right: '5%',
    //   bottom: '0',
    //   textStyle: {
    //     //图例文字的样式
    //     color: '#fff',
    //     fontSize: 16
    //   }
    // },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 10,
      textStyle: {
        align: 'left',
        verticalAlign: 'middle',
        rich: {
          name: {
            color: '#fff',
            fontSize: 16
          },
          value: {
            color: '#fff',
            fontSize: 16
          },
          rate: {
            color: '#fff',
            fontSize: 16
          }
        }
      },
      data: legend,
      formatter: name => {
        if (data.length) {
          const item = data.filter(item => item.name === name)[0]
          // console.log('item', item)
          // return `{name|${name}：}{value| ${item.value}} {rate| ${item.value}%}`
          return `{name|${name}: }{value| ${item.value}} `
        }
      }
    },
    color: ['#f5d304', '#2b62bf', '#419aee'],
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
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data
      }
    ]
  }
}
