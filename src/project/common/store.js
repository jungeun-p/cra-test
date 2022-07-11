import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import searchReducer from '../search/state';
import userReducer from '../user/state';
import searchSaga from '../search/state/saga';
import userSaga from '../user/state/saga';

const reducer = combineReducers({
    search: searchReducer,
    user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
function* rootSaga(){
    yield all([searchSaga(), userSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;