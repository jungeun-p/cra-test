import React, { useDebugValue, useEffect, useRef } from 'react';
import { useImperativeHandle } from 'react';
import UseLayoutEffect from './7-basic-hooks/4-1-useLayoutEffect';
import RefElement from './6-ref/1-elements';
import RefComponent from './6-ref/2-component';
import Function from './6-ref/3-function';
import FunctionMulti from './6-ref/4-function-multi';
import Conditional from './6-ref/5-conditional';
import UseRefComponent from './7-basic-hooks/1-1-useRef';
import UseMemoComponent from './7-basic-hooks/1-2-useMemo';
import UseCallbackComponent from './7-basic-hooks/1-3-useCallback';
import UseReducerComponent from './7-basic-hooks/2-1-useReducer';
import UseImperativeHandle from './7-basic-hooks/3-1-useImperativeHandle';
import UseDebugValue, { STATE_RUNNING, STATE_START } from './7-basic-hooks/5-1-useDebugValue';
// import User from './8-use-react/3-1-no-propsTypes';
import FriendPage from './10-structure/container/FriendPage';
import UseContextComponent from './12-redux/1-core';
import { applyMiddleware, createStore } from 'redux';
import ImmerComponent from './12-redux/4-1-immer';
import store from './common/store';
// import { addTimeline } from './timeline/state';
// import { addFriend, editFriend, removeFriend } from './friend/state';
import FriendMain from './friend/container/FriendMain';
import TimelineMain from './timeline/container/TimelineMain';
import { Provider, useDispatch } from 'react-redux';
import Search from './project/search/container/Search';
import User from './project/user/container/User';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './project/auth/container/Login';
import Signup from './project/auth/container/Signup';
import { actions as authActions } from './project/auth/state';

const App = () => {
  // loading element 마운트시 제거 
  useEffect(() => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const loadingEl = document.getElementById('init-loading');
    loadingEl && bodyEl.removeChild(loadingEl);
  }, []);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(authActions.fetchUser())
  }, [dispatch]);

  // store.dispatch(addTimeline({id:1, desc:'coding is joy'}));
  // store.dispatch(addTimeline({id:2, desc:'like redux'}));
  // store.dispatch(addFriend({ id: 1, name: "a" }));
  // store.dispatch(addFriend({ id: 2, name: "b" }));
  // store.dispatch(editFriend({ id: 2, name: "b" }));
  // store.dispatch(removeFriend({ id: 1, name: "d" }));
  // const profileRef = useRef(); // 자식 컴포넌트에서 반환한 값을 참조
  // const onClick = () => {
  //   if(profileRef.current) {
  //     // 자식 컴포넌트의 함수 사용
  //     console.log('current name length', profileRef.current.getNameLength());
  //     profileRef.current.addAge(5);
  //   }
  // }
  // const [state, next] = UseDebugValue(true);
  // const msg = 
  //   state === STATE_START 
  //   ? 'app start'
  //   : state === STATE_RUNNING
  //   ? 'app start'
  //   : 'app finish';
  return (
    <>
    {/* <RefElement /> */}
    {/* <RefComponent /> */}
    {/* <Function />
    <FunctionMulti /> */}
    {/* <Conditional /> */}
    {/* <UseRefComponent /> */}
    {/* <UseMemoComponent /> */}
    {/* <UseCallbackComponent /> */}
    {/* <UseReducerComponent /> */}
    {/* <UseImperativeHandle ref={profileRef} />
    <button onClick={onClick}>add age 5</button> */}
    {/* <UseLayoutEffect /> */}
    {/* <p>{msg}</p>
    <button onClick={next}>next</button> */}
    {/* <User onChangeTitle={()=>{}} male={true} type={'gold'} age={15}/> */}
    {/* <FriendPage /> */}
    {/* <UseContextComponent /> */}
    {/* <ImmerComponent /> */}
    {/* <Provider store={store}>
      <FriendMain />
      <TimelineMain />
    </Provider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Search />} />
        <Route path=":name" element={<User />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    {/* <Route path="/user:name" component={User} /> */}
    </>
  )
};
export default App;