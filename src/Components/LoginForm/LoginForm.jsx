// src/LoginForm.js

import React, {useState} from 'react';
import cl from './LoginForm.module.css';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [seed, setSeed]=useState('')
    const [seedError, setSeedError]=useState('')
    const handleLogin = () => {
        if (!seedError) {
            dispatch({type: "LOGIN_SUCCESS"});
            dispatch({type: "CREATE_SEED", payload: seed})
        }
    };

    const handleSeedChange = (e) => {
        const value = e.target.value;
        const nameRegex = /^[a-zA-Z]{1,20}$/;
        if (!nameRegex.test(value)) {
            setSeedError('Имя может содержать только русские буквы и дефис, длина не более 20 символов');
        } else {
            setSeedError('');
        }
        setSeed(value);
    };



    return (
        <div className={cl.container}>
            <form className={cl.form}>
                <h1 className={cl.title}>Добро пожаловать</h1>
                <div className={cl.formGroup}>
                    <label htmlFor="seed" className={cl.label}>Seed</label>
                    <MyInput
                        type="text"
                        id="seed"
                        placeholder='seed'
                        value={seed}
                        onChange={handleSeedChange}
                        error={seedError}
                    />
                    {(seedError)
                        ? <p className={cl.error}>*поле заполнено не корректно </p>
                        : <p className={cl.notError}></p>
                    }
                </div>

                <Link className={cl.link} to={'/Main'}><MyButton onClick={()=>handleLogin()}>Войти</MyButton></Link>
            </form>
        </div>
    );
};

export default LoginForm;
