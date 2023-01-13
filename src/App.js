// import './App.css';

// import { Component } from "react"



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


// class Abc extends Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {count: false}
//   }
//   adder=()=>{
//     this.setState(prev=>({
//       count: !prev.count
//     }))
//   }
//   render()
//   {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         {this.state.count ? <h2>It is true</h2>:<h2>It is False</h2>}
//         <button onClick={this.adder}>submit</button>
//       </div>
//     )
//   }
// }

function Varr(props)
{
  const num = props.array;
  const list = num.map((a)=>{return <ul>{a*2}</ul>})
  return list
}
function App()
{
  return (
    <div>
      <Varr array = {[1,2,2,4]}/>
    </div>
  )
}
export default App;
