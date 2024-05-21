import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../../redux/auth/auth";
import {v4 as uuidv4} from 'uuid';

const Register = () => {
    const [userL,setUserL] = useState({
        id:uuidv4(),
        name:"",
        email:"",
        password:"",
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {
        setUserL({...userL,[e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(userL)).then(navigate('/'))
    }
        return (
            <div>
                <div className="register">
                    <form onSubmit={(e) => onSubmit(e)} className="register__form">
                        <div className="login__photo">
                            <div className="register__row">
                                <h2 className="register__title">
                                    Регистрация
                                </h2>
                                <div className="register__row-card">
                                    <input onChange={(e) => onChange(e)} name={"name"} placeholder={"Имя"} className={"register__input"} type="text"/>
                                    <input onChange={(e) => onChange(e)} name={"email"} placeholder={"Email"} className={"register__input"} type="email"/>
                                    <input onChange={(e) => onChange(e)} name={"password"} placeholder={"Пароль"} className={"register__input"} type="password"/>
                                    <div className="register__button">
                                        <Link to={"/login"}>
                                            <button className="register__btn-link" type={"submit"}
                                                    style={{cursor: "pointer"}}>
                                                Уже есть акаунт!
                                            </button>
                                        </Link>
                                    </div>
                                    <button className="register__submit" type={"submit"} style={{cursor: "pointer"}}>
                                        Регистрация
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
};

export default Register;