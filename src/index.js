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


class Ja extends Component{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()}
  }
  render()
  {
    return (
      <div>
        <h1>{this.state.date}</h1>
      </div>
    )
  }
}

newroot.render(<Ja/>)


