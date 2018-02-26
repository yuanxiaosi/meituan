import './main.less';
import React from 'react';


class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	    current: this.props.current,
	  };
	}
	componentWillMount() {
	}
	componentDidMount() {

	}
	changeCurrent(v) {
    if(v == this.state.current){
      return
    }
    if(v == 1){
    	window.location.href = '#/'
    }else if(v == 2){
			window.location.href = '#/order'
    }else if(v == 3){
			window.location.href = '#/personal'
    }
  }
  render() {
  	let self = this;
  	let current = this.state.current;
		return (
		  <ul className="navigation">
        <li className={current==1?"on":""} onClick={this.changeCurrent.bind(this, 1)}>
          <i></i>
          <p>首页</p>
        </li>
        <li className={current==2?"on":""} onClick={this.changeCurrent.bind(this, 2)}>
          <i></i>
          <p>订单</p>
        </li>
        <li className={current==3?"on":""} onClick={this.changeCurrent.bind(this, 3)}>
          <i></i>
          <p>我的</p>
        </li>
      </ul>
		);
  }
};

export default App;
