import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="register">
                <form className="register__form">
                    <div className="login__photo">
                        <div className="register__row">
                            <h2 className="register__title">
                                Регистрация
                            </h2>
                            <div className="register__row-card">
                                <input name={"name"}  placeholder={"Имя"} className={"register__input"} type="text"/>
                                <input name={"email"}  placeholder={"Email"} className={"register__input"} type="email"/>
                                <input name={"password"}  placeholder={"Пароль"} className={"register__input"} type="password"/>
                                <div className="register__button">
                                    <Link to={"/login"}>
                                        <button className="register__btn-link" type={"submit"} style={{cursor:"pointer"}}>
                                            Уже есть акаунт!
                                        </button>
                                    </Link>
                                </div>
                                <button className="register__submit" type={"submit"} style={{cursor:"pointer"}}>
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