import React from 'react';

const Orders = () => {
    return (
        <section className={"orders"}>
            <div className="container">
                <h1 className="orders__title">
                    Мои заказы
                </h1>
                <div className="orders__help">
                    <div className="orders__right">
                        <p className={"orders__text"}>
                            Здесь будет храниться история ваших заказов
                        </p>
                        <div className="orders__btns">
                            <a href="#">
                                <button className={"orders__button"}>
                                    <span>
                                        Продолжить покупки
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="orders__left">
                        <h2 className="orders__left-text">
                            Помощь
                        </h2>
                        <div className="orders__left-questions">
                            <p className={"orders__left-desc"}>
                                <a href="#">Как отслеживать доставку заказа?</a>
                            </p>
                            <p className={"orders__left-desc"}>
                                <a href="#">Как изменить дату или место доставки курьером?</a>
                            </p>
                            <p className={"orders__left-desc"}>
                                <a href="#">Как вернуть товар?</a>
                            </p>
                        </div>

                        <div className="orders__left-us">
                            <h4 className={"orders__left-no"}>
                                Не нашли ответа? Напишите нам
                            </h4>
                            <div className="orders__left-btns">
                                <a href="#">
                                    <button className={"orders__left-btn"}>
                                    <span>
                                       Задать вопрос
                                    </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;