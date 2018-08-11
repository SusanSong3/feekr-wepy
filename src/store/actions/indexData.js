import { GETINDEX } from '../types/indexData'
import { createAction } from 'redux-actions'
import wepy from 'wepy'


export const getIndexInfo = createAction(GETINDEX,async () => {
  return await wepy.request({
    url:'https://wapi.feekr.com/shop/home/index?shopid=FK'
  }).then((result) => {
    return result.data.result
  })
})