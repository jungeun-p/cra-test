import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [odd, setOdd] = useState(false);
  function onAdd(){
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  };
  function onSaveToServer(){};
  function onDelete(e){
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo)=> todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>To do List</h3>
      <ul>
        {todoList
        .filter((_, index) => (odd ? index % 2 === 0 : true))
        .map((todo, index) => (
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <span>{index}</span>
            <button data-id={todo.id} onClick={onDelete}>delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>Add</button>
      <button onClick={() => setOdd(!odd)}>Show odd</button>
      <button onClick={onSaveToServer}>Add to server</button>
    </div>
  );
}

export default App;
