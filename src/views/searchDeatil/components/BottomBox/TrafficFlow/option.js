export function chartOptionPie() {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: '40%',
      right: '5%',
      bottom: '0',
      textStyle: {
        //图例文字的样式
        color: '#73879c',
        fontSize: 26
      }
    },
    color: ['#3498db', '#1abb9c', '#419aee'],
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
        data: [
          { value: 44725, name: '黄牌流量' },
          { value: 13800, name: '绿牌流量' },
          { value: 30800, name: '总计' }
        ]
      }
    ]
  }
}
