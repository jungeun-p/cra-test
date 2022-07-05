import { shallowCopy } from "immer/dist/internal";
import { useSelector } from "react-redux";

export default function useMySelector(selector){
    return useSelector(selector, shallowCopy);
}

// 사용법
//  function MyComponent(){
//      const [value1, value2] = useMySelector(state=>[state.value1, state.value2]);
//  }