import * as types from '../constants/index.js'
import appService from '../../../service/app.js'

export const getStore = text => ({ type: types.GET_STORE, text })
export const fetchStore = (data)=>{

  return function (dispatch){
    appService.getStoreList(data).then((res) => {
      if(res.status == 0){
        dispatch({
          type: types.FETCH_STORE_SUCCESS,
          store: res.data
        })
      }else{
        dispatch({
          type: types.CHANGE_SHOWALERT_STATUS,
          showAlert: {
            status: true,
            msg: res.msg
          }
        })
        dispatch({
          type: types.FETCH_STORE_FAIL,
          store: []
        })
      }

      
    })
  }



  
}

