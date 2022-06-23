import React, { useCallback, useState } from 'react';

const Function = () => {
    const [text, setText] = useState(INITIAL_TEXT);
    const [showText, setShowText] = useState(true);

    // 반환값을 재사용 처리
    const setInitialText = useCallback(ref => setText(INITIAL_TEXT), []);

    return (
        <>
        {showText && (
            <input type="text" 
                // ref={ref => ref && setText(INITIAL_TEXT)}
                ref={setInitialText} 
                value={text}  
                onChange={e=>setText(e.target.value)}
            />
        )}
        <button onClick={()=>setShowText(!showText)}>show/hide</button>
        </>
    );
};

const INITIAL_TEXT = 'hi';

export default Function;