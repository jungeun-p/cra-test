import data from './data.json';

function App() {
  const onClick = () => {
    // console.log(data.name);
    import('./data.json').then(({default: data})=>{
      console.log(data.name);
    })
  }
  return (
    <div className="App">
      <button onClick={onClick}>데이터 보여주세요</button>
    </div>
  );
}

export default App;
