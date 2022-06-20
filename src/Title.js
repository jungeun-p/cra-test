import React from 'react';

const Title = ({ title }) => {
    console.log('title render')
    return <p>{title}</p>
};

export default React.memo(Title);