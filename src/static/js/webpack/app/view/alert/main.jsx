import './main.less';
import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as showAlertActions from '../../actions/showAlertAction.js'


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
  	let self = this;
  	let showAlert = self.props.showAlert
    let status = showAlert.status
    let msg = showAlert.msg
		return (
		  <div className={status?"alert":"alert hide"}>
				<div className="msg">{msg}</div>
				<div className="btn">确定</div>
			</div>
		);
  }
};


App.propTypes = {
  showAlert: PropTypes.object.isRequired,
  showAlertActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  showAlert: state.showAlert
})

const mapDispatchToProps = dispatch => ({
  showAlertActions: bindActionCreators(showAlertActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
