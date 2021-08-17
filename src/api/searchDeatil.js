import request from '@/utils/request'
/****
获取所有路段名称-----二级页面的所有指标
 */
export function getEchartsData(roadname) {
  return request({
    // url: `v1/traffic/core-data/all?roadname=${roadname}`,
    url: `v1/v2x/core/all?roadname=${roadname}`,
    method: 'get'
  })
}
// 废弃
export function getTimeData({ roadname, startTimeStamp, endTimeStamp }) {
  return request({
    // url: `v1/traffic/core-data/all?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    url: `v1/v2x/core/day?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    method: 'get'
  })
}
// 按照每天查询
export function getDayData({ roadname, day }) {
  return request({
    // url: `v1/traffic/core-data/all?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    url: `v1/v2x/core/day?roadname=${roadname}&day=${day}`,
    method: 'get'
  })
}
// 导出
export function getExportExcel({ roadname, startTimeStamp, endTimeStamp }) {
  return request({
    // url: `v1/core/export?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}&skip=true`,
    // url: `v1/core/export?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    url: `v1/v2x/core/export?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    method: 'get',
    responseType: 'blob'
  })
}
