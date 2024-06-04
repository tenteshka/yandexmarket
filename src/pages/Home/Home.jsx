import React, {useEffect} from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/products/products";

const Home = () => {
    const {data} = useSelector(store => store.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return (
        <section className={"home"}>
            <div className="container">
                <div className="home__row">
                    <div className="home__left">
                        {
                            data.length ?
                            data?.map((item) => (
                                <div className="home__left-card">
                                    <svg className={"home__left-svg"} aria-hidden="true" id="wishlist"
                                         viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         style={{cursor: "pointer"}}>
                                        <path
                                            d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z"
                                            stroke="currentColor" fill="#fff" stroke-width="2"></path>
                                    </svg>
                                    <div className="home__left-img">
                                        <img src={item.image} alt="#" width={"100%"}/>
                                    </div>
                                    <h3 className="home__left-title">
                                        {item.title}
                                    </h3>
                                    <p className="home__left-price">
                                        {item.priceOne} p
                                        <span>
                                {item.priceTwo} p
                                </span>
                                    </p>
                                </div>
                            )) :
                                <h2>Нет товаров</h2>
                        }
                    </div>
                    <div className="home__right" style={{background: "rgb(200 215 221)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Для хорошего звука
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background: "rgb(200 215 221)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin: "0  0  0 5px"}}/>
                        </button>
                        {
                            data.length ?
                            data?.map ((item) => (
                                <div className="home__right-card">
                                    <div className="home__right-img">
                                        <img src={item.image} alt="#" width={"100%"}/>
                                    </div>
                                    <p className="home__left-price">
                                        {item.priceOne}
                                        <span>
                                            {item.priceTwo}
                                    </span>
                                    </p>
                                </div>
                            )):
                                <h2>Нет товара</h2>
                        }
                    </div>
                    <div className="home__right" style={{background: "rgb(200 215 221)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Для хорошего звука
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background: "rgb(200 215 221)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin: "0  0  0 5px"}}/>
                        </button>
                        {
                            data.length ?
                                data?.map ((item) => (
                                    <div className="home__right-card">
                                        <div className="home__right-img">
                                            <img src={item.image} alt="#" width={"100%"}/>
                                        </div>
                                        <p className="home__left-price">
                                            {item.priceOne}
                                            <span>
                                            {item.priceTwo}
                                    </span>
                                        </p>
                                    </div>
                                )):
                                <h2>Нет товара</h2>
                        }
                    </div>
                    <div className="home__left">
                        {
                            data.length ?
                                data?.map((item) => (
                                    <div className="home__left-card">
                                        <svg className={"home__left-svg"} aria-hidden="true" id="wishlist"
                                             viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             style={{cursor: "pointer"}}>
                                            <path
                                                d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z"
                                                stroke="currentColor" fill="#fff" stroke-width="2"></path>
                                        </svg>
                                        <div className="home__left-img">
                                            <img src={item.image} alt="#" width={"100%"}/>
                                        </div>
                                        <h3 className="home__left-title">
                                            {item.title}
                                        </h3>
                                        <p className="home__left-price">
                                            {item.priceOne} p
                                            <span>
                                {item.priceTwo} p
                                </span>
                                        </p>
                                    </div>
                                )) :
                                <h2>Нет товаров</h2>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;