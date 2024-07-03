import React from 'react';
import MyInput from '../../../UI/MyInput/MyInput';

const InputForm = ({name, lastName, email, setName, setLastName, setEmail, nameError, lastNameError, emailError, setNameError, setLastNameError, setEmailError }) => {
    const handleNameChange = (e) => {
        const value = e.target.value;
        const nameRegex = /^[а-яА-ЯёЁ-]{1,20}$/;
        if (!nameRegex.test(value)) {
            setNameError('Имя может содержать только русские буквы и дефис, длина не более 20 символов');
        } else {
            setNameError('');
        }
        setName(value);
    };
    const handleSurnameChange = (e) => {
        const value = e.target.value;
        const surnameRegex = /^[а-яА-ЯёЁ-]{1,20}$/;
        if (!surnameRegex.test(value)) {
            setLastNameError('Фамилия может содержать только русские буквы и дефис, длина не более 20 символов');
        } else {
            setLastNameError('');
        }
        setLastName(value);
    };
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
        setEmail(value);
    };

    return (
        <div>
            <MyInput
                type="text"
                value={lastName}
                onChange={handleSurnameChange}
                placeholder="Фамилия"
                error={lastNameError}
            />
            <MyInput
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Имя"
                error={nameError}
            />
            <MyInput
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                error={emailError}
            />
        </div>
    );
};

export default InputForm;
