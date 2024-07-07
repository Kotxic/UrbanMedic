import React from 'react';
import cl from './MyInput.module.css'
const MyInput = ({ ...props}) => {
    return (
        <input className={(!props.error || !props.changed) ? cl.myInput : cl.myInputError } {...props}/>
    );
};

export default MyInput;