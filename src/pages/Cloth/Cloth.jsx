import React, {useEffect} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../redux";
import {getCloth} from "../../redux/cloth/cloth";
import {Link} from "react-router-dom";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
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
                                <li className={"cloth__item"}>
                                    <a href="#">Женщинам</a>
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
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2462621/240523_adfox_3056012_12381510.6d465eca2ed2a4916eba949260c71678.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2774030/240517_adfox_3047594_12361232.c6e83d00e91656118447e10b0a06a9d5.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    <SwiperSlide><div className="cloth__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2462621/240514_adfox_3042251_12339001.bc5bf74d32c7437c134e7f9842ec485e.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <section className={"logo"}>
                <div className="container">
                    <div className="logo__swiper">
                        <div className="logo__swiper-left">
                            <FaArrowLeft />
                        </div>
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
                            <div className="logo__swip">
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
                            </div>
                        </Swiper>
                    </div>
                    <div className="logo__swiper-right">
                        <FaArrowRight />
                    </div>
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
                    <div className="patrol__swiper-two">
                        <Swiper className={"swiper3"}
                            // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={10}
                                slidesPerView={6}
                                navigation

                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                        >

                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                    <button className="spilt__right-btn">
                                        В корзину
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/11549745/img_id4082542921498687520.jpeg/180x240" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
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
                                        <h3 className={"patrol__text"}>PATROL</h3>
                                        <p className={"patrol__desc"}>Кроссовки</p>
                                    </div>
                                    <button className="spilt__right-btn">
                                        В корзину
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                <Link to={"/description"}>
                                    <div className={"patrol__img"}>
                                        <img src="https://avatars.mds.yandex.net/get-mpic/1750207/img_id3747828772563930436.jpeg/180x240" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
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
                                        <h3 className={"patrol__text"}>PATROL</h3>
                                        <p className={"patrol__desc"}>Кроссовки</p>
                                    </div>
                                </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/12415859/img_id6492615017608527550.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                    <button className="spilt__right-btn">
                                        В корзину
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/11397617/img_id3308626098714458911.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/1726038/img_id5963970220377993511.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">

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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                    <button className="spilt__right-btn">
                                        В корзину
                                    </button>
                                 </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/12525304/img_id7011137751469344127.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div></SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/1361544/img_id6353536800950117943.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/11695357/img_id4156371341370214485.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/5251231/img_id4249837891809070540.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
                                            <div className="patrol__pay" style={{color:"#006933"}}>
                                                С картой
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                    <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                                </svg>
                                                Пэй
                                            </div>
                                            <p className="patrol__price" style={{color:"#006933"}}>
                                                2 969 p
                                                <span>
                                без:&nbsp; 3 299 p
                            </span>
                                            </p>
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/11858961/img_id4064452359772707460.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="patrol__swipers">
                                    <Link to={"/description"}>
                                        <div className="patrol__img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/12394941/img_id3560471468107936621.jpeg/180x240" alt="#"/>
                                        </div>
                                        <div className="patrol__pays">
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
                                            <h3 className={"patrol__text"}>PATROL</h3>
                                            <p className={"patrol__desc"}>Кроссовки</p>
                                        </div>
                                    </Link>
                                <button className="spilt__right-btn">
                                    В корзину
                                </button>
                            </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className={"coat"}>
                <div className="container">
                    <div className="coat__background">
                        <h2 className="coat__title">
                            Мне бы такое <br/> пальтишко
                        </h2>
                        <div className="coat__swiper">
                            <div className="coat__swiper-left">
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
                                <div className="coat__swipers">
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/12420707/2a0000018d7e4a621270f8814277e3aa3371/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <h3 className={"coat__desc"}>Пиджак KOTON</h3>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                     <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="coat__swip">
                                       <Link to={"/description"}>
                                                <div className="coat__img">
                                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                                </div>
                                                <div className="coat__pays">
                                                    <p className={"coat__desc"}>Кроссовки</p>
                                                    <div className="coat__pay" style={{color:"#006933"}}>
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
                                        </Link>
                                        <div className="coat__btns">
                                            <button className="coat__btn">
                                                В корзину
                                            </button>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                </div>
                                ...
                            </Swiper>
                            <div className="coat__swiper-right">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"selection"}>
                <div className="container">
                    <h2 className="patrol__title">
                        Подборка для вас
                    </h2>
                    <div className="selection__swiper-three">
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
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/4948493/img_id851719158053482419.jpeg/180x240" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
                                        <h3 className={"selection__text"}>Versace Jeans Couture</h3>
                                        <p className={"patrol__desc"}>Кепка</p>
                                        <div className="spilt__right-pay" style={{color:"#006933"}}>
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
                            <SwiperSlide>
                                <div className="selection__swipers">
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/12300570/img_id1788106478042620916.jpeg/600x600" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
                                        <h3 className={"selection__text"}>PATROL</h3>
                                        <p className={"patrol__desc"}>Слипоны </p>
                                        <div className="spilt__right-pay" style={{color:"#006933"}}>
                                            С картой
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" ></rect>
                                            </svg>
                                            Пэй
                                        </div>
                                        <p className="patrol__price" style={{color:"#006933"}}>
                                            2 093 p
                                            <span>
                                             без:&nbsp; 2 093 p
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="selection__swipers">
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/12300570/2a0000018cb0e0131319a527c1925b09871e/600x600" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
                                        <h3 className={"selection__text"}>Uzcotton</h3>
                                        <p className={"patrol__desc"}>Футболка  </p>
                                        <div className="spilt__right-pay" style={{color:"#006933"}}>
                                            С картой
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" ></rect>
                                            </svg>
                                            Пэй
                                        </div>
                                        <p className="patrol__price" style={{color:"#006933"}}>
                                            644 p
                                            <span>
                                             без:&nbsp; 650 p
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="selection__swipers">
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/11402506/img_id3501415229495370602.jpeg/600x600" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
                                        <h3 className={"selection__text"}>PUMA teamLIGA Padded Jacket</h3>
                                        <p className={"patrol__desc"}> Куртка спортивная</p>
                                        <div className="spilt__right-pay" style={{color:"#006933"}}>
                                            С картой
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" ></rect>
                                            </svg>
                                            Пэй
                                        </div>
                                        <p className="patrol__price" style={{color:"#006933"}}>
                                            4 242 p
                                            <span>
                                             без:&nbsp; 4 285 p
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="selection__swipers">
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                    <div className="patrol__img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/11695497/2a0000018d80c5d25e7fc145e1fd3b61e9a6/600x600" alt="#"/>
                                    </div>
                                    <div className="patrol__pays">
                                        <h3 className={"selection__text"}>LC Waikiki</h3>
                                        <p className={"patrol__desc"}>Толстовка </p>
                                        <div className="spilt__right-pay" style={{color:"#006933"}}>
                                            С картой
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                                <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" ></rect>
                                            </svg>
                                            Пэй
                                        </div>
                                        <p className="patrol__price" style={{color:"#006933"}}>
                                            989 p
                                            <span>
                                             без:&nbsp; 999 p
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default Cloth;