import { useState } from 'react';

export const useNameInput = (info) => {
    const [name, setName] = useState(info);
    const [nameError, setNameError] = useState('');

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

    return { name, nameError, handleNameChange };
};

export const useSurnameInput = () => {
    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState('');

    const handleSurnameChange = (e) => {
        const value = e.target.value;
        const surnameRegex = /^[а-яА-ЯёЁ-]{1,20}$/;
        if (!surnameRegex.test(value)) {
            setSurnameError('Фамилия может содержать только русские буквы и дефис, длина не более 20 символов');
        } else {
            setSurnameError('');
        }
        setSurname(value);
    };

    return { surname, surnameError, handleSurnameChange };
};

export const useEmailInput = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

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

    return { email, emailError, handleEmailChange };
};
