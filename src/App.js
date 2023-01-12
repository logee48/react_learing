// import './App.css';

import { Component } from "react";

// const for_time = (
//   <div>
//   <h1>{new Date().toLocaleTimeString()}</h1>
//   </div>
// )

// function Func(props)
// {
//   return <div>Hey, {props.name}</div>
// }
// function Imgloader(props)
// {
//   return <img src={props.imgurl}/>
// }
// function App() {
//   return (
//     <div>
//       <div>{for_time}</div>
//       <Func name="joe"/>
//       <Func na='sma'/>
//       <Func name="james"/>
//       <Imgloader imgurl="https://i.redd.it/1ylxvcstz5ba1.jpg"></Imgloader>
//       <Imgloader imgurl="1.png"></Imgloader>
//     </div>    
//   );
// }



class Abc extends Component{
  constructor(props)
  {
    super(props);
    this.state = {counter:0}
  }
  componentDidMount()
  {
    this.aa = setInterval(()=>this.ticker(),1000)
  }
  ticker()
  {
    this.setState({counter: this.state.counter+1})
  }
  render()
  {
    return(
      <div><h1>{this.state.counter}</h1></div>
    )
  }
}
function App()
{
  return (
    <div>
      <Abc />
    </div>
  )
}
export default App;
