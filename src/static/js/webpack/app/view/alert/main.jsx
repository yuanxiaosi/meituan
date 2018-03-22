import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      msg: this.props.msg||"null",
      containerDestroy: this.props.destroy||function(){}
    };
  }

  componentWillMount() {
    
  }
  componentDidMount() {

  }
  // shouldComponentUpdate(nextProps) {
  //   return (nextProps.ids !== this.props.ids || nextProps.data !== this.props.data);
  // }
  
  close() {
    let self = this;
    self.setState({status: false},self.state.containerDestroy())
    
  }
  render() {
    let self = this;
    let status = this.state.status
    let msg = this.state.msg

    return (
      <div className={status?'alert':'alert hide'}>
        <div className="mask"></div>
        <div className="body">
          <div className="msg">{msg}</div>
          <div className="btn" onClick={self.close.bind(self)}>确定</div>
        </div>
      </div>
    );
  }
};

class Container{
  constructor(){
    this.element = document.createElement('div')
    document.body.appendChild(this.element)
  }
  destroy(){
    if (ReactDOM.unmountComponentAtNode(this.element)) {
      this.element.parentNode.removeChild(this.element)
    }
  }
  render(reactElement){
    ReactDOM.render(reactElement, this.element)
  }
}

function ghostify(props){
  let container = new Container()
  container.render(<App msg={props.msg} destroy={container.destroy.bind(container)} />)
}




export const Alert = App
export const alert = ghostify


