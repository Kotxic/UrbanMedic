import React from 'react';
import cl from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
    let buttonStyle=[cl.myButton]
    switch (props.styleType){
        case 'logout':
            buttonStyle.push(cl.logout)
            break;
        case 'active':
            buttonStyle.push(cl.active)
            break;
        case 'disabled':
            buttonStyle.push(cl.disabled)
            break;
        case 'delete':
            buttonStyle.push(cl.delete)
        default:
           break;
    }

    return (
        <button {...props} className={buttonStyle.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;