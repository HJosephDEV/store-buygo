import React from 'react';
import * as C from './styles.js';

const Input = ({type, state, placeholder, onChange}) => {
    return (
        <C.Div>
            {state === "" ? 
            <C.Input 
                type={type}
                value={state}
                onChange={onChange}
            /> : 
            <C.InputHasVal
                type={type}
                value={state}
                onChange={onChange}  
            />}
            <C.Span placeholder={placeholder}></C.Span>
        </C.Div>
    )
}

export default Input;