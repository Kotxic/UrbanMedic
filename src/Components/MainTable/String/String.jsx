import React from 'react';
import MyButton from "../../../UI/MyButton/MyButton";
import cl from './String.module.css'
const String = ({item, index, openModal}) => {
    return (
        <div className={cl.string}>
            <p>{index+1}</p>
            <p>{item.name.last}</p>
            <p>{item.name.first}</p>
            <p>{item.gender}</p>
            <p>{item.email}</p>
            {item.generate
            ?<MyButton styletype={'active'} onClick={()=>openModal(item)}>редактировать</MyButton>
            :<MyButton styletype={'disabled'} onClick={(e)=>e.preventDefault()}>редактировать</MyButton>
            }

        </div>
    );
};

export default String;