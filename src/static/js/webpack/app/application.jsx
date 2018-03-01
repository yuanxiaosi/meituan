import React from 'react';
import './application.less';
import '../../../css/nprogress/nprogress.css';
import '../../../css/normalize/normalize.css';
import '../../../css/animate/animate.css';
import 'lib-flexible';

import Animation from './components/react-animation/animation.jsx'

class Application extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    let props = this.props;
    let { location, children } = this.props;

    return (
      <div className="app-main">
        <Animation {...props} />
      </div>
    );
  }
};

export default Application;
