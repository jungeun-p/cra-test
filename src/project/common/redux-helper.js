import produce from "immer";

// reducer 생성 함수
export function createReducer(initialState, handlerMap){
    return function(state=initialState, action){
        const handler = handlerMap[action.type];
        if(handler){
            return produce(state, draft => {
                const handler = handlerMap[action.type];
                handler(draft, action);
            })
        } else {
            return state;
        }
    }
}
// action function
export function createSetValueAction(type){
    return (key, value) => ({ type, key, value });
}
// reducer function (단순 할당)
export function setValueReducer(state, action){
    state[action.key] = action.value; 
}