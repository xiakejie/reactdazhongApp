var React = require('react');
var ReactDom = require('react-dom');
import Todo from './containers/Todo/index.jsx';
//定义组件
class App extends React.Component {
  render() {
    return (<div>
      <Todo />
    </div>) } }

 ReactDom.render(<App/>, document.getElementById('root'));
