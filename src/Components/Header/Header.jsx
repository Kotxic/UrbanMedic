import React,  from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import cl from './Header.module.css'
import {useDispatch} from "react-redux";
const Header = () => {
    const dispatch=useDispatch()


    function logout(){
        dispatch({type:"LOGOUT"})
        dispatch({type:"DELETE_USERS"})
        dispatch({type:'DELETE_SEED'})
    }
    function openModal(){
        dispatch({type:"OPEN_MODAL"})
    }

    return (
        <div className={cl.header}>
            <p className={cl.title}>Укажите ФИО</p>
            <div className={cl.buttons}>
                <MyButton onClick={()=>openModal()}>Добавить пользователя</MyButton>
                <Link className={cl.link} to={'/Login'}> <MyButton styletype={"logout"} onClick={()=>logout()}>Выйти</MyButton> </Link>
            </div>
        </div>
    );
};

export default Header;