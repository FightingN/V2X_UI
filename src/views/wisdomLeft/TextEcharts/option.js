export function chartOptionPie() {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: '20%',
      right: '5%',
      bottom: '0',
      textStyle: {
        //图例文字的样式
        color: '#fff',
        fontSize: 36
      }
    },
    color: ['#2b62bf', '#b5954a', '#419aee'],
    series: [
      {
        name: '交通流量',
        type: 'pie',
        radius: ['40%', '75%'],
        center: ['30%', '40%'],
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
