const delayAction = store => next => action => {
    const delay = action.meta?.delay;
    if(!delay){
        return next(action)
    }
    // delay있을 경우 reducer delay처리 
    const timeoutId = setTimeout(() => next(action), delay);
    return function cancel(){
        clearTimeout(timeoutId);
    }
}

const myReducer = (state = {name:'mike'}, action) => {
    console.log('myReducer');
    if(action.type==='someAction'){
      return {name:'mike2'}
    }
    return state;
  }

const store = createStore(myReducer, applyMiddleware(delayAction));
store.dispatch({ type:'someAction', meta: { delay: 3000 }});

// cancel함수 반환
const cancel = store.dispatch({ type:'someAction', meta: { delay: 3000 }});
cancel();