import request from '@/utils/request'
/****
 * @param categoryId 页数
 * @param newsCount 页数
 * @param deptId 页数
 */
export function test(params) {
  return request({
    url: 'api/tv/tvnews/getTvNewsList',
    method: 'get',
    data: params
  })
}
