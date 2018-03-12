import './main.less';
import React from 'react';

import Navigation from '../navigation/main.jsx'

import {Alert} from '../alert/main.jsx'

class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	    val: 1
	  };
	}
	componentWillMount() {
		
	}
	componentDidMount() {
		
	}
  render() {
  	var self = this;


		return (
		  <div className="order">
				<div>订单页面</div>
				<Alert />
				<Navigation current={2} />
			</div>
		);
  }
};

export default App;
