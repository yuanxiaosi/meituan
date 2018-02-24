import { 
  GET_STORE
} from '../constants/storeType.js'

const store = []

var testStore = [
        {
            "id": 517368461288246,
            "mt_poi_id": 155424316,
            "name": "蜜哆哆炸鸡（深圳总店）",
            "support_coupon": 0,
            "is_favorite": 0,
            "sort_reason_type": 0,
            "sort_reason_tag": "",
            "delivery_type": 0,
            "mt_delivery_time": "45分钟",
            "status": 1,
            "origin_status": 0,
            "status_desc": "",
            "pic_url": "http://p1.meituan.net/xianfu/1ac87394fe83e4a55a1c2cb9784fd0a7283222.jpg",
            "pic_url_square": "",
            "avg_delivery_time": 45,
            "shipping_fee": 4.0,
            "shipping_fee_discount": 0,
            "min_price": 0.0,
            "new_promotion": 0,
            "discounts2": [
            {
                "id": 100,
                "type": 20,
                "info": "实际支付65元返5元商家代金券",
                "icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
                "use_icon_from_server": 1,
                "display_code": 2,
                "sequence": 7
            }],
            "shipping_time_info":
            {
                "in_shipping_time": 1,
                "beg_shipping_time": "",
                "status_content": "",
                "desc_content": "",
                "reservation_status": 0
            },
            "month_sale_num": 1895,
            "wm_poi_score": 4.7,
            "shipping_time_x": "",
            "pre_book": 0,
            "brand_type": 23220,
            "sales": 0,
            "priority": 0,
            "wm_poi_opening_days": 0,
            "buz_type": 0,
            "across_book_offset_days": 0,
            "across_book_max_days": 0,
            "latitude": 0,
            "longitude": 0,
            "primitiveDistance": 1.7976931348623157E308,
            "distance": "1.9km",
            "poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
            "ad_attr": "",
            "shipping_fee_tip": "配送 ¥4",
            "min_price_tip": "起送 ¥0",
            "average_price_tip": "人均 ¥21",
            "recommend_info":
            {
                "icon": "",
                "recommend_reason": ""
            },
            "support_pay": 0,
            "invoice_support": 0,
            "invoice_min_price": 0,
            "charge_info": "",
            "ad_type": 0,
            "wm_poi_view_id": "517368461288246"
        }]

export default function Store(state = store, action) {
  switch (action.type) {
    case GET_STORE:
      return testStore
    default:
      return state
  }
}
