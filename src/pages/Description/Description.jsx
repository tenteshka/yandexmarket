import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
const Description = () => {
    return (
        <section className={"description"}>
            <div className="container">
                <div className="description__top">
                    <div className="description__label">
                        <label className={"description__new"}>
                            <input type="radio"  />
                            Одежда, обувь и аксессуары
                            <span>
                                <MdKeyboardArrowRight size={20}/>
                            </span>
                        </label>
                        <label className={"description__new"}>
                            <input type="radio"/>
                            Обувь для взрослых
                            <span>
                                <MdKeyboardArrowRight size={20}/>
                            </span>
                        </label>
                        <label className={"description__new"}>
                            <input type="radio" />
                            Кроссовки и кеды для взрослых
                            <span>
                                <MdKeyboardArrowRight size={20}/>
                            </span>
                        </label>
                        <label className={"description__new"}>
                            <input type="radio"/>
                            PATROL
                            <span>
                                <MdKeyboardArrowRight size={20}/>
                            </span>
                        </label>
                    </div>
                    <div className="description__icons">
                        <svg aria-hidden="true" id="comparison" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="17" height="17" className="_10sQx"><g>
                            <path d="M.75 9.5a8.753 8.753 0 0 0 5.589 8.161A8.75 8.75 0 1 0 17.662 6.338 8.75 8.75 0 0 0 .75 9.5z" fill="currentColor" stroke-opacity=".5" stroke-width=".5"></path>
                            <path d="M9.499 18a8.5 8.5 0 0 0 8.486-8.987 6.5 6.5 0 1 1-8.973 8.973c.16.01.323.014.487.014zm5.488-11.986a8.5 8.5 0 0 0-8.973 8.973 6.5 6.5 0 1 1 8.973-8.973z" fill="#fff"></path>
                            <path d="M9.5 16a6.5 6.5 0 0 0 6.358-7.858 6.5 6.5 0 0 0-7.716 7.716A6.53 6.53 0 0 0 9.5 16z" fill="#fff"></path>
                            <path d="M9.5 16a6.5 6.5 0 0 0 6.358-7.858 6.5 6.5 0 0 0-7.716 7.716A6.53 6.53 0 0 0 9.5 16z" fill="#21201F" fill-opacity=".15"></path></g>
                        </svg>
                        <span>
                            Сравнить
                        </span>
                        <svg aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="17" height="17" className="_10sQx" >
                            <path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path>
                        </svg>
                        <span>
                            В избранное
                        </span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="share" viewBox="0 0 17 17" fill="none" width="18" height="18" className="_2AfKQ">
                            <path d="M13.6003 7.03693V12.2369C13.6003 13.3703 12.6669 14.3036 11.5336 14.3036H6.20026C5.06693 14.3036 4.13359 13.3703 4.13359 12.2369V7.03693H2.93359V12.2369C2.93359 14.0369 4.40026 15.5036 6.20026 15.5036H11.5336C13.3336 15.5036 14.8003 14.0369 14.8003 12.2369V7.03693H13.6003Z" fill="#222222"></path>
                            <path d="M8.26706 3.63698V11.1037H9.53372V3.63698L11.5337 5.70365L12.4004 4.83698L9.00039 1.37032L8.93372 1.30365L5.46706 4.77032L5.40039 4.83698L6.26706 5.70365L8.26706 3.63698Z" fill="#222222"></path>
                        </svg>
                        <span>
                            Поделиться
                        </span>
                    </div>
                </div>
                <div className="description__row">
                    <div className="description__left">
                        <img src="https://avatars.mds.yandex.net/get-mpic/5217165/img_id2781287196102942210.jpeg/600x800" alt="#"/>
                    </div>
                    <div className="description__center">
                        <h1 className="description__center-title">
                            Кроссовки PATROL, размер 42, черный
                        </h1>
                        <div className="description__center-table">
                            <h3 className={"description__center-p"}>
                              <span>
                                Размер
                              </span>
                                <span>
                                    : 41
                                </span>
                            </h3>
                            <span className={"description__center-s"}>
                                Таблица размеров
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" fill-rule="evenodd" d="M10.007 4.003L18.004 12l-7.997 7.997-1.414-1.414L15.176 12 8.593 5.417z"></path></svg>
                            </span>
                        </div>
                        <div className="description__center-labels">
                                <label className={"description__center-label"}>
                                    <input type="radio"/>
                                    <span>
                                    41
                                </span>
                                </label>
                                <label className={"description__center-label"}>
                                    <input type="radio"/>
                                    <span>
                                    42
                                </span>
                                </label>
                                <label className={"description__center-label"}>
                                    <input type="radio"/>
                                    <span>
                                    43
                                </span>
                                </label>
                                <label className={"description__center-label"}>
                                    <input type="radio"/>
                                    <span>
                                    44
                                </span>
                                </label>
                        </div>
                        <div className="description__center-description">
                                <h3 className={"description__center-text"}>
                                    Описание
                                </h3>
                                <p className={"description__center-desc"}>
                                    Встречайте весну с новой мужской коллекцией от известного бренда PATROL! Оригинальные мужские текстильные кроссовки прекрасно подойдут для теплой весенней погоды. Верх модели выполнен из высококачественного текстиля, что обеспечивает хорошую вентиляцию стопы. Удобная подошва дарит комфорт и наслаждение от долгих прогулок на свежем воздухе и занятий на спортивной площадке.В коллекции Весна Лето бренда Патрол широко представлены мужские сандалии, кеды, легкие кроссовки, модные сабо, слипоны. Разная полнота моделей в сочетании с 40,41,42,43,44 размером позволяет подобрать обувь на широкую и узкую ногу для прогулок, занятия спортом, отдыха, путешествий. Обувь белого, бежевого, синего, черного цвета в сочетании с джинсами, легкими брюками подходит под разные стили в одежде. Кроссовки из натуральной кожи обеспечивают комфорт и удобство для занятия спортом в зале и на улице. Текстильные кеды на лето прекрасно подходят для отдыха и отпуска. Новинки коллекции -модные топсайдеры из натуральных материалов . Приятных покупок и ждем Ваших отзывов. Создавая лучшее для вас, команда Patrol.
                                </p>
                                <p className={"description__center-read"}>
                                    Читать далее
                                </p>
                        </div>
                        <div className="description__center-short">
                            <h3 className="description__center-o">
                                Коротко о товаре
                            </h3>
                            <div className="description__characteristics">
                                <div className="description__characteristic">
                                    <div className="description__characteristics-text">
                                        Артикул Маркета
                                    </div>
                                    <div className="description__characteristics-line">

                                    </div>
                                    <div className={"description__characteristics-num"}>
                                        4899114497
                                    </div>
                                </div>
                                  <div className="description__characteristic">
                                      <div className="description__characteristics-text">
                                          Цвет товара
                                      </div>
                                      <div className="description__characteristics-line">

                                      </div>
                                      <div className={"description__characteristics-num"}>
                                          черный
                                      </div>
                                  </div>
                                  <div className="description__characteristic">
                                      <div className="description__characteristics-text">
                                          Пол
                                      </div>
                                      <div className="description__characteristics-line">

                                      </div>
                                      <div className={"description__characteristics-num"} style={{color:"#04b"}}>
                                          мужской
                                      </div>
                                  </div>
                                  <div className="description__characteristic">
                                      <div className="description__characteristics-text">
                                          Материал верха
                                      </div>
                                      <div className="description__characteristics-line">

                                      </div>
                                      <div className={"description__characteristics-num"}  style={{color:"#04b"}}>
                                          текстиль
                                      </div>
                                  </div>
                                  <div className="description__characteristic">
                                      <div className="description__characteristics-text">
                                          Материал подкладки
                                      </div>
                                      <div className="description__characteristics-line">

                                      </div>
                                      <div className={"description__characteristics-num"}  style={{color:"#04b"}}>
                                            текстиль
                                        </div>
                                  </div>
                          </div>
                        </div>
                        <div className="description__bottom">
                            <p className={"description__bottom-all"}>
                            Все характеристики
                            </p>
                            <a href="#">
                                Все товары
                                <span>
                                 PATROL
                                </span>
                            </a>
                            <div className="description__bottom-a">
                                <a href="#">
                                    <img src="https://avatars.mds.yandex.net/get-mpic/11417897/img_id8904032746217964416.png/orig" alt="#"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="description__right">
                        <div className="description__right-price">
                            <div className="description__right-pays">
                                С картой
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" data-auto="ya-pay-icon"><path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path><rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect></svg>
                                Пэй
                            </div>
                            <div className={"description__right-pay"}>
                                <p className="description__right-p">
                                    2 177 p
                                    <span className={"description__right-without"} style={{color:"white"}}>
                                    –51 %
                                </span>
                                </p>
                                <p className={"description__right-numbers"}>
                                     <span className={"description__right-number"}>
                                      без:&nbsp; 2 199 p
                                    </span>
                                    <p className={"description__right-span"}>
                                      4 399 p
                                    </p>
                                </p>
                            </div>
                            <ul className={"description__right-mays"}>
                                <li>
                                    <span className="description__right-may">22 мая</span>
                                    <span className="description__right-k">,&nbsp;курьер Маркета</span>
                                    <span className="description__right-k"> •</span>
                                    <span className={"description__right-l"}> 0 &nbsp;p</span>
                                </li>
                                <li>
                                    <span className="description__right-may">22 мая</span>
                                    <span className="description__right-k">, &nbsp;курьер Маркета</span>
                                    <span className="description__right-k"> •</span>
                                    <span className={"description__right-l"}> 0 &nbsp;p</span>
                                </li>
                            </ul>
                            <div className="description__right-shop">
                                <BsShop size={15}/>
                                <span>Яндекс Маркет</span>
                                <button className={"description__right-dot"}>
                                    <BsThreeDots />
                                </button>
                            </div>
                            <div className="description__right-btns">
                                <button className={"description__btns-right"}>
                                    <span>
                                        Купить сейчас
                                    </span>
                                </button>
                                <button className={"description__btns-left"}>
                                    <span>
                                        В корзину
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="description__right-bottom">
                            <button className={"description__right-can"}>
                                    <span className={"description__right-hanger"}>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="36" height="36" rx="18" fill="#E8E7E5"></rect>
                                            <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#21201F" stroke-opacity="0.07"></rect>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1875 12.8125C15.1875 11.2592 16.4467 10 18 10H18.047C19.5743 10 20.8125 11.2382 20.8125 12.7655C20.8125 13.5728 20.4597 14.3398 19.8468 14.8652L18.7778 15.7815C18.6975 15.8503 18.6574 15.885 18.6296 15.9118C18.6289 15.9124 18.6283 15.9131 18.6276 15.9137C18.6276 15.9146 18.6275 15.9155 18.6275 15.9164C18.6252 15.9549 18.625 16.008 18.625 16.1137V16.3064C18.625 16.4285 18.6253 16.4905 18.6282 16.5353C18.6283 16.5365 18.6284 16.5376 18.6285 16.5387C18.6293 16.5393 18.6302 16.54 18.6311 16.5407C18.6668 16.568 18.7182 16.6026 18.8198 16.6704L23.7873 19.982C24.7294 20.6101 25.4744 21.1068 25.9875 21.5222C26.2482 21.7333 26.4763 21.9446 26.647 22.1634C26.8186 22.3832 26.9614 22.6475 26.9891 22.9583C27.0322 23.4411 26.8866 23.9218 26.583 24.2997C26.3875 24.5429 26.1221 24.6836 25.8574 24.7713C25.594 24.8586 25.287 24.9079 24.953 24.939C24.2956 25 23.4002 25 22.268 25H13.7357C12.6029 25 11.7071 25 11.0495 24.9389C10.7154 24.9079 10.4083 24.8586 10.1448 24.7713C9.88 24.6835 9.61458 24.5428 9.41907 24.2995C9.11539 23.9216 8.96988 23.4408 9.01308 22.9579C9.04089 22.647 9.18374 22.3828 9.35547 22.1629C9.52633 21.9442 9.75454 21.7328 10.0154 21.5218C10.5288 21.1063 11.2743 20.6096 12.217 19.9816L16.4035 17.1924L17.0965 18.2326L12.9404 21.0017C11.9608 21.6543 11.2644 22.1191 10.8017 22.4935C10.5717 22.6796 10.4268 22.8221 10.3405 22.9324C10.2712 23.0212 10.2594 23.0643 10.258 23.0707C10.244 23.2307 10.2922 23.39 10.3926 23.5154C10.3973 23.52 10.431 23.5493 10.5379 23.5847C10.6709 23.6288 10.8705 23.667 11.165 23.6943C11.7577 23.7493 12.595 23.75 13.7721 23.75H22.2316C23.4081 23.75 24.245 23.7493 24.8374 23.6943C25.1319 23.667 25.3313 23.6288 25.4642 23.5848C25.5958 23.5412 25.6165 23.5068 25.6087 23.5166C25.7096 23.391 25.7581 23.2313 25.7442 23.0708C25.7428 23.0644 25.731 23.0213 25.6617 22.9326C25.5755 22.8222 25.4308 22.6798 25.2009 22.4937C24.7386 22.1193 24.0426 21.6545 23.0637 21.0019L18.1264 17.7105C18.1135 17.7018 18.1002 17.693 18.0865 17.684C17.9395 17.5868 17.7539 17.4641 17.6215 17.2858C17.5481 17.187 17.4897 17.0779 17.4482 16.9621C17.3733 16.7529 17.3742 16.5305 17.3749 16.3542C17.3749 16.3379 17.375 16.3219 17.375 16.3064V16.1137C17.375 16.1003 17.375 16.0865 17.3749 16.0724C17.3744 15.9195 17.3737 15.7265 17.4315 15.541C17.4636 15.4379 17.5088 15.3395 17.5662 15.248C17.6695 15.0834 17.8165 14.9583 17.9329 14.8592C17.9437 14.8501 17.9541 14.8411 17.9643 14.8324L19.0333 13.9162C19.3692 13.6282 19.5625 13.2079 19.5625 12.7655C19.5625 11.9285 18.884 11.25 18.047 11.25H18C17.1371 11.25 16.4375 11.9496 16.4375 12.8125V13.125H15.1875V12.8125Z" fill="black"></path>
                                        </svg>
                                    </span>
                                <div className="description__right-text">
                                    <p  className="description__right-t">
                                        Можно примерить
                                    </p>
                                    <p className={"description__right-d"}>
                                        Оплачивайте только то, что подошло
                                    </p>
                                </div>
                                <span>
                                        <svg id="chevronPolka" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" className="_22M9t"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.95006 2.88128C5.29177 2.53957 5.84579 2.53957 6.1875 2.88128L11.3062 8L6.1875 13.1187C5.84579 13.4604 5.29177 13.4604 4.95006 13.1187C4.60836 12.777 4.60836 12.223 4.95006 11.8813L8.83135 8L4.95006 4.11872C4.60836 3.77701 4.60836 3.22299 4.95006 2.88128Z" fill="#9E9B98"></path></svg>
                                    </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;