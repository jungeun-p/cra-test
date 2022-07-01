import React, { useEffect, useState } from 'react';

const Profile = () => {
    const user = useUser(userId);
    // 커스텀 훅으로 별도 관리 
    const width = useWindowWidth();
    // const [width, setWidth] = useState(window.innerWidth);
    // useEffect(()=>{
    //     const onResize = () => setWidth(window.innerWidth);
    //     window.addEventListener('resize', onResize);
    //     return()=>{
    //         window.removeEventListener('resize', onResize);
    //     }
    // }, []);
    // ...
};


export default Profile;