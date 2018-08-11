import { handleActions } from 'redux-actions'
import { GETINDEX } from '../types/indexData'

export default handleActions({
  [GETINDEX](state, action){
    return {
      ...state,
      list: {
        ...action.payload
      }
    }
  }
}, {
  list:{}
})