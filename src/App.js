import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import data from './data.json';

function App() {
  // const onClick = () => {
  //   // console.log(data.name);
  //   import('./data.json').then(({default: data})=>{
  //     console.log(data.name);
  //   })
  // }
  return (
    <BrowserRouter>
      <Link to=".">Home</Link>
      <br />
      <Link to="photo">Photo</Link>
      <br />
      <Link to="room">Room</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photo" element={<Photo/>} />
        <Route path="/room" element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <h2>This is Home. Click button</h2>
}

function Photo(){
  return <h2>This is Photo</h2>
}

function Room(){
  return <h2>This is Room</h2>
}

export default App;
