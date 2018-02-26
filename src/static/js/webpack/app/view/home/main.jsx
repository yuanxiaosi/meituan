import './main.less';
import React from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as StoreActions from '../../actions/StoreAction.js'

import Navigation from '../navigation/main.jsx'


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lastScrollTop: 0
		}
	}
	componentWillMount() {
		this.props.storeActions.fetchStoreStart()
		let fetchStore = this.props.storeActions.fetchStore()
		fetchStore.then((res)=>{
			if(res.status != 0){
				alert(123)
			}
		})
	}
	componentDidMount() {
		window.onscroll = this.scroll.bind(this)
	}
	
	componentWillUnmount() {
		window.onscroll = '';
	}
	scroll(e){
		let store = this.props.store;
		let bodyHeight = document.documentElement.offsetHeight
		let clientHeight = document.documentElement.clientHeight
		let scrollTop = document.documentElement.scrollTop

		
		if(this.state.lastScrollTop > scrollTop){
			return
		}
		this.setState({
			lastScrollTop: scrollTop
		})

		if(store.isLoading){
			return
		}
		
		
		if(scrollTop + clientHeight >= bodyHeight){
			this.props.storeActions.fetchStoreStart()
			this.props.storeActions.fetchStore()
		}
	}
  render() {
  	let self = this;
  	let store =self.props.store
  	let storeDiv = store.data.map((v, k)=>{
  		let starScoreNum = parseInt(v.wm_poi_score/1)
  		let starScoreHalfNum = v.wm_poi_score%1==0.5?1:0;
  		let starDiv = [];
  		for(let i=0; i<starScoreNum; i++){
  			starDiv.push(
  				<i key={i} className="star_score"></i>
  			)
  		}
  		for(let i=0; i<starScoreHalfNum; i++){
  			starDiv.push(
  				<i key={i+starScoreNum} className="star_score_half"></i>
  			)
  		}
  		return(
  			<li key={k}>
					<div className="lf">
						<img src={v.pic_url} />
					</div>
					<div className="rg">
						<div className="name">{v.name}</div>
						<div className="msg">
							<div className="star">
								{starDiv}
							</div>
							<div className="count">月售{v.month_sale_num}</div>
							<div className="distant">{v.avg_delivery_time}min | {v.distance}</div>
						</div>
						<div className="price">{v.min_price_tip} | {v.shipping_fee_tip}</div>
					</div>
				</li>
  		)
  	})

		return (
		  <div className="home">
		  	<Navigation current={1}/>
				<div className="banner">
					<img src={require('../../../../../img/app/banner.jpg')} />
					<div className="site"></div>
					<div className="search"></div>
				</div>
				<div className="nav">
					<ul className="">
						<li>
							<img src={require('../../../../../img/app/nav1.webp')} />
							<p>美食</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav2.webp')} />
							<p>美团超市</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav3.webp')} />
							<p>生果蔬菜</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav4.webp')} />
							<p>下午茶</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav5.webp')} />
							<p>美团专送</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav6.webp')} />
							<p>正餐优惠</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav7.webp')} />
							<p>快餐小吃</p>
						</li>
						<li>
							<img src={require('../../../../../img/app/nav8.webp')} />
							<p>汉堡披萨</p>
						</li>
					</ul>
				</div>
				<div className="store">
					<div className="title">
						附近商家
					</div>
					<ul>
						{storeDiv}
					</ul>
				</div>

			</div>
		);
  }
};


App.propTypes = {
  store: PropTypes.object.isRequired,
  storeActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  store: state.store
})

const mapDispatchToProps = dispatch => ({
  storeActions: bindActionCreators(StoreActions, dispatch)

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


