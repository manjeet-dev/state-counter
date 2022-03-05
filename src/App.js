import React,{useState} from 'react';
import './App.css';

function App(){
  const [countNo,setCount] = useState(0) 


  return(
    <div className="App">
      <h1>Counter app using state</h1>
      <hr/>
      <h2>Current Count {countNo}</h2>
      <button onClick={() => (countNo <= 0 ? "" : setCount(countNo - 1))}>Decrease Value</button>
      <button onClick={() => setCount(0)}>Reset Value</button>
      <button onClick={() => (countNo >= 10 ? "" : setCount(countNo + 1))}>Increase Value</button>
    </div>
  )
}

export default App;
