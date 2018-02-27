import * as types from '../constants/index.js'

const store = []


export default function StoreReducer(state = store, action) {
  switch (action.type) {
    case types.FETCH_STORE_COMPLETE:
      state = state.concat(action.data)
      return state
    default:
      return state
  }
}
