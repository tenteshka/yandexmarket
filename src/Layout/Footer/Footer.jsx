import React from 'react';

const Footer = () => {
    return (
    <footer className={"footer"}>
        <div className="container">
            <div className="footer__row">
             <div className="footer__left">
            <h2 className="footer__title">
            Покупателям
            </h2>
        <ul className="footer__left-menu">
            <li className="footer__item">
                <a href="">Как выбрать товар</a>
            </li>
            <li className="footer__item">
                <a href="">Оплата и доставка</a>
            </li>
            <li className="footer__item">
                <a href="">Обратная связь</a>
            </li>
            <li className="footer__item">
                <a href="">Покупайте как юрлицо</a>
            </li>
            <li className="footer__item">
                <a href="">О сервисе</a>
            </li>
            <li className="footer__item">
                <a href="">Участие  в иследовоньях</a>
            </li>
            <li className="footer__item">
                <a href="">Возвраты</a>
            </li>
        </ul>
        </div>
        <div className="footer__middle">
            <div className="footer__middle-menu">
                <h2 className="footer__title">
                    Продавцам
                </h2>
                <li className="footer__item">
                    <a href="">Личный кабинет продавца</a>
                </li>
                <li className="footer__item">
                    <a href="">Продавайте на Маркете</a>
                </li>
                <li className="footer__item">
                    <a href="">Документация для партнёров</a>
                </li>
                <li className="footer__item">
                    <a href="">Сайт для партнёров</a>
                </li>
            </div>
         </div>
        <div className="footer__center">
            <ul className="footer__center-menu">
                <h2 className="footer__title">
                    Сотрудничество
                </h2>
                <li className="footer__item">
                    <a href="">Новости компании</a>
                </li>
                <li className="footer__item">
                    <a href="">Партнёрская программа</a>
                </li>
                <li className="footer__item">
                    <a href="">Программа для блогеров</a>
                </li>
                <li className="footer__item">
                    <a href="">Производителям</a>
                </li>
                <li className="footer__item">
                    <a href="">Пуект выдачи заказов</a>
                </li>
                <li className="footer__item">
                    <a href="">Маркет нанимает</a>
                </li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__right-advisor">
                <div className="footer__right-basket">

                </div>
                <p className="footer__right-titles">
                    Советник находит нужные вам товары <br/> по более выгодной цене. <a href="">Подробнее</a>
                </p>
            </div>
                <p className="footer__right-wtmSs">
                    548 151 553 предложения от <a href="/">58 998 магазинов</a> <br/> Обновлено 05.04.2024 в 00:42 по московскому времени.
                </p>
                <div className="footer__right-icon">
                </div>
        </div>
    </div>
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom-right">
                <p className="footer__bottom-descs">
                    <a href="">Статистика</a>
                    <a href="">Пользовательское соглашение</a>
                </p>

            </div>
            <div className="footer__left">
                <p className="footer__left-data">
                    © 2024  ООО « <a href="//https://market.yandex.ru/">ЯНДЕКС</a>
                </p>
                <p className="footer__left-company">
                    <span>Проект компании</span>
                    <a href="https://yandex.ru/all">ЯНДЕКС</a>
                </p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;