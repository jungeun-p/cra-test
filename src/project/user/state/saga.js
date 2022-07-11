import { all, call, put, takeEvery } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";

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

export default function* (){
    yield all([
        takeEvery(Types.FETCH_USER, fetchUser)
    ]);
}