import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchReducer from '../search/state';
import userReducer from '../user/state';
import searchSaga from '../search/state/saga';
import userSaga from '../user/state/saga';
import authSaga from '../auth/state/saga';
import commonReducer from '../common/state';
import authReducer from '../auth/state';

const reducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    user: userReducer,
    common: commonReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
function* rootSaga(){
    yield all([searchSaga(), userSaga(), authSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;