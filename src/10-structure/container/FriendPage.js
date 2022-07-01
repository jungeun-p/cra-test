import React, { useState } from 'react';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { getNextFriend } from '../data';


const FriendPage = () => {
    const [friends, setFriends] = useState([]);
    const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
    const [nameLen, setNameLen] = useState(MAX_NAME_LEN_LIMIT);

    const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
    const friendsWithNameLenLimit = friends.filter(
        item => item.name.length <= nameLen,
    )
    function onAdd(){
        const friend = getNextFriend();
        setFriends([...friends, friend]);
    }
    // function onChangeOption(e){
    //     const value = Number(e.currentTarget.value);
    //     setAgeLimit(value);
    // }
    return (
        <div>
            <button onClick={onAdd}>Add friend</button>
            <NumberSelect 
                value={ageLimit} 
                options={AGE_LIMIT_OPTIONS} 
                label='세 이하만 보기' 
                onChange={setAgeLimit}
            />
            {/* <div>
                <select onChange={onChangeOption} value={ageLimit}>
                    {AGE_LIMIT_OPTIONS.map(option=> (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                세 이하만 보기
            </div> */}
            {/** 친구 목록 분리 */}
            <FriendList friends={friendsWithAgeLimit} />
            {/* <ul>
                {friendsWithAgeLimit.map(friend => (
                    <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
                ))}
            </ul> */}
            <NumberSelect 
                value={nameLen}
                options={NAME_LEN_LIMIT_OPTION}
                label="자 이하만 보기"
                onChange={setNameLen}
                />
            <FriendList friends={friendsWithNameLenLimit}/>
        </div>
    );
};

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const MAX_NAME_LEN_LIMIT = 100;
const NAME_LEN_LIMIT_OPTION = [2, MAX_NAME_LEN_LIMIT];

export default FriendPage;