import React, {useState} from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import cl from './Header.module.css'
import ModalForm from "../ModalForm/ModalForm";
import {useDispatch} from "react-redux";
const Header = () => {
    const dispatch=useDispatch()
    const [showModal, setShowModal] = useState(false);
    console.log('asd')
    const [user, setUser]=useState(
        {name:{first:'', last:''}, gender:'', email:'', generate:true}
    )

    function logout(){
        dispatch({type:"LOGOUT"})
        dispatch({type:"DELETE_USERS"})
        dispatch({type:'DELETE_SEED'})
    }

    return (
        <div className={cl.header}>
            <p className={cl.title}>Укажите ФИО</p>
            <div className={cl.buttons}>
                <MyButton onClick={()=>setShowModal(true)}>Добавить пользователя</MyButton>
                <ModalForm active={showModal} setActive={setShowModal} user={user}/>
                <Link className={cl.link} to={'/Login'}> <MyButton styleType={"logout"} onClick={()=>logout()}>Выйти</MyButton> </Link>
            </div>
        </div>
    );
};

export default Header;