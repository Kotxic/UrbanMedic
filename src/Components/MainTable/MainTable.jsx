import React, {useEffect, useRef, useState} from 'react';
import cl from './MainTable.module.css'
import String from "./String/String";
import ModalForm from "../ModalForm/ModalForm";
import {useDispatch, useSelector} from "react-redux";
import API from "../../API/API";
const MainTable = () => {
    const[modalItem, setModalItem]=useState({name:{first:'', last:''}, gender:'', email:'', generate:true})
    const users= useSelector(state=>state.users)
    const usersCreate= useSelector(state => state.usersCreated)
    const seed = useSelector(state => state.seed)
    const activeModal=useSelector(state => state.modalActive)
    const dispatch= useDispatch()
    const [page, setPage]=useState(1)
    const tableRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [active, setActive]=useState(false)

    var newUsers=usersCreate.length>0 ?[...usersCreate,...users] :users
    function openModal(item){
        setModalItem({name:{first:item.name.first, last:item.name.last}, gender:item.gender, email:item.email, generate:false})
        setActive(true)

    }
    useEffect(()=>{
        if (activeModal){
            setModalItem({name:{first:'', last:''}, gender:'male', email:'', generate:true})
            setActive(true)
        }
    }, [activeModal])


    useEffect(() => {
        fetchInfo();
    }, [page]);


    async function fetchInfo() {
        setLoading(true);
        const response = await API.getInfoByPage(seed, page)
        dispatch({type: "CREATE_USERS", payload: [...users,...response.results]})
        newUsers=usersCreate.length>0 ?[...usersCreate,...users] :users
        setLoading(false);

    }

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };


    return (
        <div ref={tableRef}
             onScroll={handleScroll}
            className={cl.table}>
            <div className={cl.string}>
                <p>#</p>
                <p>Фамилия</p>
                <p>Имя</p>
                <p>Пол</p>
                <p>Почта</p>
                <p>Действия</p>
            </div>
            {newUsers.map((item, index)=>
                <String key={index} item={item} index={index} openModal={openModal}/>
            )
            }
            <ModalForm active={active} setActive={setActive} user={modalItem} />
        </div>
    );
};

export default MainTable;