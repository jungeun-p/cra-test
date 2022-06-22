import React, { useEffect, useState } from 'react';

const Profile = ({userId}) => {
    const [user, setUser] = useState(null);
    const value = userId + 10; 
    useEffect(()=>{
        console.log(value);
        getUserApi(userId).then(data=>setUser(data));
    }, [userId, value]);
    return (
        <div>
            {!user && <p>loading...</p>}
            {user && (
                <>
                    <p>{`name: ${user.name}`}</p>
                    <p>{`age: ${user.age}`}</p>
                </>
            )}
        </div>
    );
};

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };
function getUserApi(userId){ // 외부 함수
    return new Promise(res => {
        setTimeout(()=>{
            res(userId % 2 ? USER1 : USER2);
        }, 500);
    })
}

export default Profile;