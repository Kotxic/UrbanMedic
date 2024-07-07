import React, {useEffect, useState} from 'react';
import cl from './ModalForm.module.css'
import MyButton from "../../UI/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Icon1} from '../../img/Arrov left 3.svg'
import {ReactComponent as Icon2} from '../../img/Deleted.svg'
import Choice from "./Choice/Choice";
import { createUser, deleteUser, updateUser } from './ModalDispatch/ModalDispatch'
import InputForm from "./InputForm/InputForm";
const ModalForm = ({active,setActive, user}) => {
    const dispatch= useDispatch()
    const createdUsers = useSelector(state => state.usersCreated)
    useEffect(()=>{
        setEmail(user.email)
        setGender(user.gender)
        setName(user.name.first)
        setNameLast(user.name.last)
        setNameError('')
        setLastError('')
        setEmailError('')
        setChanged(false)
    },[active])
   const [gender, setGender] = useState('male'); // Состояние для выбора пола
   const [nameLast, setNameLast] = useState(''); // Состояние для введенного имени
   const [email, setEmail] = useState(''); // Состояние для введенного имени
   const [name, setName] = useState(''); // Состояние для введенного имени
    const [changed, setChanged]=useState(false)
    const [nameError, setNameError]=useState('')
    const [lastError, setLastError]=useState('')
    const [emailError, setEmailError]=useState('')
    const [closing, setClosing]=useState(false)
    //

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (user.generate && (!nameError && !lastError && !emailError && name && nameLast && email)) {
                createUser(dispatch, nameError, lastError, emailError, name, nameLast, gender, email, createdUsers, closeModal);
            } else if (!user.generate && (!nameError && !lastError && !emailError && name && nameLast && email)) {
                updateUser(dispatch, nameError, lastError, emailError, name, nameLast, gender, email, user, createdUsers, closeModal);
            }
        }
    };
    useEffect(() => {
        if (active) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [active]);
    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setActive(false);
            dispatch({type:"CLOSE_MODAL"})
            setClosing(false);
        }, 400); // Время должно совпадать с длительностью анимации slideOut
    };


    return (
        <div onKeyDown={handleKeyDown} className={`${cl.modalOverlay} ${active && !closing ? cl.modalOverlayShow : ''} ${closing ? cl.modalOverlayHide : ''}`} onClick={()=>closeModal()}>
            <div className={`${cl.modal} ${active && !closing ? cl.modalShow : ''} ${closing ? cl.modalHide : ''}`} onClick={event => event.stopPropagation()}>
                   <div className={cl.modalHeader}>
                       <h2 className={cl.hiading}>Новый пользователь</h2>
                       <Icon1 className={cl.icon} onClick={()=>closeModal()}/>
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
                            setEmailError={setEmailError}
                            changed={changed}
                            setChanged={setChanged}/>
                {(!nameError && !lastError &&(!emailError || !changed))
                    ? <p className={cl.notError}></p>
                    : <p className={cl.error}>*Некоторые поля заполнены не корректно</p>
                }

                {user.generate
                    ?<MyButton
                        styletype={(!nameError && !lastError && !emailError && name && nameLast && email) ? '' :'notActive'}
                        onClick={()=>createUser(
                        dispatch, nameError, lastError, emailError, name, nameLast, gender, email, createdUsers, closeModal
                    )} type="submit" className={cl.submitButton}>
                        Создать
                    </MyButton>
                    : <div className={cl.buttons}>
                        <MyButton  styletype={'delete'} onClick={()=>deleteUser(
                            dispatch, nameError, lastError, emailError, email, createdUsers, closeModal
                        )}><Icon2/></MyButton>
                        <MyButton styletype={(!nameError && !lastError && !emailError && name && nameLast && email) ? '' :'notActive'} onClick={()=>updateUser(
                            dispatch, nameError, lastError, emailError, name, nameLast, gender, email, user, createdUsers, closeModal
                        )}>Сохранить</MyButton>
                    </div>
                }


            </div>
        </div>
    );
};

export default ModalForm;