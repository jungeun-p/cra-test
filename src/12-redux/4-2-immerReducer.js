import produce from "immer";

// function reducer(state = INITIAL_STATE, action){
//     return produce(state, draft => {
//         switch(action.type){
//             case ADD:
//                 draft.todos.push(action.todo);
//                 break;
//             case REMOVE_ALL:
//                 draft.todos = [];
//                 break;
//             case REMOVE:
//                 draft.todos = draft.todos.filter(todo=>todo.id!==action.id);
//                 break;
//             default:
//                 break;
//         }
//     })
// }

// function reducer(state = INITIAL_STATE, action){
//     return produce(state, draft => {
//         switch(action.type){
//             case SET_SELECTED_PEOPLE:
//                 draft.selectedPeople = draft.peopleList.find(
//                     item => item.id === action.id,
//                 )
//                 // 객체 레퍼런스 변경대신 id값만으로 변경하기
//                 draft.selectedPeople = action.id
//                 break;
//             case EDIT_PEOPLE_NAME:
//                 const people = draft.peopleList.find(item=>item.id===action.id);
//                 // 객체 수정시 name이 아닌 id값으로 이용하는 것이 좋다. 
//                 people.name = action.name;
//                 break;
//             //... 

//         }
//     })
// }