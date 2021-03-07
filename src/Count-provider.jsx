import React, { createContext,  useReducer }  from "react";

const CountContext = createContext();

// actions types  
const INCREMENT = "INCREMENT";
const DECCREMENT = "DECCREMENT";
const RESET = "RESET";

const createActions = dispatch => (
    {
        increment : value => dispatch({type: INCREMENT, payload: value || 1}),
        decrement : value => dispatch({type: DECCREMENT, payload: value || 1}),
        reset : () => dispatch({type: RESET})
    }
)

const reducer = (state, action) =>{
    switch (action.type) {

        case INCREMENT:
            {
                return state + action.payload
            }
        case DECCREMENT:
            {
                return state - action.payload
            }
        case RESET:
            {
                return 0
            }
    
        default: return state 
    }
}



const CounterProvider = props =>  {
    const [count, dispatch] = useReducer(reducer, 0);
    const actions = createActions(dispatch);

    return(
        <CountContext.Provider value={{ count, ...actions }}>
            {props.children}
        </CountContext.Provider>
    );

};

export { CounterProvider, CountContext  } ;