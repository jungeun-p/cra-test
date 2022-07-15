import { createReducer, createSetValueAction, FETCH_KEY, setValueReducer } from "../../common/redux-helper"

export const Types = {
    SET_VALUE : 'user/SET_VALUE',
    FETCH_USER: 'user/FETCH_USER',
    FETCH_UPDATE_USER: 'user/FETCH_UPDATE_USER',
    FETCH_USER_HISTORY: 'user/FETCH_USER_HISTORY',
    ADD_HISTORY: 'user/ADD_HISTORY',
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
}

const INITIAL_STATE = {
    user: undefined,
    userHistory: [],
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
    [Types.ADD_HISTORY]: (state, action) => 
        (state.userHistory = [action.history, ...state.userHistory]),
});

export default reducer