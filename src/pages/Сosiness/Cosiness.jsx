import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const Cosiness = () => {
    return (
        <section className={"cosiness"}>
            <div className="container">
            <div className="cosiness_swiper">
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
        </div>
            <section className={"housing"}>
                   <div className="container">
                       <h2 className="housing__title">
                           Всё для дома
                       </h2>
                       <div className="housing__card">
                           <p className="housing__text">
                               Распродажа
                           </p>
                           <div className="housing__img">
                           </div>
                       </div>

                   </div>
               </section>
        </section>
    );
};

export default Cosiness;