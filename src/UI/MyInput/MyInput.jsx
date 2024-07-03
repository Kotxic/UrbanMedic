import React from 'react';
import cl from './MyInput.module.css'
const MyInput = ({...props}) => {
    return (
        <input className={props.error ? cl.myInputError : cl.myInput} {...props}/>
    );
};

export default MyInput;