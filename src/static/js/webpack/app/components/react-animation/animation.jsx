import React from 'react';

//提前引入animate.css
class Animation extends React.Component{ //router-transtion & animate
  constructor(props){
    super(props)
    this.state = {
      calss: "animated fadeIn",
      children: this.props.children,
      oldChildren: null,
      loading: false,
      timer: null,
    }
  }
  componentWillReceiveProps(){
    let self = this;
    this.state.oldChildren = this.props.children;
    this.state.loading = true;
    self.state.timer = setTimeout(()=>{
      console.log(self)
      self.setState({loading: false})
    }, 300)
  }
  render() {
    let { location, children } = this.props;
    let fadeDiv
    if(this.state.loading){
      fadeDiv = (
        <div className="animated fadeOut">
          {this.state.oldChildren}
        </div>
      )
    }else{
      fadeDiv = (
        <div className="animated fadeIn">
          {children}
        </div>
      )
    }

    return (
      <div>
        {fadeDiv}
      </div>
    );
  }
};

export default Animation;
