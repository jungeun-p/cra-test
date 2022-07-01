import React, { useCallback, useEffect, useState } from 'react';
import useOnMounted from './useOnMounted';

const Profile  = () => {
    const [user, setUser] = useState();
    const [needDetail, setNeedDetail] = useState(false);
    // 외부함수 부수효과 사용시 useCallback 적용 
    const fetchAndSetUser = useCallback(
        async function (needDetail){
            const data = await fetchUser(userId, needDetail);
            setUser(data);
        },
        [userId],
    );
    // Mount됐을 때만 활용하는 컴포넌트 훅 
    // useOnMounted(()=>fetchUser(userId).then(data => setUser(data)));
    // useEffect(()=>{
    //     fetchUser(userId, needDetail).then(data => setUser(data));
    // }, [userId, needDetail]);
    useEffect(()=>{
        fetchAndSetUser();
    }, [fetchAndSetUser]);

    if(!user){
        return <h1>loading...</h1>
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={()=>fetchAndSetUser(true)}>More</button>
        </div>
    );
};

export default Profile;