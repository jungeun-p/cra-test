import produce from "immer";

// reducer 생성 함수
export function createReducer(initialState, handlerMap){
    return function(state=initialState, action){
        const handler = handlerMap[action.type];
        if(handler){
            if(action[NOT_IMMUTABLE]){
                return handler(state, action); // handler 함수를 그대로 반환.
            } else {
                return produce(state, draft => {
                    const handler = handlerMap[action.type];
                    handler(draft, action);
                })
            }
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

export const FETCH_PAGE = Symbol('FETCH_PAGE'); // Symbol을 이용한 이름 충돌 방지
export const FETCH_KEY = Symbol('FETCH_KEY');
export const NOT_IMMUTABLE = Symbol('NOT_IMMUTABLE');