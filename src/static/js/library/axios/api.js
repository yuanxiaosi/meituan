import axios from 'axios';
import np from 'nprogress';

var mask = {
  show: function(){
    np.start();
    if(document.getElementById("mask")){ //防止多次重复提交
      document.getElementById("mask").style.display = "block";
    }
    
  },
  hide: function(){
    np.done()
    if(document.getElementById("mask")){ //防止多次重复提交
      document.getElementById("mask").style.display = "none";
    }
  }
}


let api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30 * 1000,
  transformRequest: [(data) => {
    //加载显示
  	mask.show()

    if (!data) {
      return '';
    }
    return JSON.stringify(data);
  }],
  transformResponse: [(data) => {
  	//加载隐藏
    mask.hide()
    return JSON.parse(data);
  }]
});

api.interceptors.request.use( (config) => {
    let now = new Date().getTime();
    let params = config.url.split('?')[1]; 
    if(!params){
      config.url = config.url + "?_=" + now;
    }else{
      config.url = config.url + "&_=" + now;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use( (response) => {
    if (!response.data) {
      return Promise.reject('服务器返回数据异常!');
    }
    return response.data;
  }, (error) => {
    //加载隐藏
    mask.hide()
    alert('系统开小差了,请重试!');
    return Promise.reject(error);
  }
);

export default api;
