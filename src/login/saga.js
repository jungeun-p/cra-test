import { call, put, take } from "redux-saga/effects";
import { callApiLike } from "../common/api";

function* loginFlow(){
    while(true){
        const { id, password } = yield take(types.Login);
        const userInfo = yield call (callApiLogin, id, password);
        yield put(types.SET_USER_INFO, userInfo);
        yield take(types.LOGOUT);
        yield call(callApiLogout, id);
        yield put(types.SET_USER_INFO, null);
    }
}