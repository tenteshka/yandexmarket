import React from 'react';
import {Link} from "react-router-dom";
import { FiBox } from "react-icons/fi";
import { TiHeartOutline } from "react-icons/ti";
import { BiSolidCartDownload } from "react-icons/bi";
import { RiMapPin2Line } from "react-icons/ri";
const Header = () => {
    return (
        <header className={"header"}>
            <div className={"container"}>
                <div className={"header__top"}>
                    <Link to={"/"}>
                        <div className={"header__logo"}>
                            <svg width="204" height="30" viewBox="0 0 204 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9407_22851)"><circle cx="15" cy="15" r="15" fill="#FF5226"></circle>
                                    <path d="M17.43 24.45V8.39h-1.884c-1.358 0-2.388.288-3.088.865-.7.556-1.05 1.297-1.05 2.224 0 .7.123 1.297.37 1.791s.608.947 1.081 1.359c.474.412 1.071.865 1.792 1.359l1.791 1.204-5.25 7.259H7.238l5.004-6.795 2.347 2.1-1.853-1.174a23.446 23.446 0 01-2.656-2.007c-.742-.66-1.308-1.38-1.699-2.162-.391-.783-.587-1.699-.587-2.749 0-1.812.649-3.274 1.946-4.386 1.318-1.132 3.243-1.698 5.775-1.698h5.59v18.87H17.43z" fill="#fff"></path>
                                </g><path d="M47.555 30c-8.275 0-15-6.699-15-14.973C32.555 6.752 39.28 0 47.555 0c8.274 0 15 6.752 15 15.027 0 8.274-6.726 14.973-15 14.973z" fill="#FF5226"></path>
                                <path d="M45.232 2.03L28.498 28.14h7.671l9.667-15.05-.236-.107-2.68 10.77 5.674 1 5.832-7.33-.316-.157-1.97 8.326 12.363-2.356-2.522-4.154-4.456 1.02.526.605 2.075-8.695-4.834-3.232-6.33 7.96.315.158 2.6-10.43-6.645-4.438z" fill="#FD0"></path>
                                <path d="M45.232 2.03L28.498 28.14h7.671l9.667-15.05-.236-.107-2.68 10.77 5.674 1 5.832-7.33-.316-.157-1.97 8.326 4.97-.947 3.016-12.633-4.834-3.232-6.33 7.96.315.158 2.6-10.43-6.645-4.438z" fill="#FD0"></path>
                                <path d="M68.305 24.45l9.327-18.87h7.103l1.452 11.489 7.196-11.49h7.042V24.45h-6.887V14.32l-6.394 10.13h-6.887L78.93 14.227 73.864 24.45h-5.56zm53.276-3.737c0 .639.011 1.267.031 1.884.021.618.062 1.225.124 1.822h-6.394a5.371 5.371 0 01-.37-.926 6.529 6.529 0 01-.247-1.297c-.659.782-1.493 1.43-2.502 1.945-.988.495-2.399.742-4.231.742-1.853 0-3.336-.433-4.448-1.297-1.091-.865-1.636-2.018-1.636-3.46 0-1.338.38-2.367 1.142-3.088.783-.741 1.997-1.256 3.645-1.544 1.647-.31 3.757-.464 6.331-.464h1.606v-.34c0-.658-.278-1.163-.834-1.513-.556-.35-1.596-.525-3.119-.525-1.503 0-2.903.196-4.201.587-1.276.37-2.316.741-3.119 1.112v-4.139c.906-.33 2.121-.659 3.645-.988 1.544-.35 3.304-.525 5.281-.525 1.997 0 3.685.185 5.065.556 1.38.35 2.43.957 3.15 1.822.721.844 1.081 2.018 1.081 3.521v6.115zm2.1-11.55h6.394l.37 2.624c.783-1.029 1.719-1.78 2.811-2.254 1.091-.474 2.347-.71 3.768-.71 1.606 0 3.047.288 4.324.864a6.824 6.824 0 013.026 2.626c.742 1.173 1.112 2.656 1.112 4.447s-.37 3.284-1.112 4.478c-.72 1.174-1.729 2.06-3.026 2.656-1.298.598-2.78.896-4.448.896a9.387 9.387 0 01-3.49-.649c-1.071-.452-1.997-1.163-2.779-2.13v6.424h-6.95V9.162zm41.942 7.597c0-1.524.412-2.883 1.236-4.077.844-1.194 2.038-2.13 3.582-2.81 1.565-.7 3.408-1.05 5.529-1.05 2.203 0 4.046.38 5.528 1.142 1.503.762 2.553 1.843 3.15 3.243.618 1.4.7 3.058.247 4.973h-12.199c.247.885.793 1.554 1.637 2.007.865.433 2.141.649 3.829.649 1.174 0 2.265-.103 3.274-.31a29.001 29.001 0 002.811-.771v3.675c-.886.412-1.874.741-2.965.988-1.071.247-2.481.371-4.231.371-3.851 0-6.723-.71-8.617-2.131-1.874-1.441-2.811-3.408-2.811-5.9zm19.859-7.598h17.636v3.954h-5.498v11.303h-6.949V13.116h-5.189V9.162zm-38.668 0h6.949v6.918l6.579-6.918h5.992l-6.116 6.362 7.382 8.895h-8.401l-5.436-6.733v6.733h-6.949V9.162zm29.187 3.12c-.948 0-1.699.278-2.255.834-.556.535-.916 1.225-1.081 2.069h6.115c-.02-.844-.247-1.534-.679-2.07-.433-.555-1.133-.833-2.1-.833zm-37.618 4.478c0-1.236-.34-2.214-1.02-2.934-.658-.741-1.606-1.112-2.841-1.112-1.132 0-2.08.35-2.841 1.05-.762.68-1.143 1.678-1.143 2.996s.37 2.337 1.112 3.058c.762.7 1.719 1.05 2.872 1.05 1.277 0 2.234-.371 2.872-1.112.659-.741.989-1.74.989-2.996zm-23.751 1.08h-1.575c-1.503 0-2.584.125-3.243.372-.638.247-.957.72-.957 1.42 0 .597.206 1.04.617 1.328.433.268.947.402 1.545.402.906 0 1.647-.165 2.223-.494.597-.35 1.061-.752 1.39-1.205v-1.822z" fill="#000"></path>
                                <defs><clipPath id="clip0_9407_22851">
                                    <path fill="#fff" d="M0 0h30v30H0z"></path>
                                </clipPath></defs>
                            </svg>
                        </div>
                    </Link>
                    <div className={"header__burger"}>
                        <button className="header__burger-catalog">
                            <svg aria-hidden="true" id="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="l1" d="M3 6h18v2H3z">
                                </path><path className="l2" d="M3 11h18v2H3z">
                            </path><path className="l3" d="M3 16h18v2H3z"></path>
                            </svg>
                            <span>Каталог</span>
                        </button>
                    </div>
                    <div className={"header__search"}>
                        <input className={"header__input"} size={56} type="text" placeholder={"Искать товары"}/>
                        <button className={"header__btn"}>
                            Найти
                        </button>
                    </div>
                    <ul className={"header__menu"}>
                        <li className={"header__menu-items"}>
                            <Link  to={"/"}>
                                <svg width={"50px"} height={"24px"}  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 20" aria-hidden="true" aria-label="Яндекс Плюс" data-auto="yaPlusBadge">
                                    <linearGradient id="plus-background" gradientUnits="userSpaceOnUse" x1="1.076" x2="43.934" y1="2.357" y2="23.603">
                                        <stop offset=".036" stop-color="#48cce0"></stop>
                                        <stop offset=".328" stop-color="#505add"></stop>
                                        <stop offset=".641" stop-color="#be40c0"></stop>
                                        <stop offset=".958" stop-color="#fba82b"></stop>
                                    </linearGradient>
                                    <rect fill="url(#plus-background)" height="100%" rx="10" width="100%">
                                    </rect>
                                    <g fill="#fff">
                                        <path clip-rule="evenodd" d="M33.555 10.438a4.41 4.41 0 01-.257 1.559c-.16.424-.402.812-.714 1.142a3.059 3.059 0 01-1.07.714 3.805 3.805 0 01-2.555.04 2.947 2.947 0 01-1.006-.603 3.4 3.4 0 01-.719-.976 3.94 3.94 0 01-.362-1.323h-1.005v2.968h-1.58V6.916h1.57v2.792h1.03c.055-.436.183-.859.377-1.252a2.932 2.932 0 011.725-1.484 3.66 3.66 0 011.192-.192 3.71 3.71 0 011.332.237c.404.154.77.394 1.071.704.313.33.556.72.714 1.147.18.503.268 1.035.257 1.57zm-3.374 2.354a1.609 1.609 0 001.262-.569 3.427 3.427 0 000-3.556 1.615 1.615 0 00-1.262-.574 1.568 1.568 0 00-1.242.569 3.462 3.462 0 000 3.561 1.57 1.57 0 001.242.564z" fill-rule="evenodd"></path>
                                        <path d="M17.128 9.653c-.015.601-.08 1.2-.196 1.79a2.03 2.03 0 01-.382.826.732.732 0 01-.589.261 1.477 1.477 0 01-.206 0v1.464h.422c.451.023.896-.116 1.253-.392a2.46 2.46 0 00.719-1.132 7.578 7.578 0 00.331-1.811c.056-.71.106-1.534.106-2.465h2.047v5.755h1.573V6.906h-5.028c0 1.092-.015 2.007-.05 2.747zm-2.454-2.737H8.7v7.043h1.569V8.194h2.83v5.765h1.575zm22.316 6.922c.484.172.994.257 1.508.252.447.012.892-.044 1.322-.166a3.89 3.89 0 00.88-.398v-1.293c-.289.167-.596.3-.915.398a3.925 3.925 0 01-1.187.156c-1.423 0-2.137-.78-2.137-2.35 0-1.569.724-2.349 2.178-2.349.387-.005.773.044 1.146.146.323.098.631.24.915.423V7.354a2.84 2.84 0 00-.875-.408 4.64 4.64 0 00-1.277-.16 4.524 4.524 0 00-1.548.25 3.178 3.178 0 00-1.161.72 3.125 3.125 0 00-.734 1.141 4.746 4.746 0 000 3.079 3.113 3.113 0 001.885 1.862z"></path>
                                    </g>
                                </svg>
                                <p className={"header__menu-item"}>
                                    Балы
                                </p>
                            </Link>
                        </li>
                        <li className={"header__menu-items"}>
                            <Link to={"/"}>
                                <FiBox size={24} style={{color:"black"}}/>
                                <p className={"header__menu-item"}>
                                    Заказы
                                </p>
                            </Link>
                        </li>
                        <li className={"header__menu-items"}>
                            <Link  to={"/"}>
                                <TiHeartOutline size={24} style={{color:"black"}} />
                                <p className={"header__menu-item"}>
                                    Избранное
                                </p>
                            </Link>
                        </li>
                        <li className={"header__menu-items"}>
                            <Link  to={"/"}>
                                <BiSolidCartDownload size={24} style={{color:"black"}} />
                                <p className={"header__menu-item"}>
                                    Корзина
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <Link to={"/login"}>
                        <button className={"header__menu-btn"}>
                            Войти
                        </button>
                    </Link>
                </div>
            </div>
            <div className="header__bottom">
               <div className="container">
                   <div className="header__bottom-row">
                       <div className="header__bottom-left">
                           <Link to={"/map"}>
                               <RiMapPin2Line />
                               <a href=""> Москва</a>
                           </Link>

                       </div>
                       <div className="header__bottom-center">
                               <ul className={"header__bottom-menu"}>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/spilt"}>
                                           <p className={"header__bottom-item"}>
                                               Сплит 0012
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link to={"/favorite"}>
                                           <p className={"header__bottom-item"}>
                                               Любимая категория
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/cloth"}>
                                           <p className={"header__bottom-item"}>
                                               Одежда
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/cosiness"}>
                                           <p className={"header__bottom-item"}>
                                               Дом
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/children"}>
                                           <p className={"header__bottom-item"}>
                                               Детям
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/beauty"}>
                                           <p className={"header__bottom-item"}>
                                               Красота
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/electronics"}>
                                           <p className={"header__bottom-item"}>
                                               Электроника
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/products"}>
                                           <p className={"header__bottom-item"}>
                                               Продукты
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/pharmacy"}>
                                           <p className={"header__bottom-item"}>
                                               Аптека
                                           </p>
                                       </Link>
                                   </li>
                                   <li className={"header__bottom-items"}>
                                       <Link  to={"/alice"}>
                                           <p className={"header__bottom-item"}>
                                               Алиса
                                           </p>
                                       </Link>
                                   </li>
                               </ul>
                       </div>
                       <div className="header__bottom-right">
                           <Link to={"/how"}>
                               <p className={"header__bottom-text"}>
                                   Покупайте как юрлица
                               </p>
                           </Link>
                           <Link to={"/sell"}>
                               <p className={"header__bottom-text"}>
                                   Продавайте на Маркете
                               </p>
                           </Link>
                       </div>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;