import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa6";


const Cosiness = () => {
    return (
        <section className={"cosiness"}>
            <div className="container">
                 <div className="cosiness__swiper">

                    <Swiper className={"swiper5"}
                        // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><div className="cosiness__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2774030/240513_adfox_3039830_12333513.4609ffe4aa8a53a5b730493af8d4cb93.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                        <SwiperSlide><div className="cosiness__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/240504_adfox_3025666_12313821.2a7bd5940f1a871f2eb89031fdb2cdfd.png/optimize.webp" alt="#"/></div></SwiperSlide>
                        <SwiperSlide><div className="cosiness__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2914398/240115_market_2830131_8270654_1.b5fc82e486b87cb1bddd35ca76221a25.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                        <SwiperSlide><div className="cosiness__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2804317/240417_market_2871882_8730205_1.54522665e842041c453160ac3db977a3.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                        <SwiperSlide><div className="cosiness__img"><img src="https://avatars.mds.yandex.net/get-adfox-content/2788782/240220_market_2894023_8387004_1.e767fbc1d20a6a23ef79e5d56519a37a.jpg/optimize.webp" alt="#"/></div></SwiperSlide>
                        ...
                    </Swiper>
                 </div>
                <div className="cosiness__photos">
                    <a href="#">
                        <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-37f901ba-c5a3-4bfc-bd8e-0ab9d18d5af7.png/optimize" alt="#"/>
                    </a>
                    <a href="#">
                        <img src="https://avatars.mds.yandex.net/get-marketcms/1779479/img-80953d18-7f9d-4256-b8d5-163af2eeea9f.png/optimize" alt="#"/>
                    </a>
                    <a href="#">
                        <img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-14d5f8db-cb3e-4c0d-a38e-f501ad46d39a.png/optimize" alt="#"/>
                    </a>
                    <a href="#">
                        <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-dd597e53-f589-4cad-a84f-7a938f18ace3.png/optimize" alt="#"/>
                    </a>
                </div>
            </div>
            <section className={"housing"}>
                   <div className="container">
                       <h2 className="housing__title">
                           Всё для дома
                       </h2>
                       <div className="housing__row">
                       <div className="housing__card">
                          <p className="housing__text">
                              Распродажа
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/475644/img-2ff7e17f-c499-467d-94cb-37ddac7aac01.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Успейте купить
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1490511/img-5cc1b07c-edb6-4053-9ce0-34e38b80d275.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Хиты продаж
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1357599/img-b5abfcde-0d18-4201-8b11-af5591888f13.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Текстиль
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-18f1d429-c8a4-4259-ba9e-92a3b94e6b35.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Посуда
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-e94701fd-8c28-4e6c-9cbf-362651133b53.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Аксессуары для ванной
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1357599/img-8d5cd874-cd98-47c7-8cb9-4de45c5d74ee.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Товары для уборки
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-8a8fe732-2727-436c-981e-69db705e81f3.png/optimize" alt=""/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Хранение вещей
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-19d1c158-be68-40e0-b4c5-1c26c9e1a473.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Декор и интерьер
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-ac20678b-dff2-43e1-9046-090a41508c13.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Цветы и растения
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-09387e97-139e-4160-81d8-b5bd8f281fa8.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Уход за одеждой и обувью
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-27ff52f8-cda7-4f40-b3f1-ed11539e6397.png/optimize" alt="#"/>
                          </div>
                      </div>
                       <div className="housing__card">
                          <p className="housing__text">
                              Мебель
                          </p>
                          <div className="housing__img">
                              <img src="https://avatars.mds.yandex.net/get-marketcms/1532570/img-a668b2d1-927a-4065-84e0-38b3885ac6b8.png/optimize" alt="#"/>
                          </div>
                      </div>
                  </div>
                   </div>
               </section>
            <section className={"discounts"}>
                <div className="container">
                    <h2 className="patrol__title">
                        Большие скидки на товары для дома
                    </h2>
                    <div className="patrol__swiper">
                        <Swiper className={"swiper7"}
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
            <section className={"rooms"}>
                <div className="container">
                    <h2 className="rooms__title">
                        Комнаты
                    </h2>
                    <div className="rooms__swiper">
                        <Swiper className={"swiper8"}
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
                            <div className="rooms__swip">
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1532570/img-12482f87-1bfe-4140-aca6-d88a4ba692c2.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-01634470-e86c-4309-818c-f899a924d80a.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-b341a1a8-927c-4327-825c-53dc9c2bfd6f.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-feb09a18-5c83-4472-bd0b-7238e41745d4.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1532570/img-a32705be-321a-4cc0-8f72-e3add22b1b91.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-58957c9a-41c1-4589-9ee2-c8eea2ccbf6f.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/1533751/img-58957c9a-41c1-4589-9ee2-c8eea2ccbf6f.png/optimize" alt="#"/></div></SwiperSlide>
                                <SwiperSlide><div className="rooms__img"><img src="https://avatars.mds.yandex.net/get-marketcms/944743/img-5ab2ff10-610d-4036-8f96-f08606688bbd.png/optimize" alt="#"/></div></SwiperSlide>

                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Cosiness;