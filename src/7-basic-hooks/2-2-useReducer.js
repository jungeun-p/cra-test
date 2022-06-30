import React, { useReducer } from 'react';

export const ProfileDisptach = React.createContext(null);

const UseReducerContext = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>  
            <ProfileDisptach.Provider value={dispatch}>
                <SomeComponent />
            </ProfileDisptach.Provider>          
        </div>
    );
};

const INITIAL_STATE = { name: 'empty', age: 0 };
function reducer(state, action){
    switch(state.type){
        case 'setName':
            return {...state, name:action.name};
        case 'setAge':
            return{...state, age:action.age};
        default:
            return state;
    }
}

export default UseReducerContext;