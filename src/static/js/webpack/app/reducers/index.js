import { combineReducers } from 'redux'
import store from './storeReducer.js'

const rootReducer = combineReducers({
  store: store
})

export default rootReducer