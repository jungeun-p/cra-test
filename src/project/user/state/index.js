import { createReducer, createSetValueAction, FETCH_KEY, NOT_IMMUTABLE, setValueReducer } from "../../common/redux-helper"

export const Types = {
    SET_VALUE : 'user/SET_VALUE',
    FETCH_USER: 'user/FETCH_USER',
    FETCH_UPDATE_USER: 'user/FETCH_UPDATE_USER',
    FETCH_USER_HISTORY: 'user/FETCH_USER_HISTORY',
    ADD_HISTORY: 'user/ADD_HISTORY',
    INITIALIZE: 'user/INITIALIZE',
}

export const actions = {
    setValue: createSetValueAction(Types.SET_VALUE),
    fetchUser: (name) => ({ type: Types.FETCH_USER, name }),
    fetchUpdateUser: ({ user, key, value, fetchKey }) => ({
        type: Types.FETCH_UPDATE_USER,
        user,
        key,
        value,
        [FETCH_KEY]: fetchKey,
    }),
    fetchUserHistory: (name) => ({ type: Types.FETCH_USER_HISTORY, name }),
    addHistory: (history) => ({ type: Types.ADD_HISTORY, history }),
    initialize: () => ({ type: Types.INITIALIZE, [NOT_IMMUTABLE]: true }), // 선택적으로 immutable하게 관리
}

const INITIAL_STATE = {
    user: undefined,
    userHistory: [],
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
    [Types.ADD_HISTORY]: (state, action) => 
        (state.userHistory = [action.history, ...state.userHistory]),
    // draft로 이미 불변으로 관리하기 때문에 값을 따로 지정 
    // [Types.INITIALIZE]: (state) => {
    //     state.user = undefined;
    //     state.userHIstory = []; 
    // },
    [Types.INITIALIZE]: () => INITIAL_STATE, 
});

export default reducer;