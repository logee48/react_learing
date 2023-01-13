import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const newroot = ReactDOM.createRoot(document.getElementById('newroot'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// class Newonee extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome</h1>
//         <h1>{this.props.date.toLocaleTimeString()}</h1>
//       </div>
//     )
//   }
// }
// function Newone(props)
// {
//   return (
//     <div>
//       <h1>{props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }

// function tick()
// {
//   newroot.render(<Newonee date={new Date()}/>)
// }
// setInterval(tick,1000)


// function Newone()
// {
//   const ancd=(a,b)=>{
//     alert(a+b)
//   }
//   return (
//     <button onClick={()=>ancd(10,11)}>sumbit</button>
//   )
// }


// class Abc extends Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {total: 0}
//   }
//   func = ()=>{
//     const abcd = this.state.total
//     this.setState({total: abcd+1})
//   }
//   rest = ()=>{
//     this.setState({total:0})
//   }
//   decr = ()=>{
//     const demo = this.state.total
//     this.setState({total: demo-1})
//   }
//   parrr = (a)=>{
//     this.setState({total:a})
//   }
//   render()
//   {
//     return(
//       <div>
//         <h1>{this.state.total}</h1>
//         <button onClick={this.func}>inc</button>
//         <button onClick={this.decr}>dec</button>
//         <button onClick={this.rest}>reset</button>
//         <button onClick={(e)=>this.parrr(10000)}>noice</button>
//       </div>
//     )
//   }
// }

// function Abc(props)
// {
//   const num = props.array;
//   const temp = num.map((a)=>{<ul>{a*2}</ul>})
//   return (
//     <h1>{temp}</h1>
//   )
// }
// const aa = [1,2,3,4]

class One extends Component{
  constructor(props)
  {
    super(props);
    this.state = {val: ''};
    this.changes = this.changes.bind(this)
  }
  changes(e){
    this.setState({val: e.target.val})
  }
  onclik(e){
    console.log("works");
    alert(this.state.val)
    e.preventDefault()
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.val} onChange={this.changes}></input>
        <button onClick={this.onclik}>sdf</button>
      </div>
    )
  }
}

newroot.render(<One/>)


