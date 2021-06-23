import request from '@/utils/request'
/****
获取所有路段名称
 */
export function getEchartsData(roadname) {
  return request({
    url: `v1/traffic/core-data/all?roadname=${roadname}`,
    method: 'get'
  })
}
export function getTimeData({ roadname, startTimeStamp, endTimeStamp }) {
  return request({
    url: `v1/traffic/core-data/all?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    method: 'get'
  })
}
// 导出
export function getExportExcel({ roadname, startTimeStamp, endTimeStamp }) {
  return request({
    url: `v1/core/export?roadname=${roadname}&startTimeStamp=${startTimeStamp}&endTimeStamp=${endTimeStamp}`,
    method: 'get',
    responseType: 'blob'
  })
}
