var React = require('react');
import Header from '../../components/Header/index.jsx';

//定义组件
export default class Hello extends React.Component {
  constructor() {
    super(); //调用基类的所有初始化方法
    this.state = {
      age: 20
    }; //初始化赋值
  };
  render() {
    return (<div>
      <p>age: {this.state.age}</p>
      <Header {...this.props} title="Hello1页面" childValueChange={this.clickHandle.bind(this)}/>
    </div>) }
  clickHandle(event){
    this.setState({age: event.target.value})
  }
}
