import React, {useContext} from 'react'
import Controller from './Controller';

import {CountContext} from "./Count-provider";

function Counter() {
    const {count} = useContext(CountContext);
    return (
        <div>
         <div className="card card-body text-center my-3">
         <p>counter{count}</p>
         </div>

         <div  className="card card-body text-center">
         <Controller/>
         </div>


        </div>
    )
}

export default Counter
