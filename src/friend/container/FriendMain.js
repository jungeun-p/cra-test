import React, { useEffect, useInsertionEffect, useReducer } from "react";
// import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import FriendList from "../component/FriendList";
import { actions as friendActions, addFriend, setAgeLimit, setShowLimit, setValue, } from "../state";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NumberSelect from "../../10-structure/component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import { getAgeLimit, getShowLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit } from "../state/selector";

export default function FriendMain() {
    const [
      ageLimit,
      showLimit,
      friendsWithAgeLimit,
      friendsWithAgeShowLimit
      // action 실행할 때마다 함수 실행 
    ] = useSelector(
    //   (state) => {
    //   const { friends, ageLimit, showLimit } = state.friend;
    //   const friendsWithAgeLimit = friends.filter(
    //     (friend) => friend.age <= ageLimit
    //   );
    //   return [
    //     ageLimit,
    //     showLimit,
    //     friendsWithAgeLimit,
    //     friendsWithAgeLimit.slice(0, showLimit)
    //   ];
    // }, 
    state => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual);
    // // 위와 동일 
    // const ageLimit = useSelector(getAgeLimit);
    // const showLimit = useSelector(getShowLimit);
    // const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
    // const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

//   const [, forceUpdate] = useReducer((v) => v + 1, 0);
//   useEffect(() => {
//     let prevFriends = store.getState().friend.friends;
//     // action 완료 후 컴포넌트 렌더링 
//     const unsubscribe = store.subscribe(() => {
//         const friends = store.getState().friend.friends;
//         if(prevFriends !== friends){
//             forceUpdate();
//         } 
//         prevFriends = friends;
//     });
//     return () => unsubscribe();
//   }, []);
  // data 추가하는 action 발생
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    // store.dispatch(addFriend(friend));
    dispatch(friendActions.addFriend(friend));
  }
  console.log("FriendMain render");
//   const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      {/* <FriendList friends={friends} /> */}
      <NumberSelect
        onChange={(v) => dispatch(friendActions.setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(friendActions.setValue('showLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];