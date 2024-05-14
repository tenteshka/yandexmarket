import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsQrCode } from "react-icons/bs";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { IoFingerPrint } from "react-icons/io5";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"login"}>
          <from className="login__from">
             <div className="login__photo">
                 <div className="login__row">
                     <div className="login__top">
                         <a href="">
                             <FaArrowLeftLong size={24} color={"rgba(247, 247, 255, .9)"}/>
                         </a>
                         <svg aria-hidden="true" className="Jr7WflDRB61osMicrA52 YaIDLogo" focusable="false" height="24" viewBox="0 0 127 30" width="127">
                             <path d="M11.2029 6.57616H9.45694C6.28514 6.57616 4.61486 8.18389 4.61486 10.5627C4.61486 13.2617 5.77009 14.5115 8.15039 16.1192L10.1044 17.4359L4.45481 25.8747H0.25L5.31469 18.3249C2.39023 16.2385 0.754868 14.219 0.754868 10.7766C0.754868 6.46995 3.74188 3.55859 9.4162 3.55859H15.0643V25.8761H11.1898V6.57616H11.2029ZM31.0353 9.72614V25.8761H27.2204V19.1368H22.115V25.8761H18.3001V9.72614H22.115V16.1192H27.2204V9.72614H31.0353ZM48.2751 29.5586H44.7395V25.863H36.1655V29.5586H32.63V22.8527H33.8259C35.1688 20.1538 35.4351 15.0498 35.4351 11.1025V9.72032H46.5728V22.8527H48.2751V29.5586ZM42.7579 12.7437H38.7175V13.2224C38.7175 16.013 38.4265 20.4128 37.3615 22.8585H42.7579V12.7437ZM56.8476 26.1817C51.9706 26.1817 49.2048 23.4565 49.2048 17.8346C49.2048 12.9561 51.425 9.39586 56.078 9.39586C59.8928 9.39586 62.3648 11.5215 62.3648 17.1318V19.1513H53.1535C53.3121 21.8503 54.3757 23.1655 57.1677 23.1655C59.0286 23.1655 61.0219 22.4613 62.2048 21.6509V24.7733C61.0888 25.5444 59.2934 26.1817 56.8476 26.1817ZM53.1535 16.3316H58.483V16.0144C58.483 13.995 57.901 12.4265 56.0096 12.4265C54.1894 12.4105 53.2597 13.7665 53.1535 16.3316ZM68.7579 17.9408V25.8761H64.9299V9.72614H68.7579V17.1697L74.1616 9.72614H78.0172L72.6208 17.1697L78.7476 25.863H74.4075L68.7579 17.9408ZM78.5279 17.8084C78.5279 12.8892 81.0668 9.39441 85.9481 9.39441C87.8396 9.39441 89.2581 9.71304 90.0555 10.1641V13.4086C89.2843 12.9299 87.8352 12.4105 86.3599 12.4105C83.8603 12.4105 82.4781 14.2059 82.4781 17.7153C82.4781 21.0515 83.6086 23.1772 86.3337 23.1772C87.9414 23.1772 89.0981 22.7654 90.0555 22.0874V25.1981C89.1243 25.8761 87.873 26.1947 86.1067 26.1947C80.9998 26.1817 78.5264 23.2048 78.5264 17.8084H78.5279Z" fill="currentColor"></path>
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M111.75 29.9995C123.753 29.9995 126.75 27.0028 126.75 14.9995C126.75 2.99623 123.753 -0.000488281 111.75 -0.000488281C99.7467 -0.000488281 96.75 2.99623 96.75 14.9995C96.75 27.0028 99.7467 29.9995 111.75 29.9995ZM106.629 5.99942V23.9994H103.5V5.99942H106.629ZM113.665 5.99942C114.852 5.99942 115.953 6.1505 116.967 6.47424C117.982 6.7764 118.845 7.29438 119.579 7.98503C120.313 8.67568 120.896 9.60374 121.306 10.726C121.737 11.8483 121.932 13.2512 121.932 14.9131C121.932 16.3807 121.716 17.6757 121.306 18.8196C120.874 19.9419 120.291 20.8915 119.536 21.6685C118.78 22.4455 117.874 23.0282 116.838 23.4167C115.802 23.8052 114.637 24.021 113.406 24.021H109.457V5.99942H113.665ZM113.147 21.5606C113.989 21.5606 114.766 21.4095 115.457 21.1289C116.147 20.8483 116.73 20.4167 117.226 19.8771C117.723 19.316 118.09 18.6253 118.37 17.7836C118.629 16.9419 118.78 15.9706 118.78 14.8483C118.78 13.6397 118.651 12.6253 118.392 11.8052C118.133 10.985 117.766 10.316 117.291 9.81956C116.816 9.32316 116.255 8.95625 115.586 8.74043C114.939 8.5246 114.205 8.41669 113.406 8.41669H112.586V21.539H113.147V21.5606Z" fill="currentColor"></path>
                         </svg>
                     </div>
                     <h1 className="login__title">Войдите с Яндекс ID</h1>
                     <input className={"login__input"} name={"email"} placeholder={"Логин или email"} type="emil"/>
                     <input className={"login__input"} name={"password"} placeholder={"Пароль"} type="password"/>
                     <button className={"login__btn"} type={"submit"}  style={{cursor:"pointer"}}>Войти</button>
                     <button className={"login__person"} type={"submit"}>
                         <span><IoFingerPrint style={{cursor:"pointer"}} size={20}/></span>
                         <span>
                          По лицу или отпечат
                      </span>
                     </button>
                     <button className={"login__id"} type={"submit"}>Создать ID</button>
                     <Link to={"/register"}>
                         <button  className={"login__text"} style={{cursor:"pointer"}}>
                             Нет акаунта?
                         </button>
                     </Link>

                     <div className="login__center">
                         <span className={"login__center-vk"}><SlSocialVkontakte style={{cursor:"pointer",color:"blue"}} size={25}/></span>
                         <span className={"login__center-google"}>
                            <FcGoogle style={{cursor:"pointer"}} size={25}/>
                        </span>
                         <BsQrCode style={{cursor:"pointer",color:"white"}} size={20}/>
                         <p className={"login__center-qr"}>QR-код</p>
                         <div className={"login__center-facebook"}>
                             <BsFacebook style={{cursor:"pointer",color:"cornflowerblue"}} size={18}/>
                         </div>
                         <span><PiDotsThreeOutlineDuotone style={{cursor:"pointer",color:"white"}} size={25}/></span>
                     </div>
                 </div>
                 <div className="login__bottom">
                     <div className="login__bottom-right">
                         <a href="">Используйте режим инкогнито на чужом компьютере</a>
                     </div>
                     <div className="login__bottom-center">
                         Яндекс ID — ключ от всех сервисов
                         <a href="">Узнать больше</a>
                     </div>
                     <div className="login__bottom-left">
                         <span>Ru</span>
                         <span>Справка и поддержка</span>
                         <span>© 2001-2024, </span>
                         <a href="">Яндекс</a>
                     </div>
                 </div>
             </div>
          </from>
        </div>
    );
};

export default Login;