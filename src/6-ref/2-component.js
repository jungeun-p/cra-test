import React, { useEffect, useRef } from 'react';

const RefComponent = () => {
    const inputRef= useRef();
    useEffect(()=>{
        inputRef.current.focus();
    }, [])
    return (
        <>
            <InputAndSave inputRef={inputRef} />
            <Button ref={inputRef} />
            <button onClick={()=>inputRef.current.focus()}>go to text</button>
        </>
    );
};

const Button = React.forwardRef(({onClick}, ref) => {
    return(
        <button onClick={onClick} ref={ref}>Save</button>
    )
})

const InputAndSave = ({ inputRef }) => {
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button>Save</button>
        </div>
    )
}

export default RefComponent;