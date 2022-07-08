import React, { useEffect, useState } from 'react';

const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    }, []);
    return mounted;
};

// useBlockNotLogin();
// useBlockUnsavedChange(desc);
// useEffectIfLoginUser(callback, deps);

export default useMounted;