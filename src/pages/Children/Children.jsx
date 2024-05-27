import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

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
                                    Оплата частями                                </h3>
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
            <section className={"doll"}>
                <div className="container">
                    <div className="doll__logo">

                    </div>
                </div>
            </section>
        </section>
    );
};

export default Children;