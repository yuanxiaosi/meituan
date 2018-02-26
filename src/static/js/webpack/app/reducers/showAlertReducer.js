import * as types from '../constants/index.js'

const showAlert = {
  status: false,
  msg: "欢迎使用美团外卖哦，亲！"
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
