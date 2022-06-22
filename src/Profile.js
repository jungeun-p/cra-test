import React, { useEffect, useState } from 'react';
import useUser from './useUser';

const Profile = ({ userId }) => {
    // const [user, setUser] = useState(null);
    // useEffect(()=>{
    //     getUserApi(userId).then(data=>setUser(data));
    // }, [userId]);
    const user = useUser(userId);
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

export default Profile;