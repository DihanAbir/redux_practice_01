import React, { createContext, useReducer } from 'react';

const init = {
    cartItems : [],
}

// create a store 
const store = createContext(init);
const { Provider } = store;

// make a reducer 
const reducer = ( state, action )  => {
    switch (action.type) {
        case "SET_CART_ITEMS":
            
            break;
    
        default:
            break;
    }
}

const StateProvider = ({Children}) => {
    const {state, dispatch} = useReducer( reducer, init );

    return <Provider value = { { state, dispatch } } >{Children}</Provider>
}

export { store, StateProvider };