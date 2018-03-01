XMLHttpRequest = function(){
  var me = this;
  this.readyState = 4
  this.status = 200
  this.readyState= 4
  this.status= 200
  this.responseText= '{"status":"0","msg":"success","data":""}'
  this.response= '{"status":"0","msg":"success","data":""}' 

  this.open = function(method, url, status){
    this.method = method
    this.url = url
    
  }
  this.send = function(data){
    this.data = {}
    if(this.method == "POST"){
      this.data = data
    }else if(this.method == "GET"){
      var dataUrl = this.url.split('?')[1]
      var dataArr = dataUrl.split('&')
      dataArr.map((v, k)=>{
        this.data[v.split('=')[0]] = v.split('=')[1]
      })
    }
    
    check(this.url, this)
  }
  this.onreadystatechange = function(){}
  

  setTimeout(function(){
    me.onreadystatechange()
  }, 200)
  
}


function check(url, me){
  //console.log(url)
  var url = url.split("?")[0]
  switch(url){

    //微信jsdk配置
    case "/api/store":   
      var data = [{"id":436034665745365,"mt_poi_id":50671088,"name":"义泰昌现炒快餐（学府店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"45分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/bacd2174b91b38736409f258c0cc6ffc83787.jpeg","pic_url_square":"","avg_delivery_time":45,"shipping_fee":3.9,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":6697,"wm_poi_score":4.5,"shipping_time_x":"","pre_book":0,"brand_type":13594,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"2.0km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥3.9","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥22","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"436034665745365"},{"id":510230225796631,"mt_poi_id":85723,"name":"缪氏川菜（南山店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"49分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/612ad3107c007e9958cbe08fb0e21f1444743.jpg","pic_url_square":"","avg_delivery_time":49,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":3519,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":11227,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"897m","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥26","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"510230225796631"},{"id":421792554204398,"mt_poi_id":1564149,"name":"乐凯撒比萨(常兴路国兴大厦店)","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"36分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/83f5fa588ae12840f2d68e72d1cfc40b46851.jpg","pic_url_square":"","avg_delivery_time":36,"shipping_fee":9.0,"shipping_fee_discount":0,"min_price":0.0,"new_promotion":0,"discounts2":[{"id":-2,"type":11,"info":"本店支持开发票，开票金额30元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":2287,"wm_poi_score":4.9,"shipping_time_x":"","pre_book":0,"brand_type":1015,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.6km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥9","min_price_tip":"起送 ¥0","average_price_tip":"人均 ¥34","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"421792554204398"},{"id":372877171657910,"mt_poi_id":91600618,"name":"茶点鲜（第八分店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"49分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/4bd3295e4ed3c27795d4c2cdb702ad1c117749.jpg","pic_url_square":"","avg_delivery_time":49,"shipping_fee":2.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":941,"wm_poi_score":4.0,"shipping_time_x":"","pre_book":0,"brand_type":100006035,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"2.0km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥2","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥27","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"372877171657910"},{"id":308495611878720,"mt_poi_id":76123323,"name":"绿茶餐厅（深圳欢乐颂店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"54分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/3c29d8f35d12d05d1a756fb0c5931ba128688.jpeg","pic_url_square":"","avg_delivery_time":54,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":4635,"wm_poi_score":4.5,"shipping_time_x":"","pre_book":0,"brand_type":300,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥24","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"308495611878720"},{"id":525073632778282,"mt_poi_id":152407600,"name":"我呀便当（深圳学府店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"53分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/6d8e83abc4123faad29bba2f231e869465673.jpg","pic_url_square":"","avg_delivery_time":53,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":10.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":849,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":29080,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.6km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥10","average_price_tip":"人均 ¥18","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"525073632778282"},{"id":313533608521787,"mt_poi_id":75284811,"name":"西贝莜面村（深圳南山欢乐颂店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"42分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/ea0840f3ccd22dbfbacf6e286136a43015287.jpeg","pic_url_square":"","avg_delivery_time":42,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额0元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":3012,"wm_poi_score":4.8,"shipping_time_x":"","pre_book":0,"brand_type":291,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥24","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"313533608521787"},{"id":330962585783818,"mt_poi_id":165510547,"name":"琼浆•吞云馆宅配送（南山店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"43分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/wmproduct/94f3182a6fc1769804c307fa6588a55a158179.jpg","pic_url_square":"","avg_delivery_time":43,"shipping_fee":2.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":126,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":0,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.4km","poi_type_icon":"","ad_attr":"","shipping_fee_tip":"配送 ¥2","min_price_tip":"起送 ¥20","average_price_tip":"","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"330962585783818"},{"id":342172450457103,"mt_poi_id":599565,"name":"必胜客宅急送（麒麟餐厅）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"40分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/d4abcf9825a8c77b7374151a1f58aa0f21515.jpg","pic_url_square":"","avg_delivery_time":40,"shipping_fee":9.0,"shipping_fee_discount":0,"min_price":0.0,"new_promotion":0,"discounts2":[{"id":-2,"type":11,"info":"本店支持开发票，开票金额0元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":801,"wm_poi_score":4.9,"shipping_time_x":"","pre_book":0,"brand_type":438,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥9","min_price_tip":"起送 ¥0","average_price_tip":"人均 ¥40","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"342172450457103"},{"id":364914302303878,"mt_poi_id":40773018,"name":"九毛九山西手工面（欢乐颂店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"45分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/e4437a3c18e48106b88a19ccb544cc1f35460.jpg","pic_url_square":"","avg_delivery_time":45,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额0元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":2067,"wm_poi_score":4.8,"shipping_time_x":"","pre_book":0,"brand_type":9389,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥28","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"364914302303878"},{"id":486401747247227,"mt_poi_id":90047055,"name":"吉野家(欢乐颂店)","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"39分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/6ee69625d42187f8ae3f345396a0300d6581.jpeg","pic_url_square":"","avg_delivery_time":39,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额0元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":3075,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":292,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥27","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"486401747247227"},{"id":400626955340288,"mt_poi_id":86498293,"name":"乐凯撒比萨（欢乐颂购物中心店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"44分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/83f5fa588ae12840f2d68e72d1cfc40b46851.jpg","pic_url_square":"","avg_delivery_time":44,"shipping_fee":9.0,"shipping_fee_discount":0,"min_price":0.0,"new_promotion":0,"discounts2":[{"id":-2,"type":11,"info":"本店支持开发票，开票金额30元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":1149,"wm_poi_score":4.7,"shipping_time_x":"","pre_book":0,"brand_type":1015,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.6km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥9","min_price_tip":"起送 ¥0","average_price_tip":"人均 ¥36","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"400626955340288"},{"id":443662527667059,"mt_poi_id":42710219,"name":"同仁四季煲仔饭（南山店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"35分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/ad2b0551a741517f3f6b2f7654cde59e108488.png","pic_url_square":"","avg_delivery_time":35,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":2243,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":100004062,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.3km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥27","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"443662527667059"},{"id":493574342612160,"mt_poi_id":592673,"name":"真功夫（学府店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"41分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/c2743f55460403aca355d81af7b1b82d39965.jpg","pic_url_square":"","avg_delivery_time":41,"shipping_fee":6.0,"shipping_fee_discount":0,"min_price":5.0,"new_promotion":0,"discounts2":[{"id":-2,"type":11,"info":"本店支持开发票，开票金额0元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":1551,"wm_poi_score":4.1,"shipping_time_x":"","pre_book":0,"brand_type":228,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.2km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥6","min_price_tip":"起送 ¥5","average_price_tip":"人均 ¥27","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"493574342612160"},{"id":338633397410643,"mt_poi_id":164838101,"name":"尊宝比萨（常兴路店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"38分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/cbae5363b9d3bb06a9bac286d334b16674730.jpg","pic_url_square":"","avg_delivery_time":38,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":30.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":639,"wm_poi_score":4.7,"shipping_time_x":"","pre_book":0,"brand_type":729,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.3km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥30","average_price_tip":"人均 ¥26","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"338633397410643"},{"id":307108337450039,"mt_poi_id":60833,"name":"拾味馆(欢乐颂店)","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"44分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/883bf14b5b23ee6c90719e6ed8ffc0fb7350.jpeg","pic_url_square":"","avg_delivery_time":44,"shipping_fee":5.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":103,"type":24,"info":"有机会领取商家代金券","icon_url":"http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png","use_icon_from_server":1,"display_code":2,"sequence":6},{"id":100,"type":20,"info":"实际支付68元返4元商家代金券","icon_url":"http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png","use_icon_from_server":1,"display_code":2,"sequence":7},{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额10元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":637,"wm_poi_score":4.5,"shipping_time_x":"","pre_book":0,"brand_type":1480,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥5","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥25","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"307108337450039"},{"id":447107091461195,"mt_poi_id":611147,"name":"面点王(前海分店)","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"37分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/fe29bd2fabed67b26305edbebb40627a14922.jpeg","pic_url_square":"","avg_delivery_time":37,"shipping_fee":6.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额50元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":1146,"wm_poi_score":4.8,"shipping_time_x":"","pre_book":0,"brand_type":9983,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"2.2km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥6","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥27","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"447107091461195"},{"id":335343452462440,"mt_poi_id":152670618,"name":"鲜汁道龙虾盖饭（学府店）","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":0,"mt_delivery_time":"40分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p1.meituan.net/xianfu/c9df582d5dbe16daef0bdf924c51a9b116607.jpg","pic_url_square":"","avg_delivery_time":40,"shipping_fee":3.0,"shipping_fee_discount":0,"min_price":0.0,"new_promotion":0,"discounts2":[],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":1354,"wm_poi_score":4.5,"shipping_time_x":"","pre_book":0,"brand_type":30804,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png","ad_attr":"","shipping_fee_tip":"配送 ¥3","min_price_tip":"起送 ¥0","average_price_tip":"人均 ¥21","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"335343452462440"},{"id":386307534407900,"mt_poi_id":122920847,"name":"山海游冒菜","support_coupon":0,"is_favorite":0,"sort_reason_type":0,"sort_reason_tag":"","delivery_type":1,"mt_delivery_time":"36分钟","status":1,"origin_status":0,"status_desc":"","pic_url":"http://p0.meituan.net/xianfu/680f0715c400a0e6f435bf9e62ff8efc251589.png","pic_url_square":"","avg_delivery_time":36,"shipping_fee":3.0,"shipping_fee_discount":0,"min_price":20.0,"new_promotion":0,"discounts2":[{"id":103,"type":24,"info":"有机会领取商家代金券","icon_url":"http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png","use_icon_from_server":1,"display_code":2,"sequence":6},{"id":100,"type":20,"info":"实际支付22元返2元商家代金券","icon_url":"http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png","use_icon_from_server":1,"display_code":2,"sequence":7},{"id":-3,"type":99,"info":"由美团专送提供高品质送餐服务","icon_url":"http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png","use_icon_from_server":1,"display_code":1,"sequence":49},{"id":-2,"type":11,"info":"本店支持开发票，开票金额30元起","icon_url":"http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png","use_icon_from_server":1,"display_code":2,"sequence":52}],"shipping_time_info":{"in_shipping_time":1,"beg_shipping_time":"","status_content":"","desc_content":"","reservation_status":0},"month_sale_num":1883,"wm_poi_score":4.6,"shipping_time_x":"","pre_book":0,"brand_type":0,"sales":0,"priority":0,"wm_poi_opening_days":0,"buz_type":0,"across_book_offset_days":0,"across_book_max_days":0,"latitude":0,"longitude":0,"primitiveDistance":1.7976931348623157E308,"distance":"1.5km","poi_type_icon":"","ad_attr":"","shipping_fee_tip":"配送 ¥3","min_price_tip":"起送 ¥20","average_price_tip":"人均 ¥30","recommend_info":{"icon":"","recommend_reason":""},"support_pay":0,"invoice_support":0,"invoice_min_price":0,"charge_info":"","ad_type":0,"wm_poi_view_id":"386307534407900"}]
      

      var newData = data.slice((me.data.page-1)*me.data.pageSize, me.data.page*me.data.pageSize)
      var obj =  {"status":"0","msg":"success","data":newData}
      

      me.responseText = me.response = JSON.stringify(obj)
      break;

  }
}