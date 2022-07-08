import React, { useEffect, useState } from 'react';

const useUser = (userId) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data=>setUser(data));
    }, [userId]);
    return user;
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

export default useUser;