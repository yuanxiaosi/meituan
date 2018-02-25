import * as types from '../constants/index.js'


export const changeShowAlertStatus = (showAlert) => {
  return { 
    type: types.CHANGE_SHOWALERT_STATUS,
    showAlert: showAlert,
  }
}


