import React from 'react';
const Map = () => {
    return (
        <section className={"map"}>
            <div className={"container"}>
                    <div className="map__row">
                        <div className="map__right">
                            <p className={"map__text"}>
                                Выберите пункт выдачи
                            </p>
                            <div className="map__labels">
                                <label htmlFor="#" className={"map__label"}>
                                    <input className={"map__input"} type="radio"/>
                                    <div className="map__label-desc">
                                          <span>
                                    Пункт выдачи
                                </span>
                                    </div>
                                </label>
                                <label htmlFor="#" className="map__label">
                                    <input className={"map__input"} type="radio"/>
                                    <div className="map__label-desc">
                                          <span>
                                Курьер
                                </span>
                                    </div>
                                </label>
                            </div>
                            <div className="map__address">
                                <label htmlFor="#"><input type="text" placeholder={"Найти адрес"}/></label>
                            </div>
                            <div className="map__bring">
                                <button className="map__btn">
                                    <span>
                                        Привезти сюда
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="map__left">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7087154749365!2d74.59305337595946!3d42.87899187114928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb73ef59391dd%3A0xd9a25f1216632551!2zSVQtUlVOIC0g0LDQutCw0LTQtdC80LjRjyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C-INGB0YLQsNC90LTQsNGA0YLQsA!5e0!3m2!1sru!2skg!4v1717153158953!5m2!1sru!2skg" width="600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                       </div>
                </div>
        </section>
    );
};

export default Map;