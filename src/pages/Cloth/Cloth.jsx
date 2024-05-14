import React, {useEffect} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../redux";
import {getCloth} from "../../redux/cloth/cloth";

const Cloth = () => {
    const {data} = useSelector(store => store.cloth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCloth())
    }, []);
    return (
        <section className={"cloth"}>
            <div className="container">
                    <div className="cloth__top">
                        <div className="cloth__right">
                            <p className={"cloth__right-text"}>
                                Одежда и обувь
                            </p>
                        </div>
                        <div className="cloth__center">
                            <ul className={"cloth__items"}>
                                <li className={"cloth__item"}><a href="#">Женщинам</a>
                                    <ul>
                                        <li>
                                            <a href="#">Верхняя одежда</a>
                                        </li>
                                        <li>
                                            <a href="#">Спортивная одежда</a>
                                        </li>
                                        <li>
                                            <a href="#">Футболки и топы</a>
                                        </li>
                                        <li>
                                            <a href="#">Юбки</a>
                                        </li>
                                        <li>
                                            <a href="#">Пиджаки</a>
                                        </li>
                                        <li>
                                            <a href="#">Платья и сарафаны</a>
                                        </li>
                                        <li>
                                            <a href="#">Боди</a>
                                        </li>
                                        <li>
                                            <a href="#">Туники</a>
                                        </li>
                                        <li>
                                            <a href="#">Шорты</a>
                                        </li>
                                        <li>
                                            <a href="#">Юбки</a>
                                        </li>
                                        <li>
                                            <a href="#">Обувь</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={"cloth__item"}><a href="#">Мужчинам</a></li>
                                <li className={"cloth__item"}><a href="#">Детям</a></li>
                                <li className={"cloth__item"}><a href="#">Обувь</a></li>
                                <li className={"cloth__item"}><a href="#">Аксессуары</a></li>
                                <li className={"cloth__item"}><a href="#">Спорт</a></li>
                                <li className={"cloth__item"}><a href="#">Ресейл</a></li>
                            </ul>
                        </div>
                        <div className="cloth__left">
                            <ul className={"cloth__left-items"}>
                                <li className={"cloth__left-item"}>
                                    <a href="#">Аутлет</a>
                                </li>
                                <li  className={"cloth__left-item"}>
                                    <a href="#">Универмаг</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="cloth__swiper-one">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/240409_market_2981749_8599740_1.0fba1445de3f795f461f943d5b0e91ae.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2765366/240410_market_2981828_8602458_1.727e7e7611b60bf34752c15548497a6c.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2774030/240507_adfox_3031019_12322073.fb5fb5ef0125f99dcdfc15db61757025.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <section className={"logo"}>
                <div className="container">
                    <Swiper className={"swiper2"}
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1490511/img-c64e9078-4c85-4b53-a55c-1db5a833adc2.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1490511/img-162b57ed-ec3e-4a88-8e42-48acf33dd443.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1534436/img-73db98e9-ac9f-42e1-82d5-5db8485f863b.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1779479/img-221840c4-cdec-46c7-94b3-92c97d125515.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-3775153e-971b-458b-8817-723c387e204f.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-c49c9eb0-520a-4ce2-9bd4-a82f2af07ffe.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-863173e6-bb8a-4558-8c47-75a8ce32280e.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1534436/img-8feb6a4d-639d-4fc2-9126-ae2f31b4bbb5.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/879900/img-798b30fd-6d91-49f1-bf6f-23663ac7f7ea.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1534436/img-2873fc6d-26e4-482a-9e1d-1ffb3551ee78.png/optimize" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="logo__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-554d31cd-4dea-4afe-9aaa-221bb4fd2c51.png/optimize" alt="#"/></div></SwiperSlide>

                    </Swiper>
                </div>
            </section>
            <section className={"patrol"}>
                <div className="container">
                    <h2 className="patrol__title">
                        Новинки Patrol
                    </h2>
                    <div className="patrol__label">
                        <label className={"patrol__new"}>
                            <input type="radio" />
                            Встречайте новую коллекцию
                        </label>
                        <label className={"patrol__new"}>
                            <input type="radio"/>
                            Кроссовки и кеды
                        </label>
                        <label className={"patrol__new"}>
                        <input type="radio" />
                            Туфли, мокасины, и другие новинки
                        </label>
                        <label className={"patrol__new"}>
                        <input type="radio"/>
                            Весенняя коллекция со скидками
                        </label>
                    </div>
                    <Swiper className={"swiper3"}
                        // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide><div className="patrol__swipers">
                                <div className="patrol__img">
                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                </div>
                                <div className="patrol__pays">
                                    <h3 className={"patrol__text"}>PATROL</h3>
                                    <p className={"patrol__desc"}>Кроссовки</p>
                                    <div className="patrol__pay" style={{color:"#006933"}}>
                                        С картой
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                            <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                        </svg>
                                        Пэй
                                    </div>
                                    <p className="patrol__price" style={{color:"#006933"}}>
                                        2 564 p
                                        <span>
                                без:&nbsp; 2 849 p
                            </span>
                                    </p>
                                </div>
                            </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="patrol__swipers">
                        <div className="patrol__img">
                            <img src="https://avatars.mds.yandex.net/get-mpic/11549745/img_id4082542921498687520.jpeg/180x240" alt="#"/>
                        </div>
                        <div className="patrol__pays">
                            <h3 className={"patrol__text"}>PATROL</h3>
                            <p className={"patrol__desc"}>Кроссовки</p>
                            <div className="patrol__pay" style={{color:"#006933"}}>
                                С картой
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                </svg>
                                Пэй
                            </div>
                            <p className="patrol__price" style={{color:"#006933"}}>
                                3 104 p
                                <span>
                                без:&nbsp; 3 449 p
                            </span>
                            </p>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                        <div className={"patrol__img"}>
                            <img src="https://avatars.mds.yandex.net/get-mpic/1750207/img_id3747828772563930436.jpeg/180x240" alt="#"/>
                        </div>
                        <div className="patrol__pays">
                            <h3 className={"patrol__text"}>PATROL</h3>
                            <p className={"patrol__desc"}>Кроссовки</p>
                            <div className="patrol__pay" style={{color:"#006933"}}>
                                С картой
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                </svg>
                                Пэй
                            </div>
                            <p className="patrol__price" style={{color:"#006933"}}>
                                1 755 p
                                <span>
                                без:&nbsp; 1 950 p
                            </span>
                            </p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                        <div className="patrol__img">
                            <img src="https://avatars.mds.yandex.net/get-mpic/12415859/img_id6492615017608527550.jpeg/180x240" alt="#"/>
                        </div>
                        <div className="patrol__pays">
                            <h3 className={"patrol__text"}>PATROL</h3>
                            <p className={"patrol__desc"}>Кроссовки</p>
                            <div className="patrol__pay" style={{color:"#006933"}}>
                                С картой
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                </svg>
                                Пэй
                            </div>
                            <h4 className="patrol__price" style={{color:"#006933"}}>
                                2 277 p
                                <span>
                                без:&nbsp; 2 530 p
                            </span>
                            </h4>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                        <div className="patrol__img">
                            <img src="https://avatars.mds.yandex.net/get-mpic/11397617/img_id3308626098714458911.jpeg/180x240" alt="#"/>
                        </div>
                        <div className="patrol__pays">
                            <h3 className={"patrol__text"}>PATROL</h3>
                            <p className={"patrol__desc"}>Кроссовки</p>
                            <div className="patrol__pay" style={{color:"#006933"}}>
                                С картой
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                </svg>
                                Пэй
                            </div>
                            <p className="patrol__price" style={{color:"#006933"}}>
                                3 168 p
                                <span>
                                без:&nbsp; 3 520 p
                            </span>
                            </p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1726038/img_id5963970220377993511.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    1 934 p
                                    <span>
                                без:&nbsp; 2 14 p
                            </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12525304/img_id7011137751469344127.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    2 766 p
                                    <span>
                                без:&nbsp; 3 073 p
                            </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1361544/img_id6353536800950117943.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    2 204 p
                                    <span>
                                без:&nbsp; 2 449 p
                            </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11695357/img_id4156371341370214485.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    1 665 p
                                    <span>
                                без:&nbsp; 1 850 p
                            </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5251231/img_id4249837891809070540.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <hp className="patrol__price" style={{color:"#006933"}}>
                                    2 969 p
                                    <span>
                                без:&nbsp; 3 299 p
                            </span>
                                </hp>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11858961/img_id4064452359772707460.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    2 564 p
                                    <span>
                                без:&nbsp; 2 849 p
                            </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="patrol__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12394941/img_id3560471468107936621.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"patrol__text"}>PATROL</h3>
                                <p className={"patrol__desc"}>Кроссовки</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    2 660 p
                                    <span>
                                без:&nbsp; 2 955 p
                                </span>
                                </p>
                            </div>
                        </div></SwiperSlide>
                        ...
                </Swiper>
                </div>
            </section>
            <section className={"selection"}>
                <div className="container">
                    <h2 className="patrol__title">
                        Подборка для вас
                    </h2>
                    <Swiper className={"swiper4"}
                        // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="selection__swipers">
                            <div className="patrol__img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4948493/img_id851719158053482419.jpeg/180x240" alt="#"/>
                            </div>
                            <div className="patrol__pays">
                                <h3 className={"selection__text"}>Versace Jeans Couture</h3>
                                <p className={"patrol__desc"}>Кепка</p>
                                <div className="patrol__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" ></rect>
                                    </svg>
                                    Пэй
                                </div>
                                <p className="patrol__price" style={{color:"#006933"}}>
                                    3 069 p
                                    <span>
                                    без:&nbsp; 3 410 p
                                    </span>
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </section>
        </section>

    );
};

export default Cloth;