import { all, call, put, takeEvery, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";
import { makeFetchSaga } from "../../common/util/fetch";

function* fetchAutoComplete({ keyword }){
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/search',
        params: { keyword },  
    })
    if(isSuccess && data){
        yield put(actions.setValue('autoCompletes', data))
    }
}

function* fetchAllHistory(_, page){
    const { isSuccess, data } = yield call(callApi, {
        url: '/history',
        // params: { page }, // page number
    });
    if(isSuccess && data){
        yield put(actions.setValue('history', data));
    }
}

export default function*(){
    yield all([
        takeEvery(Types.FETCH_AUTO_COMPLETE, 
            makeFetchSaga({ fetchSaga: fetchAutoComplete, canCache: true })),
        takeLeading(Types.FETCH_ALL_HISTORY, 
            makeFetchSaga({ fetchSaga: fetchAllHistory, canCache: false })),
    ]);
}