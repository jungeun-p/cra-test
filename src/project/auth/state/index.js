import { AuthStatus } from "../../common/constant";
import { 
    createReducer, 
    createSetValueAction, 
    setValueReducer 
} from "../../common/redux-helper"

export const Types = {
    SET_VALUE : 'auth/SET_VALUE',
    FETCH_LOGIN: 'auth/FETCH_LOGIN',
    SET_USER: 'auth/SET_USER', // 로그인 완료 후 처리,
    FETCH_SIGNUP: 'auth/FETCH_SIGNUP',
    FETCH_USER: 'auth/FETCH_USER', // 로그인 유지
}

export const actions = {
    setValue: createSetValueAction(Types.SET_VALUE),
    fetchLogin: (name, password) => ({
        type: Types.FETCH_LOGIN,
        name,
        password,
    }),
    setUser: (name) => ({
        type: Types.SET_USER,
        name,
    }),
    fetchSignup: (email) => ({
        type: Types.FETCH_SIGNUP,
        email, 
    }),
    fetchUser: () => ({
        type: Types.FETCH_USER,
    }),
}

const INITIAL_STATE = {
    name:'',
    status: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_VALUE]: setValueReducer,
    [Types.SET_USER]: (state, action) => {
        state.name = action.name;
        state.status = action.name ? AuthStatus.Login : AuthStatus.NotLogin;
    }
})

export default reducer;