import React from 'react';
import {Link} from "react-router-dom";

const Favorites = () => {
    return (
        <section className={"favorites"}>
            <div className="container">
                <h1 className="favorites__title">
                    Избранное
                </h1>
                <div className="favorites__row">
                    <div className="favorites__card">
                            <Link to={"/description"}>
                                <svg className={"home__left-svg"} aria-hidden="true" id="wishlist" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{cursor:"pointer"}}><path d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z" stroke="currentColor" fill="#fff" stroke-width="2"></path></svg>
                                <div className="favorites__img">
                                    <img src="https://avatars.mds.yandex.net/get-mpic/5221948/img_id7755588171427913501.jpeg/180x240" alt="#"/>
                                </div>
                                <div className="favorites__pays">
                                    <div className="favorites__pay" style={{color:"#006933"}}>
                                        С картой
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path>
                                            <rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor" stroke-width="0.5"></rect>
                                        </svg>
                                        Пэй
                                    </div>
                                    <p className="favorites__price" style={{color:"#006933"}}>
                                        2 564 p
                                        <span>
                                            без:&nbsp; 2 849 p
                                        </span>
                                    </p>
                                    <h3 className={"favorites__text"}>PATROL</h3>
                                    <p className={"favorites__desc"}>Кроссовки</p>
                                </div>
                            </Link>
                            <button className="spilt__right-btn">
                                В корзину
                            </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Favorites;