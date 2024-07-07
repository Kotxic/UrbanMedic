import React from 'react';
import cl from './MyInput.module.css'
const MyInput = ({ ...props}) => {
    return (
        <input className={(!props.error || props.focus) ? cl.myInput : cl.myInputError } {...props}/>
    );
};

export default MyInput;