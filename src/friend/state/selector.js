import { createSelector } from "reselect";


const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
    // 선택자 함수에서 사용할 값
    [getFriends, getAgeLimit], 
    (friends, ageLimit) => friends.filter(item => item.age <= ageLimit),
);

export const getFriendsWithAgeShowLimit = createSelector(
    // 선택자 함수에서 사용할 값
    [getFriendsWithAgeLimit, getShowLimit], 
    (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
);