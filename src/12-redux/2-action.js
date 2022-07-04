// dispatch 함수
store.dispatch({ type: 'todo/ADD', title: 'watch a movie', priority: 'high '});
store.dispatch({ type: 'todo/REMOVE', id:123 });
store.dispatch({ type: 'todo/REMOVE_ALL' });

export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

// action creator 함수 
function addTodo({ title, priority }){
    return { type: 'todo/ADD', title, priority };
}
function removeTodo({ id }){
    return { type: 'todo/REMOVE', id };
}
function removeAllTodo(){
    return { type: 'todo/REMOVE_ALL' };
}

store.dispatch(addTodo({ title: 'watch a movie', priority: 'high '}));
store.dispatch(removeTodo({id: 123}));