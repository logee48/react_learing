import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const newroot = ReactDOM.createRoot(document.getElementById('newroot'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const a = <h1>new heading</h1>
newroot.render(a)

function timeing()
{
  const timeinggg = (
    <div>
      <div>time now is:</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  )
  newroot.render(timeinggg)
}
setInterval(timeing,1000)
