import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT ,GET_INDEX} from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [GET_INDEX](state, action){
    return {
      ...state,
      indexList: state.indexList + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})