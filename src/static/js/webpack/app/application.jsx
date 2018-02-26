import React from 'react';
import './application.less';
import '../../../css/nprogress/nprogress.css';
import '../../../css/normalize/normalize.css';
import '../../../css/animate/animate.css';
import 'lib-flexible';


class Application extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    let { location, children } = this.props;
    
    let fadeDiv = ( //添加集体动画效果
      <div key={+new Date()} className="animated fadeIn">
        {children}
      </div>
    )

    return (
      <div className="app-main">
        {fadeDiv}
      </div>
    );
  }
};

export default Application;
