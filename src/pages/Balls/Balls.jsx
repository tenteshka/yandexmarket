import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Balls = () => {

    return (
        <section className={"balls"}>
            <div className="balls__top">
                <div className={"balls__top-header"}>
                    <div className="balls__top-right">
                        <a href="#">
                            <img src="https://avatars.mds.yandex.net/get-media-infra/3756502/442fbd74-1518-41f0-afdc-0abb6852e413/header-logo-x1" alt="#"/>
                        </a>
                    </div>
                    <div className="balls__top-left">
                            <ul className="balls__top-menu">
                                <li className="balls__top-item">
                                    <button className="balls__top-burger">
                                        <RxHamburgerMenu style={{cursor:"pointer"}} size={20} />
                                    </button>
                                     Меню
                                </li>
                            </ul>
                        <div className="balls__top-person">
                            <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-middle" alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="balls__row">
                    <div className="balls__card">
                        <div className="balls__right">
                            <p className="balls__right-title">
                                Фильмы, музыка и кешбэк баллами в одной подписке
                            </p>
                            <p className="balls__right-text">
                                Смотрите фильмы на Кинопоиске, слушайте треки на Музыке, заказывайте с бесплатной доставкой на Маркете, получайте кешбэк баллами
                            </p>
                        </div>
                        <div className="balls__left">
                            <div className="balls__left-img">
                                <img src="https://avatars.mds.yandex.net/get-media-infra/3601332/20c1574a-d68e-4b02-8ef5-8d02c1b6ceeb/universal-image-x1" alt="#"/>
                            </div>
                        </div>
                    </div>
                    <div className="balls__card">
                        <div className="balls__right">
                            <div className="balls__right-img">
                                <img src="https://avatars.mds.yandex.net/get-media-infra/3502168/325d8923-6f9f-4104-8e60-0c0edf1f54a2/orig" alt="#"/>
                            </div>
                            <p className="balls__right-title">
                                Новинки и эксклюзивы каждую неделю
                            </p>
                            <p className="balls__right-text">
                                Выбирайте в каталоге фильмы и сериалы <br/>
                                по настроению, включайте спортивную трансляцию <br/>
                                или один из десятков телеканалов
                            </p>
                        </div>
                        <div className="balls__left">
                            <div className="balls__left-img">
                                <img src="https://avatars.mds.yandex.net/get-media-infra/3756502/f1eac644-e55e-4a15-8dff-c8edc4be97fa/universal-image-x1" alt="#"/>
                            </div>
                        </div>
                    </div>
                    <div className="balls__card">
                        <div className="balls__right">
                            <p className="balls__right-title">
                                Кешбэк баллами <br/> с Яндекс Пэй
                            </p>
                            <p className="balls__right-text">
                                1 балл = 1 <br/>
                                Получайте баллы за покупки, игры и активности. Тратьте на удовольствия — еду, развлечения, поездки и шопинг в сервисах Яндекса
                            </p>
                        </div>
                        <div className="balls__left">
                            <div className="balls__left-img">
                                <img src="https://avatars.mds.yandex.net/get-media-infra/3752625/dc5dc2cf-7f28-4447-838b-45ece4354da6/universal-image-x3" alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"music"}>

            </section>
        </section>
    );
};

export default Balls;