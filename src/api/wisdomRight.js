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
