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
