import api from "../library/axios/api";
import './mock.js'

// 根据你的接口封装以下服务
let App = {

  getStoreList: (data) => {
    return api.get('/api/store', {params: data});
  },
  putChargeOrderRemarks: (id, data) => {
    return api.put(`/api/chargeOrder/${id}`, data);
  },
  topRank: (data) => {
    return api.post("/api/manage/toprank", data)
  }

};

export default App;