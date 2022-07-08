import React from 'react';

const Button = ({size}) => {
    const isBig = false;
    return (
        <button>{isBig ? '큰 버튼' : '작은 버튼'}</button>
    );
};

export default Button;