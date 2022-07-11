import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './project/common/store';
import { BrowserRouter } from 'react-router-dom';

// function App(){
//   const [pageName, setPageName] = useState('');
//   useEffect(() => {
//     window.onpopstate = function (event) {
//       console.log(event);
//       setPageName(event.state);
//       // console.log(`location: ${document.location}, state: ${event.state}`);
//     };
//   }, []);
//   function onClick1(){
//     const pageName = 'page1';
//     window.history.pushState(pageName, '', '/page1');
//     setPageName(pageName);
//   }
//   function onClick2(){
//     const pageName = 'page2';
//     window.history.pushState(pageName, '', '/page2');
//     setPageName(pageName);
//   }
//   return(
//     <div>
//       <button onClick={onClick1}>page1</button>
//       <button onClick={onClick2}>page2</button>
//       {!pageName && <Home/>}
//       {pageName === 'page1' && <Page1 />}
//       {pageName === 'page2' && <Page2 />}
//     </div>
//   )
// }

// function Home(){
//   return <h2>This is Home. Click button</h2>
// }

// function Page1(){
//   return <h2>This is Page 1</h2>
// }

// function Page2(){
//   return <h2>This is Page 2</h2>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);