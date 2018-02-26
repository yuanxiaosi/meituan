import './main.less';
import React from 'react';

import Navigation from '../navigation/main.jsx'

class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	    color: props.initialColor
	  };
	}
	componentWillMount() {
		
	}
	componentDidMount() {

	}
  render() {
  	var me = this;
		return (
		  <div className="personal">
		  	<Navigation current={3} />
				个人中心
			</div>
		);
  }
};

export default App;
