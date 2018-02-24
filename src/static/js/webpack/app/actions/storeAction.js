import * as types from '../constants/storeType.js'

export const getStore = text => ({ type: types.GET_STORE, text })
