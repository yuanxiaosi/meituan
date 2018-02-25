import * as types from '../constants/index.js'

const store = []


export default function StoreReducer(state = store, action) {
  switch (action.type) {
    case types.FETCH_STORE_SUCCESS:
      state = action.store
      return state
      break
    case types.FETCH_STORE_FAIL:
      return state
      break
    case types.GET_STORE:
      return state
    default:
      return state
  }
}
