import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import './app.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
    users: [],
    isAuthenticated: false,
    seed: '',
    usersCreated:[],
    modalActive:false,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_USERS':
            return { ...state, users: action.payload };
        case 'CREATED_USERS':
            return {...state, usersCreated: action.payload}
        case 'DELETE_USERS':
            return {...state, usersCreated: [], users: []}
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        case 'CREATE_SEED':
            return { ...state, seed: action.payload };
        case 'DELETE_SEED':
            return { ...state, seed: '' };
        case 'OPEN_MODAL':
            return {...state, modalActive: true}
        case "CLOSE_MODAL":
            return {...state, modalActive: false}
        default:
            return state;
    }
};

// Функция для сохранения состояния в localStorage
const saveToLocalStorage = (state) => {
    try {
        const stateToPersist = {
            isAuthenticated: state.isAuthenticated,
            seed: state.seed,
            usersCreated: state.usersCreated,
        };
        const serializedState = JSON.stringify(stateToPersist);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.error('Could not save state', e);
    }
};

// Функция для загрузки состояния из localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        const persistedState = JSON.parse(serializedState);

        // Возвращаем загруженное состояние, комбинируя его с начальными значениями для остальных частей
        return {
            ...defaultState,
            ...persistedState,
        };
    } catch (e) {
        console.error('Could not load state', e);
        return undefined;
    }
};

// Загрузка состояния из localStorage
const persistedState = loadFromLocalStorage();

// Создание store с инициализацией состоянием из localStorage
const store = createStore(reducer, persistedState);

// Подписка на изменения состояния для сохранения его в localStorage
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);


