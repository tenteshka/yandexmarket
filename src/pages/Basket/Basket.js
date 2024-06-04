import React from 'react';

const Basket = () => {
    return (
        <section className={"basket"}>
            <div className="container">
                <h2 className="basket__title">
                    Карзина
                </h2>
                <div className="basket__labels">
                    <label className="basket__label">
                        <span className={"basket__inputs"}>
                          <input type="checkbox" placeholder={"market"} className="basket__input"></input>
                        </span>
                        <span>Выбрать все</span>
                    </label>
                    <button className="basket__btn">
                        <svg data-auto="icon-cross" id="cross" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M17 3L3 17" stroke="#9E9B98" ></path>
                            <path d="M17 17L3 3" stroke="#9E9B98" ></path>
                        </svg>
                        <span>Удалить выбранные</span>
                    </button>
                </div>
                <div className="basket__row">
                    <div className="basket__decor">
                        <div className="basket__line">
                        </div>
                        <div className="basket__products">
                            <div className="basket__right">
                                <div className="basket__product">
                                    <div className="basket__product-right">
                                        <label>
                                <span>
                                  <input type="checkbox"/>
                                </span>
                                        </label>
                                    </div>
                                    <div className="basket__product-img">
                                        <img src="https://avatars.mds.yandex.net/get-mpic/1750207/img_id3747828772563930436.jpeg/100x100" alt="#"/>
                                    </div>
                                    <div className="basket__product-center">
                                        <h3 className="basket__product-text">
                                            Кроссовки Patrol, Женские, Цвет белый, размер 40
                                        </h3>
                                        <div className="basket__product-p">
                                            <p className={"basket__product-size"}>
                                                Размер: 40
                                            </p>
                                            <p className={"basket__product-color"}>
                                                Цвет: белый
                                            </p>
                                        </div>
                                        <p className={"basket__product-market"}>
                                            Яндекс Маркет
                                        </p>
                                        <div className="basket__product-icons">
                                            <button className="basket__product-icon">
                                            <span className={"basket__product-heart"}>
                                                <svg aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                    <path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path>
                                                </svg>
                                            </span>
                                            </button>
                                            <button className="basket__product-icon">
                                              <span className={"basket__product-cross"}>
                                                <svg data-auto="icon-cross" id="cross" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#9e9b98">
                                                    <path d="M17 3L3 17" stroke="#9E9B98" stroke-width="2" stroke-linecap="round"></path>
                                                    <path d="M17 17L3 3" stroke="#9E9B98" stroke-width="2" stroke-linecap="round"></path>
                                                </svg>
                                              </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basket__left">
                                <p className="basket__pay" style={{color:"#006933"}}>
                                    С картой
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                        <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                    </svg>
                                    Пэй
                                </p>
                                <p className="basket__price" style={{color:"#006933"}}>
                                    2 660 p
                                </p>
                                <span>
                            без:&nbsp; 2 955 p
                        </span>
                                <div className="basket__number">
                                    <button  className="basket__number-minus">-</button>
                                    <p className="basket__number-count">1</p>
                                    <button className="basket__number-plus">+</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="basket__general">
                        <div className="basket__general-btns">
                            <button className="basket__general-btn">
                                <span>
                                    Перейти к оформлению
                                </span>
                            </button>
                        </div>
                        <div className="basket__general-totals">
                            <div className="basket__general-total">
                                <p className="basket__general-kg">
                                    Всего: 2 товара
                                    <span>
                                     2 кг
                                </span>
                                </p>
                                <p className={"basket__general-n"}>
                                    8 155 p
                                </p>
                            </div>
                            <div className="basket__line">
                            </div>
                            <div className="basket__general-discount">
                                <p className="basket__general-d">
                                    Скидки
                                </p>
                                <span>
                                    - 3 639
                                </span>
                            </div>
                            <div className="basket__general-labels">
                                <label>
                                    <input placeholder="Промокод" className="basket__general-code" autoComplete="off"></input>
                                    Применить
                                </label>
                            </div>
                            <div className="basket__general-pays">
                               <h3 className={"basket__general-pay"}>
                                   С картой 
                                   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="12" height="12" viewBox="0 0 10 10" fill="none">
                                       <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                       <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="1"></rect>
                                   </svg>
                                    Пэй:
                               </h3>
                                <span>
                                  4 157 p
                                </span>
                            </div>
                            <div className="basket__general-map">
                                <h3 className="basket__general-text">
                                    Без карты:
                                </h3>
                                <span>
                                    4 529 p
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;