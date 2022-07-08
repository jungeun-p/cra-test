import { actions, types } from ".";
import { take, all, call, put, takeLeading, debounce } from 'redux-saga/effects';
import { callApiLike } from "../../common/api";

export function* fetchData(action){
    yield put(actions.setLoading(true)); // loading
    yield put(actions.addLike(action.timeline.id, 1)); // add like
    yield put(actions.setValue('error', ''));
    try {
        // 예외 발생 
        yield call(callApiLike);
    } catch(e) {
        yield put(actions.setValue('error', e));
        yield put(actions.addLike(action.timeline.id, -1)); // add like
    }
    // yield call(callApiLike); // call api
    yield put(actions.setLoading(false)); // loading end
}

export function* trySetText(action){
    yield put(actions.setValue('text', action.text));
}

// 실행 시점
export default function*() {
    yield all([
        takeLeading(types.REQUEST_LIKE, fetchData),
        // 0.5초 대기 후 함수 실행
        debounce(500, types.TRY_SET_TEXT, trySetText),
    ]);
}

const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log({a, b, c});
const logResult = {
    a: {
        TAKE: {
            pattern: 'timeline/REQUEST_LIKE'
        },
    },
    b: {
        PUT: {
            channel: null,
            action: {
                type: 'timeline/SET_LOADING',
                isLoading: false,
            },
        },
    },
    c: {
        CALL: {
            context: null,
            fn: callApiLike,
            args: [],
        },
    },
}