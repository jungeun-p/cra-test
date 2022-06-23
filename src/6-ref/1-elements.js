import React, { useEffect, useRef } from 'react';

const RefElement = () => {
    const inputRef= useRef();
    useEffect(()=>{
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef}></input>
            <Box type="text" ref={inputRef} />
            <button>save</button>
        </div>
    );
};

const Box = () => {
    
}

export default RefElement;