import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Profile from './Profile';
import WidthPrinter from './WidthPrinter';

const App = () => {
  const [state, setState] = useState({ name: '', age: 0, count: 0 });
  const [userId, setUserId] = useState(0);
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   document.title = `update time: ${state.count}`;
  // })
  return (
    <div>
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/* <Profile userId={userId}/>
      <button onClick={()=>setUserId(userId + 1)}>userId change</button>
      <br />
      <button onClick={() => setState({...state, count:state.count+1})}>increase</button>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input 
        type="text"
        value={state.name}
        onChange={e=>setState({...state, name:e.target.value})}
      />
      <input 
        type="text"
        value={state.age}
        onChange={e=>setState({...state, age:e.target.value})}
      /> */}
    </div>
  )
};

export default App;