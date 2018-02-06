var React = require('react');

export default class List extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render(){
    const data = this.props.todos;
    return(<div>
      <ul style={{listStyle:"none"}}>
        {data.map((item,index)=>{
          return <li key={index} onClick={this.clickFun.bind(this,item.id)} >{item.text}</li>
        })}
      </ul>
    </div>)
  }

  clickFun(id){
    this.props.deleteFn(id)
  }
}
