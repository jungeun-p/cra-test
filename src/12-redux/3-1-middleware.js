const printLog = store => next => action => {
    console.log(`prev state = ${JSON.stringify(store.getState())}`);
    const result = next(action); // reducer 함수 실행
    console.log(`next state = ${JSON.stringify(store.getState())}`);
    return result; 
}

const myReducer = (state = {name:'mike'}, action) => {
    console.log('myReducer');
    if(action.type==='someAction'){
      return {name:'mike2'}
    }
    return state;
  }
  
  const store = createStore(myReducer, applyMiddleware(printLog));
  store.dispatch({ type: 'someAction'});
