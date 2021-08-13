import request from '@/utils/request'

export function getCoreData(roadName) {
  return request({
    url: `v1/traffic/core-data?roadname=${roadName}`,
    method: 'get'
  })
}

export function getCenterData(roadName) {
  return request({
    url: `v1/traffic/predict/top2?roadName='${roadName}' `,
    method: 'get'
  })
}
