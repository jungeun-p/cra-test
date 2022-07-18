import { createSetValueAction, createReducer, setValueReducer, FETCH_PAGE } from "../../common/redux-helper"

export const Types = {
    SET_VALUE: 'search/SET_VALUE',
    FETCH_AUTO_COMPLETE: 'search/FETCH_AUTO_COMPLETE',
    FETCH_ALL_HISTORY: 'search/FETCH_ALL_HISTORY',
}

export const actions = {
    setValue: createSetValueAction(Types.SET_VALUE),
    fetchAutoComplete: (keyword) => ({
        type: Types.FETCH_AUTO_COMPLETE,
        keyword
    }),
    fetchAllHistory: () => ({ 
        type: Types.FETCH_ALL_HISTORY, 
        // [FETCH_PAGE]: 0 // page 초기화 처리 
    }),
}

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: [],
    history: [],
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
})

export default reducer;