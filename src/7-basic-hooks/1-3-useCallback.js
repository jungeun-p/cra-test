import React, { useCallback, useState } from 'react';

const UseCallbackComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [v1, setV1] = useState(0);
    const onSave = useCallback(()=>saveToServer(name, age), [name, age])
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <UserEdit 
                // onSave={()=>saveToServer(name, age)}
                onSave={onSave}
                setName={setName}
                setAge={setAge}/>
            <p>{v1}</p>
            <button onClick={()=>setV1(Math.random())}>v1 update</button>
        </div>
    );
};

const UserEdit = React.memo(function({onSave, setName, setAge}){
    console.log('UserEdit render');
    return null;
})

function saveToServer(name, age){}

export default UseCallbackComponent;