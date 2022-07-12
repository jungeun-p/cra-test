import { createReducer, createSetValueAction, FETCH_KEY, setValueReducer } from "../../common/redux-helper"

export const Types = {
    SET_VALUE : 'user/SET_VALUE',
    FETCH_USER: 'user/FETCH_USER',
    FETCH_UPDATE_USER: 'user/FETCH_UPDATE_USER',
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
    })
}

const INITIAL_STATE = {
    user: undefined,
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
})

export default reducer