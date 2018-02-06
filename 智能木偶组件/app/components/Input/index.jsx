var React = require('react');

export default class Input extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      value: ''
    }
  }


  render(){
    return(<div>
      <input style={{width:"100%",height:"50px"}} onChange={this.changehandle.bind(this)}
        value = {this.state.value}
      onKeyUp={this.keyupHandle.bind(this)} />
    </div>)
  }

  changehandle(event){
      this.setState({value: event.target.value});
  }

  keyupHandle(e){
    const data = this.state.value;
    if(e.keyCode === 13 && data.trim()){
      this.props.submitFn(data);
      //data = ''
      this.setState({value: ''})
    }
  }
}
