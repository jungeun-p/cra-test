import { createReducer, createSetValueAction, setValueReducer } from "../../common/redux-helper"

export const Types = {
    SET_VALUE : 'user/SET_VALUE',
    FETCH_USER: 'user/FETCH_USER',
}

export const actions = {
    setValue: createSetValueAction(Types.SET_VALUE),
    fetchUser: (name) => ({ type: Types.FETCH_USER, name }),
}

const INITIAL_STATE = {
    user: undefined,
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
})

export default reducer