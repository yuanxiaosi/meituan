import * as types from '../constants/index.js'
import appService from '../../../service/app.js'

export const getStore = text => ({ type: types.GET_STORE, text })
export const fetchStore = (data)=>{
  return function (dispatch){
    return appService.getStoreList(data).then((res) => {
      dispatch({
        type: types.FETCH_STORE_END,
        result: res
      })
      return res
    })
  }
}

export const fetchStoreStart = (data)=>{
  return { type: types.FETCH_STORE_START }
}

