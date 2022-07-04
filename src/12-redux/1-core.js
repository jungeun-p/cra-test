import React, { createContext, useContext, useReducer } from 'react';
const AppContext = createContext({});
const DispatchContext = createContext(()=>{});

const UseContextComponent = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <div>
            <AppContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    <User />
                    <Product />
                </DispatchContext.Provider>
            </AppContext.Provider>
        </div>
    );
};

const INITIAL_STATE = {
    user: { name: 'mike' },
    product: { name: 'iphone' }
};

function reducer(state, action){
    switch(action.type){
        case 'setUserName':
            return{
                ...state,
                user: {...state.user, name:action.name}};
    }
}

function User(){
    console.log('User Render...');
    const { user } = useContext(AppContext);
    const dispatch = useContext(DispatchContext);
    return(
        <div>
            <p>{user.name}, hi!</p>
            <button onClick={()=>dispatch({type:'setUserName', name:'john'})}>
                change user name
            </button>
        </div>
    )
}

function Product(){
    console.log('Product render');
    const { product } = useContext(AppContext);
    return <p>{`product name: ${product.name}`}</p>
}


export default UseContextComponent;