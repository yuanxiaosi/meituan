import * as types from '../constants/index.js'
import appService from '../../../service/app.js'

export const getStore = text => ({ type: types.GET_STORE, text })
export const fetchStore = (params)=>{
  return function (dispatch){
    return appService.getStoreList(params).then((res) => {
      if(res.status == 0){
        dispatch({
          type: types.FETCH_STORE_COMPLETE,
          data: res.data
        })
      }
      return res
    })
  }
}

