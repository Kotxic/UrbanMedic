import React from 'react';
import cl from './Choice.module.css'
const Choice = ({gender, setGender}) => {
    return (
        <div className={cl.choice}>
            <button
                className={gender === 'male' ? cl.selected : ''}
                onClick={() => setGender('male')}
            >
                Мужчина
            </button>
            <button
                className={gender === 'female' ? cl.selected : ''}
                onClick={() => setGender('female')}
            >
                Женщина
            </button>
        </div>
    );
};

export default Choice;