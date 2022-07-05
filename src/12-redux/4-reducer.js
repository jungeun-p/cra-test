function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case REMOVE_ALL:
            return{
                ...state,
                todos:[]
            };
        case REMOVE:
            return{
                ...state, 
                todos: state.todos.filter(todo=>todo.id!==action.id),
            }
        default:
            return state;
    }

    const INITIAL_STATE = { todos: [] }
}

// 불변 객체로서의 관리 라이브러리 
import produce from 'immer'; 

const person = { name: 'mike', age: 22 };
const newPerson = produce(person, draft => {
	draft.age = 32
});