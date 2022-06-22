import React, { useEffect, useState } from 'react';

const useWindowWith = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        console.log('useEffect1');
        return () => {
            window.removeEventListener('resize', onResize);
            console.log('useEffect2');
        }
    }, []);
    return width;
};

export default useWindowWith;