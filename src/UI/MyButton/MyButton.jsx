import React from 'react';
import cl from './MyButton.module.css'
const MyButton = ({onClick, children, ...props}) => {
    let buttonStyle=[cl.myButton]
    switch (props.styletype){
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
            break;
        case 'notActive':
            buttonStyle.push(cl.notActive)
            break;
        default:
           break;
    }

    return (
        <button onClick={onClick}  {...props} className={buttonStyle.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;