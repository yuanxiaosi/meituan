import * as types from '../constants/index.js'

const showAlert = {
  status: false,
  msg: "hello"
}


export default function StoreReducer(state = showAlert, action) {
  switch (action.type) {
    case types.CHANGE_SHOWALERT_STATUS:
      state = action.showAlert
      return state
      break
    default:
      return state
  }
}
