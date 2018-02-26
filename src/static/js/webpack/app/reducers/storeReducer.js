import * as types from '../constants/index.js'

const store = {
  status: 0,
  msg: "success",
  isLoading: false,
  data: []
}


export default function StoreReducer(state = store, action) {
  switch (action.type) {
    case types.FETCH_STORE_END:
      state = action.result;
      state.isLoading = false;
      return state
    case types.FETCH_STORE_START:
      state.isLoading = true;
      return state
    default:
      return state
  }
}
