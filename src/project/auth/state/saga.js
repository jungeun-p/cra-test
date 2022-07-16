import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";
import { makeFetchSaga } from "../../common/util/fetch";

function* fetchLogin({ name, password }){
    const { isSuccess, data } = yield call(callApi, {
        url: '/auth/login',
        method: 'post',
        data: {
            name,
            password,
        }
    });
    if(isSuccess && data){
        yield put(actions.setUser(data.name));
    }
}

function* fetchSignup({ email }){
    const { isSuccess, data } = yield call(callApi, {
        url: '/auth/signup',
        method: 'post',
        data: { 
            email,
        }
    })
    if(isSuccess && data) {
        yield put(actions.setUser(data.name));
    }
}

function* fetchUser(){
    const { isSuccess, data } = yield call(callApi, {
        url: '/auth/user', // 서버에 쿠키를 이용하여 사용자 이름 제공
    })
    if(isSuccess && data){
        yield put(actions.setUser(data.name))
    }
}

export default function*(){
    yield all([
        takeLeading(
            Types.FETCH_LOGIN,
            makeFetchSaga({ fetchSaga: fetchLogin, canCache: false }),
        ),
        takeLeading(
            Types.FETCH_SIGNUP,
            makeFetchSaga({ fetchSaga: fetchSignup, canCache: false }),
        ),
        takeLeading(
            Types.FETCH_USER,
            makeFetchSaga({ fetchSaga: fetchUser, canCache: false }),
        )
    ])
}