import React, {useEffect, useState} from 'react';
import cl from './ModalForm.module.css'
import MyButton from "../../UI/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Icon1} from '../../img/Arrov left 3.svg'
import {ReactComponent as Icon2} from '../../img/Deleted.svg'
import Choice from "./Choice/Choice";
import { createUser, deleteUser, updateUser } from './ModalDispatch/ModalDispatch'
import InputForm from "./InputForm/InputForm";
const ModalForm = ({active, setActive, user}) => {
    const dispatch= useDispatch()
    const createdUsers = useSelector(state => state.usersCreated)
    useEffect(()=>{
        setEmail(user.email)
        setGender(user.gender)
        setName(user.name.first)
        setNameLast(user.name.last)
    },[active])
   const [gender, setGender] = useState('male'); // Состояние для выбора пола
   const [nameLast, setNameLast] = useState(''); // Состояние для введенного имени
   const [email, setEmail] = useState(''); // Состояние для введенного имени
   const [name, setName] = useState(''); // Состояние для введенного имени

    const [nameError, setNameError]=useState('')
    const [lastError, setLastError]=useState('')
    const [emailError, setEmailError]=useState('')

    return (
        <div className={active ? cl.modalOverlay : cl.modalOverlayHide} onClick={()=>setActive(false)}>
            <div className={cl.modal} onClick={event => event.stopPropagation()}>
                   <div className={cl.modalHeader}>
                       <h2>Новый пользователь</h2>
                       <Icon1 onClick={()=>setActive(false)}/>
                   </div>
                <Choice gender={gender} setGender={setGender}/>
                <InputForm  name={name}
                            lastName={nameLast}
                            email={email}
                            setName={setName}
                            setLastName={setNameLast}
                            setEmail={setEmail}
                            nameError={nameError}
                            lastNameError={lastError}
                            emailError={emailError}
                            setNameError={setNameError}
                            setLastNameError={setLastError}
                            setEmailError={setEmailError}/>
                {(!nameError && !lastError && !emailError)
                    ? <p className={cl.notError}></p>
                    : <p className={cl.error}>*Некоторые поля заполнены не корректно</p>
                }

                {user.generate
                    ?<MyButton onClick={()=>createUser(
                        dispatch, nameError, lastError, emailError, name, nameLast, gender, email, createdUsers, setActive
                    )} type="submit" className={cl.submitButton}>
                        Создать
                    </MyButton>
                    : <div className={cl.buttons}>
                        <MyButton styleType={'delete'} onClick={()=>deleteUser(
                            dispatch, nameError, lastError, emailError, email, createdUsers, setActive
                        )}><Icon2/></MyButton>
                        <MyButton onClick={()=>updateUser(
                            dispatch, nameError, lastError, emailError, name, nameLast, gender, email, user, createdUsers, setActive
                        )}>Сохранить</MyButton>
                    </div>
                }


            </div>
        </div>
    );
};

export default ModalForm;