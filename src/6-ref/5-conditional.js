import React, { useRef, useState } from 'react';

const Conditional = () => {
    const inputRef = useRef();
    const [showText, setShowText] = useState(true);

    return (
        <div>
            {showText && <input type="text" ref={inputRef} />}
            <button onClick={()=>setShowText(!showText)}>
                Hide/Show Text    
            </button>
            <button onClick={() => inputRef.current && inputRef.current.focus()}>Go to Text</button>        
        </div>
    );
};

export default Conditional;