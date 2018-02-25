import { combineReducers } from 'redux'
import store from './storeReducer.js'
import showAlert from './showAlertReducer.js'

const rootReducer = combineReducers({
  store: store,
  showAlert: showAlert,
})

export default rootReducer