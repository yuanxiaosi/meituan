import './main.less';
import React from 'react';

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as StoreActions from '../../actions/StoreAction.js'


class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	componentWillMount() {
		
		this.props.storeActions.fetchStore({"test":123})
	}
	componentDidMount() {
		
		

	}
  render() {
  	let self = this;
  	let store =self.props.store
  	console.log(store)

		return (
		  <div className="home">
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
						<li>
							<div className="lf">
								<img src={require('../../../../../img/app/banner.jpg')} />
							</div>
							<div className="rg">
								<div>以太唱现炒快餐（学府店）</div>
								<div>以太唱现炒快餐（学府店）</div>
								<div>起送价￥20 | 配送￥3.9</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
  }
};


App.propTypes = {
  store: PropTypes.array.isRequired,
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


