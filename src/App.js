import './App.css';

const for_time = (
  <div>
  <h1>{new Date().toLocaleTimeString()}</h1>
  </div>
)

function Func(props)
{
  return <div>Hey, {props.name}</div>
}

function App() {
  return (
    <div>
      <div>{for_time}</div>
      <Func name="joe"/>
      <Func na='sma'/>
      <Func name="james"/>
    </div>    
  );
}

export default App;
