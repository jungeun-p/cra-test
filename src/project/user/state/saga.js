import { all, call, put, takeEvery, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";
import { deleteApiCache, makeFetchSaga } from "../../common/util/fetch";

function* fetchUser({ name }){
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/search',
        params: { keyword: name },
    });
    if(isSuccess && data) {
        const user = data.find(item => item.name === name); // 해당 사용자 찾기
        user && (yield put(actions.setValue('user', user))); // user redux 업데이트
    }
}

function* fetchUpdateUser({ user, key, value }){
    const oldValue = user[key];
    // redux에 value 저장
    yield put(actions.setValue('user', { ...user, [key]: value }))
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/update',
        method: 'post',
        data: { name: user.name, key, value, oldValue },
    });
    if(isSuccess && data){
        // 저장된 캐시 지워주기 
        deleteApiCache();
        // 반환된 History를 추가. 
        yield put(actions.addHistory(data.history));
    } else {
        yield put(actions.setValue('user', user)); 
    }
}

function* fetchUserHistory({ name }){
    const { isSuccess, data } = yield call(callApi, {
        url:'/history',
        params: { name },
    });
    if(isSuccess && data){
        yield put(actions.setValue('userHistory', data));
    }
}

export default function* (){
    yield all([
        // takeEvery(Types.FETCH_USER, fetchUser)
        takeEvery(
            Types.FETCH_USER,
            makeFetchSaga({ fetchSaga: fetchUser, canCache: false })
        ),
        takeLeading(
            Types.FETCH_UPDATE_USER, 
            makeFetchSaga({ fetchSaga: fetchUpdateUser, canCache: false })
        ),
        takeLeading(
            Types.FETCH_USER_HISTORY,
            makeFetchSaga({ fetchSaga: fetchUserHistory, canCache: false })
        ),
    ]);
} 