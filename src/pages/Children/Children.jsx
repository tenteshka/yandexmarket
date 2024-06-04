import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Link} from "react-router-dom";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
const Children = () => {
    return (
        <section className={"children"}>
            <div className="logo__swipe">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/230728_market_2522869_7414122_1.1b07dc22e45cd8aef1e072fa4320bd0a.png/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2765366/240228_market_2672298_8429829_1.1759f122aa52787b29dd56b90454ba84.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2462621/231215_market_2789596_8177874_1.ffa9b5499a404da6ad97bf885dcdece7.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/240509_adfox_3034744_12328839.7835e7fe7f9e4db8688f6192c3c7c632.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2788782/231227_market_2506820_8228103_1.c6762d461cdd8bbb352b7fc062d6bcdb.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/240513_adfox_3039689_12333227.f3d1417c62d4af180e0b1a786c001897.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <div className="container">
                <div className="children__items">
                    <ul className="children__item">
                        <li className="children__li">
                            <img src="https://avatars.mds.yandex.net/get-marketcms/1523779/img-d4ed91a4-3a9d-4e84-8a0e-ababb700b5d5.png/optimize" alt="#"/>
                            <div className="children__text">
                                <h3 className="children__title">
                                    Удобная доставка
                                </h3>
                                <p className={"children__desc"}>
                                    Курьером или в пункт выдачи заказов
                                </p>
                            </div>
                        </li>
                        <li className="children__li">
                            <img src="https://avatars.mds.yandex.net/get-marketcms/1523779/img-4590b98e-c8d4-4643-bd20-6075de1d914a.png/optimize" alt="#"/>
                            <div className="children__text">
                                <h3 className="children__title">
                                    Оплата частями
                                </h3>
                                <p className={"children__desc"}>
                                    Поделите покупку на 2, 4 или 6 месяцев
                                </p>
                            </div>
                        </li>
                        <li className="children__li">
                            <img src="https://avatars.mds.yandex.net/get-marketcms/1779479/img-74041c2c-dc5f-4bc6-bb8b-861f68de6b45.png/optimize" alt="#"/>
                            <div className="children__text">
                                <h3 className="children__title">
                                    Широкий ассортимент
                                </h3>
                                <p className={"children__desc"}>
                                    От игрушек до детской мебели
                                </p>
                            </div>
                        </li>
                        <li className="children__li">
                            <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-3486f6f6-5ee7-41c0-bbb2-f4fcb2dc9c48.png/optimize" alt="#"/>
                            <div className="children__text">
                                <h3 className="children__title">
                                    Частичный выкуп
                                </h3>
                                <p className={"children__desc"}>
                                    Покупайте только то, что подошло
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className={"junion"}>
                <div className="container">
                    <div className="junion__background">
                        <div className="junion__photo">
                            <img src="https://avatars.mds.yandex.net/get-marketcms/475644/img-45d18cc0-66c1-4f37-bcf2-e049f5c73087.jpeg/?thumbnail=%7B%22width%22%3A1505%2C%22height%22%3A317%2C%22command%22%3A%22resize%22%7D&sign=e5ffe24987ebb25d7117f26365ac71a33e0ba88ec952ceeaac42c73b070fcd3b" alt="#"/>
                        </div>
                        <div className="junion__label">
                            <label className={"junion__new"}>
                                <input type="radio" />
                                Новинки
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Все товары
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio" />
                                Подгузники
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Детский транспорт
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Автокресла
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Коляски
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Детская мебель
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Игрушки
                            </label>
                            <label className={"junion__new"}>
                                <input type="radio"/>
                                Товары для творчества
                            </label>
                        </div>
                        <div className="junion__swiper">
                            <div className="junion__swiper-left">
                                <FaArrowLeft />
                            </div>
                            <Swiper className={"swiper6"}
                                // install Swiper modules
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={15}
                                    slidesPerView={6}
                                    navigation

                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                            >
                                <div className="junion__swip">
                                    <SwiperSlide>
                                        <div className="junion__swipers">
                                            <Link to={"/description"}>
                                                <div className="junion__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/12503234/img_id8132907047564179121.png/180x240" alt="#"/>
                                                </div>
                                                <div className="junion__pays">
                                                    <div className="junion__pay" style={{color:"#006933"}}>
                                                        С картой
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                            <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                        </svg>
                                                        Пэй
                                                    </div>
                                                    <p className="junion__price" style={{color:"#006933"}}>
                                                        1 187 p
                                                        <span>
                                               без:&nbsp; 1 199 p
                                             </span>
                                                    </p>
                                                    <h3 className={"junion__text"}>
                                                        Junion
                                                    </h3>
                                                    <p className={"junion__desc"}>Подгузники детские  Care, размер M, 5-10 кг, 62 штуки</p>
                                                </div>
                                            </Link>
                                            <button className="spilt__right-btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/12222123/img_id6649119175429494.png/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    1163 p
                                                    <span>
                                               без:&nbsp; 1175 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>Junion</h3>
                                                <p className={"junion__desc"}>Подгузники-трусики детские  Care, размер L, 9-14 кг, 44 штуки</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/12368623/img_id5308783059573128260.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    8 384 p
                                                    <span>
                                               без:&nbsp; 8 837 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>Junion Kidibeep</h3>
                                                <p className={"junion__desc"}>Коляска прогулочная компактная детская, с автосложением, цвет бежевый</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/5324096/img_id52542298789213233.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    3 975 p
                                                    <span>
                                               без:&nbsp; 4 159 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Chabsy</h3>
                                                <p className={"junion__desc"}>Детский беговел , регулировка сиденья, звоночек, чёрно-зелёный</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/5221865/img_id5164372613027963231.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    5 282 p
                                                    <span>
                                               без:&nbsp; 5 492 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Brody</h3>
                                                <p className={"junion__desc"}>Детский беговел-трансформер  регулировка сиденья, съемные педали, дополнительные колеса, жёлтый</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/5253050/img_id8383642319661865260.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    3 584 p
                                                    <span>
                                               без:&nbsp; 3 760 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Kukibon</h3>
                                                <p className={"junion__desc"}>Коляска для кукол  в комплекте люлька, прогулочный блок, автолюлька, цвет бежевый</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/11935191/img_id1960690846165994803.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    3 975 p
                                                    <span>
                                               без:&nbsp; 4 159 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Chikpi</h3>
                                                <p className={"junion__desc"}>Детский беговел, регулировка сиденья, ручка для переноски, зелёный</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/5363546/img_id7380964728052178227.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    8 721 p
                                                    <span>
                                               без:&nbsp; 9 001 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>Junion Sizzi</h3>
                                                <p className={"junion__desc"}>Коляска прогулочная компактная детская, с автосложением, цвет мятный</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/12626365/img_id4917002739811538717.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    4 792 p
                                                    <span>
                                               без:&nbsp; 4 992 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Вилла Руж</h3>
                                                <p className={"junion__desc"}>Деревянный кукольный домик, 60x30x90 см, 5 комнат, мебель в комплекте, свет</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/11474376/img_id983175449275231424.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    1 422 p
                                                    <span>
                                               без:&nbsp; 1 569 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Экспресс</h3>
                                                <p className={"junion__desc"}>Деревянная железная дорога чудес "Волшебное путешествие", 32 детали, магнитная сцепка вагонов</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/11370192/img_id6832010027172544774.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    4 692 p
                                                    <span>
                                               без:&nbsp; 4 992 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Мими-Мун</h3>
                                                <p className={"junion__desc"}>Лошадка-качалка единорог , натуральное дерево, качественная шлифовка, для детей от 1 года, 74х60 см</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="junion__swipers">
                                        <Link to={"/description"}>
                                            <div className="junion__img">
                                                <img src="https://avatars.mds.yandex.net/get-mpic/5232221/img_id3478246956222218565.jpeg/180x240" alt="#"/>
                                            </div>
                                            <div className="junion__pays">
                                                <div className="junion__pay" style={{color:"#006933"}}>
                                                    С картой
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                    </svg>
                                                    Пэй
                                                </div>
                                                <p className="junion__price" style={{color:"#006933"}}>
                                                    3 089 p
                                                    <span>
                                               без:&nbsp; 3 322 p
                                             </span>
                                                </p>
                                                <h3 className={"junion__text"}>JUNION Laslo</h3>
                                                <p className={"junion__desc"}>Каталка-толокар пушкар трактор с прицепом , световые и звуковые эффекты, цвет: голубой</p>
                                            </div>
                                        </Link>
                                        <button className="spilt__right-btn">
                                            В корзину
                                        </button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="junion__swiper-right">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"books"}>
                <div className="container">
                    <div className="books__logos">
                        <img className={"books__logo"} src="https://avatars.mds.yandex.net/get-marketcms/944743/img-60d7ef39-5e36-4890-8a1e-3d606edc8cf2.png/?thumbnail=%7B%22width%22%3A1776%2C%22height%22%3A331%2C%22command%22%3A%22resize%22%7D&sign=392c02651445fd456823cbb5dad5e7f78283ae17eb5ef096ea4579dfcac905bd" alt="#"/>
                    </div>
                    <div className="books__swiper">
                        <Swiper className={"swiper9"}
                            // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={15}
                                slidesPerView={6}
                                navigation

                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                        >

                            <SwiperSlide>
                                <div className="books__swipers">
                                    <Link to={"/description"}>
                                        <div className="books__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/4342845/img_id5093636217796106490.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="books__pays">
                                            <div className="books__pay" style={{color:"#006933"}}>
                                                С картой
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                </svg>
                                                Пэй
                                            </div>
                                            <p className="books__price" style={{color:"#006933"}}>
                                                984 p
                                                <span>
                                               без:&nbsp; 1 118 p
                                             </span>
                                            </p>
                                            <p className={"books__desc"}>Настольная игра Crowd Games Пэчворк</p>
                                        </div>
                                    </Link>
                                    <button className="spilt__right-btn">
                                        В корзину
                                    </button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Children;