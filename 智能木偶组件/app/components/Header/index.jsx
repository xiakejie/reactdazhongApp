var React = require('react');

//定义组件
export default class Header extends React.Component {

  render() {
    return (<div>
      <p>子页面输入：<input type="text" onChange={this.props.childValueChange}/></p>
    </div>) } }
