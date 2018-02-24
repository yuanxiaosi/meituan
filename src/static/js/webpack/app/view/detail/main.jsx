import './main.less';
import React from 'react';


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
		  <div className="detail">
				详情
			</div>
		);
  }
};

export default App;
