import React, { useState } from 'react';
import Title from './Title';

const Counter = () => {
    const [count, setCount] = useState({ value:0 });
    function onClick (){
        // count.value += 1; // 상태값 내부의 변수는 무시가 된다. 
        setCount({...count, value: count.value + 1}); 
    }
    return (
        <div>
            {count.value > 0 && <Title title={`현재 카운트: ${count.value}`} />}
            <button onClick={onClick}>Add</button>
        </div>
    );
};

export default Counter;