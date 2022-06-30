import React, { useDebugValue, useRef } from 'react';
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

const App = () => {
  // const profileRef = useRef(); // 자식 컴포넌트에서 반환한 값을 참조
  // const onClick = () => {
  //   if(profileRef.current) {
  //     // 자식 컴포넌트의 함수 사용
  //     console.log('current name length', profileRef.current.getNameLength());
  //     profileRef.current.addAge(5);
  //   }
  // }
  const [state, next] = UseDebugValue(true);
  const msg = 
    state === STATE_START 
    ? 'app start'
    : state === STATE_RUNNING
    ? 'app start'
    : 'app finish';
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
    <p>{msg}</p>
    <button onClick={next}>next</button>
    </>
  )
};
export default App;