import './main.less';
import React from 'react';

import Navigation from '../navigation/main.jsx'

class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	    
	  };
	}
	componentWillMount() {
		
	}
	componentDidMount() {

	}
  render() {
  	var me = this;
		return (
		  <div className="order">
		  	<Navigation current={2} />
				订单页面
			</div>
		);
  }
};

export default App;
