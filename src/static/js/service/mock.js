XMLHttpRequest = function(){
  var me = this;
  this.readyState = 4
  this.status = 200
  this.readyState= 4
  this.status= 200
  this.responseText= '{"status":"0","msg":"success","data":""}'
  this.response= '{"status":"0","msg":"success","data":""}' 

  this.open = function(method, url, status){
    check(url, me)
  }
  this.onreadystatechange = function(){}
  this.send = function(data){}

  setTimeout(function(){
    me.onreadystatechange()
  }, 500)
  
}


function check(url, me){
  var url = url.split("?")[0]
  //console.log(url)
  switch(url){

    //微信jsdk配置
    case "/api/wxjsdk/getConfig":   
      var obj = {"status":"0","msg":"success","data":{"appId":"wxbfc338199656d85b","debug":"false","nonceStr":"01e9kiarmszbynxujilw","signature":"4a35ec9c2a27dd28b113989b26fc0e7a71ab37b7","timestamp":"1498468870"}}
      me.responseText = me.response = JSON.stringify(obj)
      break;

  }
}