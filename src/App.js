import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = () => {
  return (
    <React.Fragment>
      <Counter />
      {
        ReactDOM.createPortal(
          <div>
            <p>hi</p>
          </div>, 
          document.getElementById('something'),
        )
      }
    </React.Fragment>
  );
};

export default App;