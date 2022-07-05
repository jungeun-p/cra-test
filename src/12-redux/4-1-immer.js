import produce from 'immer';
import React from 'react';

const ImmerComponent = () => {
    const prevState = {
        user: {
            name: "mike",
            friends: [
                {
                    name: 'jane',
                    age: 23
                },
                {
                    name:'jake',
                    age:24,
                }
            ]
        },
        products: [],
    };
    const nextState = produce(prevState, draft => {
        draft.user.friends[0].age = 32;
    })
    console.log('prevState === nextState', prevState===nextState);
    return (
        <div>
            
        </div>
    );
};

export default ImmerComponent;