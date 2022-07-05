import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { addFriend } from "../state";

export default function FriendMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    // action 완료 후 컴포넌트 렌더링 
    const unsubscribe = store.subscribe(() => {
        const friends = store.getState().friend.friends;
        if(prevFriends !== friends){
            forceUpdate();
        } 
        prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);
  // data 추가하는 action 발생
  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
