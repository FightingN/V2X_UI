import request from '@/utils/request'
/****
获取所有路段名称
 */
export function getRoads() {
  return request({
    url: 'v1/traffic/core-data/roads',
    method: 'get'
  })
}
export function getMapData() {
  return request({
    url: 'v1/traffic/map/',
    method: 'get'
  })
}
/****
实时路段交通流量Top
 */
export function getTopRate() {
  return request({
    url: `v1/traffic/core-data/topRate`,
    method: 'get'
  })
}
// 获取路段服务水平评价
export function getService(roadname) {
  return request({
    url: `v1/traffic/service-quality?roadname=${roadname}`,
    method: 'get'
  })
}
// 获取管控措施
export function getServiceTodo(roadName) {
  return request({
    url: `v1/traffic/service-todo?roadName=${roadName}`,
    method: 'get'
  })
}
// 态势预警
export function getSituation() {
  return request({
    url: `v1/traffic/situation-warning`,
    method: 'get'
  })
}
