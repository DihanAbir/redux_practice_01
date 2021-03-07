import React, {useContext}  from 'react'

import {CountContext} from "./Count-provider";

function Controller() {
    const {increment, decrement, reset } = useContext(CountContext);

    return (
        <div>
            <p>controller</p>

            <button onClick={() => increment() } className='btn btn-success mx-2'>Increment</button>
            <button onClick={() => decrement() } className='btn btn-primary mx-2'>Decrement</button>
            <button onClick={() => reset() } className='btn btn-danger mx-2'>Reset</button>
        </div>
    )
}

export default Controller
