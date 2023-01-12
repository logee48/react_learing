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

class Bob extends Component{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()}
    this.count = 0
  }
  componentDidMount()
  {
    this.aa = setInterval(()=>this.abcd(),1000)
  }
  componentWillUnmount()
  {
    clearInterval(this.aa)
  }
  abcd()
  {
    this.setState({date: new Date()})
    this.count+=1
  }
  render()
  {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h2>{this.count}</h2>
      </div>
    )
  }
}

const a = (
  <div>
    <Bob/>
    <Bob/>
  </div>
)

newroot.render(a)


