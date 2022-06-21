import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setSeconds(v => v + 1);
    }, 1000);
  })
  return (
    <div>
      {seconds % 2 === 0 && <Counter />}
      <h1 style={{color: seconds % 2 ? 'blue' : 'red'}}>hi</h1>
      <h2>pass {seconds} seconds until now</h2>
    </div>
  )
};

export default App;