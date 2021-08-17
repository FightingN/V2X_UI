import request from '@/utils/request'

export function getCoreData(roadName) {
  return request({
    // url: `v1/traffic/core-data?roadname=${roadName}`,
    url: `v1/v2x/core?roadname=${roadName}`,
    method: 'get'
  })
}

export function getCenterData(roadName) {
  return request({
    // url: `v1/traffic/predict/top2?roadName='${roadName}' `,
    url: `v1/v2x/core/predict?roadName=${roadName} `,
    method: 'get'
  })
}
