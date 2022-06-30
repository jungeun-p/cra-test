import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffect = () => {
    const [width, setWidth] = useState(200);
    const boxRef = useRef();
    // DOM에 반영이된 직후에 실행. 
    useEffect(()=>{
        console.log(boxRef.current.getBoundingClientRect().width);
        if(width>500){
            setWidth(500);
        }
        let v = 0;
        for(let i = 0; i<100000000; i++){
            v += 1 * 2 + i;
        }
        console.log(v);
    }, [width])
    return (
        <div>
            <div ref={boxRef} style={{ width, height: 100, backgroundColor: 'green'}}>test</div>
            <button onClick={()=>{
                const value = Math.floor(Math.random()*499+1);
                setWidth(value)
            }}>500 under</button>
            <button onClick={()=>{
                const value = Math.floor(Math.random()*500+501);
                setWidth(value);
            }}>
                500 over
            </button>
        </div>
    );
};

export default UseLayoutEffect;