import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <section className={"home"}>
            <div className="container">
                <div className="home__row">
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5023672/img_id7951034824791931225.jpeg/600x800" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Светодиодный прожектор на солнечных батареях c датчиком движения GLANZEN FAD-0005-6-solar
                            </h3>
                            <p className="home__left-price">
                                774p
                                <span>
                                    790p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/3980374/img_id5380112523793831117.jpeg/600x800" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Постельное белье однотонное Urban Family (аналог икеа), Шторм, 2 спальное с европростыней, наволочки на молнии 70х70, 100% хлопок, перкаль
                            </h3>
                            <p className="home__left-price">
                                2592p
                                <span>
                                    2700p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="data:image/jpeg;base64,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" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Пяткоудерживатели 2 штуки / вкладыши в обувь от мозолей / подпяточник, запяточник / стельки для обуви, в туфли / уменьшение размера обуви
                            </h3>
                            <p className="home__left-price">
                                196p
                                <span>
                                    270p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://binar-shop.ru/upload/iblock/f85/f8576eb1d4260e3d16e7094c1e29f2f0.jpg" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Фотоаппарат Fujifilm Instax Mini 12 Pastel Blue (голубой)
                            </h3>
                            <div className="home__left-price">
                                8890p
                                <span>
                                    15990p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://images.satu.kz/220125646_samsung-galaxy-a55.jpg" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон Samsung Galaxy A55 5G 8/256 ГБ, Dual: nano SIM + eSIM, navy
                            </h3>
                            <p className="home__left-price">
                                37490p
                                <span>
                                    47990p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="data:image/jpeg;base64,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" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Очки для вождения антиблик Gilmor HD Vision
                            </h3>
                            <p className="home__left-price">
                                228p
                                <span>
                                    590p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4578218/2a0000018b70d890df007fdbd2f7eabe1a93/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Пауэрбанк прозрачный внешний аккумулятор 10000 mAh 22.5W power bank двусторонняя быстрая зарядка прозрачном корпусе
                            </h3>
                            <p className="home__left-price">
                                1 959 p
                                <span>
                                    2 999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                        <div className="home__left-img">
                            <img src="https://avatars.mds.yandex.net/get-mpic/1767083/img_id3371733737277149762.jpeg/300x400" alt="#" width={"100%"}/>
                        </div>
                        <h3 className="home__left-title">
                            Футболка Paw Print
                        </h3>
                        <p className="home__left-price">
                            1146p
                            <span>
                                    1600p
                            </span>
                        </p>
                    </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(200 215 221)"}}>
                        <div className="home__right-top">
                                <p className={"home__right-text"}>
                                Рекомендуем вам
                                </p>
                                <h3 className="home__right-title">
                                    Для хорошего звука
                                </h3>
                        </div>
                            <button className={"home__right-btn"} style={{background:"rgb(200 215 221)"}}>
                                Все
                                <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                            </button>
                          <div className="home__right-card">
                                        <div className="home__right-img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/12219175/2a0000018ef7bc9cdd0c5fd1ff4fa7cb575e/300x400" alt="#" width={"100%"}/>
                                        </div>
                                        <p className="home__left-price">
                                           2 767 p
                                            <span>
                                      9 999 p
                                    </span>
                                        </p>
                          </div>
                          <div className="home__right-card">
                          <div className="home__right-img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/3912211/2a0000018f1bf9aee5b3219a4bf6136c09a4/300x400" alt="#" width={"100%"}/>
                                        </div>
                                        <p className="home__left-price">
                                           10 239 p
                                            <span>
                                           11 970 p
                                        </span>
                                        </p>
                                    </div>
                          <div className="home__right-card">
                                        <div className="home__right-img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/3916156/img_id8001286000885745991.jpeg/300x400" alt="#" width={"100%"}/>
                                        </div>
                                        <p className="home__left-price" style={{color:"black"}}>
                                            7 545 p
                                        </p>
                                    </div>
                          <div className="home__right-card">
                                        <div className="home__right-img">
                                            <img src="https://avatars.mds.yandex.net/get-mpic/11417817/2a0000018c890375fc98d08cc4c6fb752790/300x400" alt="#" width={"100%"}/>
                                        </div>
                                        <p className="home__left-price">
                                           6 618 p
                                            <span>
                                       7 170 p
                                    </span>
                                        </p>
                                    </div>
                        </div>
                    <div className="home__right" style={{background:"rgb(246 214 195)"}} >
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Уютная спальня
                            </h3>
                        </div>
                        <button className={"home__right-btn"}  style={{background:"rgb(246 214 195)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5268943/img_id8953966933831462107.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                629 p
                                <span>
                                 1 000 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1927422/img_id7656206470362133357.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               3 136 p
                                <span>
                                  5 000 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11379035/2a0000018c812e462f4cc51e8144e9156e77/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              3 257 p
                                <span>
                                5 500 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/2008455/img_id2701049158303051124.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               1 175 p
                                <span>
                                    1 500 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/933699/img_id3496366801616849067.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Значок. Имперский флаг
                            </h3>
                            <p className="home__left-price">
                                326 p
                                <span>
                                 500 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5235334/img_id2194385779860219645.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Плед «Кола»
                            </h3>
                            <p className="home__left-price">
                                2 828p
                                <span>
                                    2 886p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4219828/img_id1048772964459889734.jpeg/300x400" alt="#"/>
                            </div>
                            <h3 className="home__left-title">
                                Плед Industry строительство                            </h3>
                            <p className="home__left-price">
                                4 792 p
                                <span>
                                   5 255   p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5341376/2a0000018b15af2e6e415a5d4521bb4008ac/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Мини вентилятор для телефона Lightning, голубой
                            </h3>
                            <div className="home__left-price">
                                185 p
                                <span>
                                    659p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5219097/img_id5134624712642624135.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки Kyle
                            </h3>
                            <p className="home__left-price">
                                587 p
                                <span>
                                    1 200p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1565610/img_id7078021285845940191.png/300x400" alt="#"/>
                            </div>
                            <h3 className="home__left-title">
                                Напольные умные весы c bmi, электронные напольные весы для Xiaomi, iPhone, Android, черные
                            </h3>
                                <p className="home__left-price">
                                    583 p
                                    <span>
                                    999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5032583/2a0000018e6a78739f3d3662da3c46f4fc79/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                X-3 SONIC Toothbrush Smarter Электрическая зубная щетка ультразвуковая / цвет розовый
                            </h3>
                                <p className="home__left-price">
                                989 p
                                <span>
                                     1456 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12301605/2a0000018d3cb9bedeae4208a0efd4d97417/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Термос с LCD дисплеем / Термос с датчиком (индикатором) температуры / Термобутылка / Автокружка/ Розовый                            </h3>
                            <p className="home__left-price">
                                405 p
                                <span>
                                    899p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018e426a0dcf1d98782a7c9b105545/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Постельное белье однотонное Urban Family (аналог икеа), Олива, 2 спальное с европростыней, наволочки на молнии 50х70, 100% хлопок, перкаль                            </h3>
                            <p className="home__left-price">
                                2 592 p
                                <span>
                                     2 700   p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/10637301/2a0000018af86eb456d2b6569acb9745cd80/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Ковер Большой Лебовски-1 Портрет 1.3 x 1.9 м.
                            </h3>
                            <p className="home__left-price">
                             12 730 p
                                <span>
                                    13 674 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5235688/img_id2096993808803356072.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Накладки для ремонта задников обуви самоклеящиеся, от мозолей, пяткодержатель /запяточник, экокожа, 4 штуки, черные                            </h3>
                            <p className="home__left-price">
                                 181 p
                                <span>
                                    250 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4881627/2a0000018a45bb4d5f3f950280f5db707030/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Ложка десертная из нержавеющей стали "Лопатка", набор из 6 штук                            </h3>
                            <div className="home__left-price">
                                366 p
                                <span>
                                    850 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4408567/img_id6753267031138511605.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Пяткоудерживатель для кроссовок 4шт                            </h3>
                            <p className="home__left-price">
                              340 p
                                <span>
                                   655 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11621477/2a0000018d36c3f802311adcd7207519b70a/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Светодиодный уличный прожектор GLANZEN 30 Вт 6500К IP65 FAD-0003-30-SL                            </h3>
                            <p className="home__left-price">
                               250 p
                                <span>
                                    300 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12476287/img_id1382018612380841860.png/optimize" alt="#" width="100%"/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон realme Note 50 4/128 ГБ RU, Dual nano SIM, полуночно-черный
                            </h3>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                                 6 849 p
                                <span>
                                   8 999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5175047/2a0000018e28781a62c9eab89ea09c48cf5f/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Футболка Соль
                            </h3>
                            <p className="home__left-price">
                               1 135 p
                                <span>
                                    2 000 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(212 211 226)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Декор в саду
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(212 211 226)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11520282/2a0000018dc1945089bfd702dd9827c291c3/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               697 p
                                <span>
                                    998 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4553373/2a0000018af56185e7dd5a240275a8c454bf/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              3 465 p
                                <span>
                                 7 000 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7658590/img_id8891435933415826331.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                                1 923 p
                                <span>
                                  2 884 p
                                 </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1704682/img_id1845390696870132912.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              2 078 p
                                <span>
                                 5 500 p
                                 </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(199 229 203)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Сильные руки
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(199 229 203)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4255269/img_id7156521500020032953.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              584 p
                                <span>
                                  1 990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1724439/img_id4838047101259761477.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               484 p
                                <span>
                               550 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5214322/img_id2901154230135327093.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              1376 p
                                <span>
                                    1390 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4525599/img_id8654594787557415866.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               13 355 p
                                <span>
                                  14 900 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11858961/2a0000018d76f666aa10cb7e4b329e69c383/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Игровая приставка 15000 игр /портативная игровая/Беспроводная приставка Game Stick Lite 64gb
                            </h3>
                            <p className="home__left-price">
                             1 925 p
                                <span>
                                    2 999 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7389277/img_id2293271138982343597.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Дизайнерская открытка Meswero / OneMinute / с подарочным конвертом / 10х15
                            </h3>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                               379 p
                                <span>
                                    479 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12525950/2a0000018da359d28f095421dfd98bfdd164/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Беспроводные наушники M10 Newest с LED-Дисплеем / Bluetooth 5.1 TWS / Кейс-повербанк / PowerBank                            </h3>
                            <p className="home__left-price">
                              390
                                <span>
                                   990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5332938/2a0000018e2e83c8f7bd2bdfe1c0adbf1925/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Телевизор Sber SDX-32H2124 Smart TV Умный дом Sber голосовое управление
                            </h3>
                            <div className="home__left-price">
                               9 799 p
                                <span>
                                   14 990 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11588019/2a0000018b4c08e468350cf1c793e562570c/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Подвеска
                            </h3>
                            <p className="home__left-price">
                               368 p
                                <span>
                                  850 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4397559/2a0000018a66ea3e4fa5af2c7cf3ab5e8bb6/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Музыкальная шкатулка Гарри Поттера (бирюзовый цвет)
                            </h3>
                            <p className="home__left-price">
                                470
                                <span>
                                   890 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4120567/2a0000018b8af9fcdf0db7ddfb461187da25/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Значок Bag & You
                            </h3>
                            <p className="home__left-price">
                               449 p
                                <span>
                                  599 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5303201/img_id6431040447382380375.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Настенные часы УФ фэнтези дракон - 3108
                            </h3>
                            <p className="home__left-price">
                               1 264 p
                                <span>
                                  1 590p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5219133/img_id2530110457541462629.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Компактный фотоаппарат Canon IXUS 185
                            </h3>
                            <p className="home__left-price">
                               30 858 p
                                <span>
                                  31 170 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12263917/2a0000018e76b0ed1d74b4177e20b3acd097/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Робот-пылесос REDMOND RV-R560
                            </h3>
                            <p className="home__left-price">
                               6 489 p
                                <span>
                                  8 000 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6269810/img_id393555772308012801.jpeg/optimize" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Smart watch x5 pro (iOS/Android) умные часы, для мужчин, унисекс
                            </h3>
                            <p className="home__left-price">
                               1 958 p
                                <span>
                                   4 550 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12200529/img_id7133391685693780365.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Игровая приставка Sony PlayStation 5 Slim, с дисководом, 1000 ГБ SSD, без игр, белый
                            </h3>
                            <div className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                               58 590 p
                                <span>
                                    75 999 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4493501/img_id3678563045575603719.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Коврик для мыши СувенирShop "Офис/The Office/Майкл Скотт" 22х18 см
                            </h3>
                            <p className="home__left-price">
                                395 p
                                <span>
                                   999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5246613/img_id3934320967698794646.png/optimize" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон Apple iPhone 13 128 ГБ, Dual nano SIM, сияющая звезда
                            </h3>
                            <p className="home__left-price">
                               54 990 p
                                <span>
                                   77 990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6214739/img_id2159507353062835464.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Славянский оберег, подвеска Первый Сувенирный Заводъ
                            </h3>
                            <p className="home__left-price">
                                609 p
                                <span>
                                   1 658 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12424084/2a0000018d219c24935662c2d0c99254e215/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Видеокамера Camix MD35 водостойкая, маленькая мини экшн камера с онлайн-трансляцией, ночной съёмкой и фотоаппаратом                            </h3>
                            <p className="home__left-price">
                               4 967
                                <span>
                                   11 980 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(212 214 199)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Подарки для него
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(212 214 199)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4372348/img_id6010876736723383367.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              950 p
                                <span>
                                    960 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1927699/img_id3823953013579499381.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                712 p
                                <span>
                                   1500p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4012265/img_id3549832690860933342.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                2342 p
                                <span>
                                  4880p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4012265/img_id3549832690860933342.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                490 p
                                <span>
                                  680p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(188 228 242)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Энциклопедии
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(188 228 242)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5363625/2a0000018f35f313023d9035658c1bf987c4/300x400" alt="#" width={'100%'}/>
                            </div>
                            <p className="home__left-price">
                               2699 p
                                <span>
                                    2726 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1042102/img_id2087809045484794746.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              5 247 p
                                <span>
                                  8 000 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1574389/img_id4861301793699581370.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               8035 p
                                <span>
                                  8 199 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7980765/img_id5040455702196761638.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                2736 p
                                <span>
                                  2764 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6559549/2a0000018ad8e48f89135517208abf48ea95/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Масло чайного дерева и монарды для лечения грибка ногтей онихолизиса и ухода за кутикулой                            </h3>
                            <p className="home__left-price">
                               269 p
                                <span>
                                   950 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1246680/img_id3957606297163622586.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                              637 p
                                <span>
                                  1 500 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11476411/2a0000018c585aff97c922b8c87cf2e235fa/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Умные Смарт часы золотые Gold Edition Series/ Smart Watch series магнитная зарядка/ 49 mm золотые                            </h3>
                            <p className="home__left-price">
                               2 665 p
                                <span>
                                   12 500 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5296089/img_id7995761808997768884.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Картина по номерам «Кошка», 40x60 см, Живопись по Номерам
                            </h3>
                            <div className="home__left-price">
                               1 216 p
                                <span>
                                   1 690 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5311850/img_id7170040926473660813.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Цепь
                            </h3>
                            <p className="home__left-price">
                               253 p
                                <span>
                                   599 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12022975/2a0000018cb73fadadbe1ade125773edf6a3/600x800" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Плед мягкий плюшевый Коричневый Кошки 180х200 см
                            </h3>
                            <p className="home__left-price">
                               693 p
                                <span>
                                  1 200 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11368570/2a0000018b435179da044247d8160c371767/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Петарды Русский фейерверк К-12
                            </h3>
                            <p className="home__left-price">
                                741
                                <span>
                                   757 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/10077879/2a0000018adb8a2d2000c5b62edcfbaeb3dd/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                WS-1129 Шкатулка "Медуза Горгона"
                            </h3>
                            <p className="home__left-price">
                               4 486 p
                                <span>
                                   4 578 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6321906/img_id4673850349005456525.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Кружка Veila Self Stirring Mug 350ml 3356
                            </h3>
                            <p className="home__left-price">
                              442 p
                                <span>
                                  950 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5226176/2a0000018e42a5eed82616b7b6c3d70209e3/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Подвеска
                            </h3>
                            <p className="home__left-price">
                               872 p
                                <span>
                                   1 024 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5236584/img_id1274577586146732118.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Кольцо GameМерч
                            </h3>
                            <p className="home__left-price">
                               644 p
                                <span>
                                   990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5232043/2a0000018e05d758f95a63295187d2640304/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Браслет
                            </h3>
                            <div className="home__left-price">
                               584 p
                                <span>
                                  990 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11535894/2a0000018c4996832269717acfa06e2f50cc/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Игральные карты Hollow Knight (Полый рыцарь)
                            </h3>
                            <p className="home__left-price">
                               584 p
                                <span>
                                  1 290 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1861069/img_id5132020749407327731.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Монета сувенирная подарочная Bitcoin BTC Биткоин (Золото) в пластиковом прозрачном футляре (d 4,1см, вес 21г)                            </h3>
                            <p className="home__left-price">
                               318 p
                                <span>
                                    790 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12503234/2a0000018dad01a363160eb597a8db01c3af/optimize" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон Xiaomi Redmi 13C 8/256 ГБ Global, 2 nano SIM, черный
                            </h3>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                              11 190 p
                                <span>
                                  22 990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4580278/2a0000018e775b19c475ec25b870dceb7395/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Твёрдая тушь для бровей и ресниц Грим Спб грим Ленинградская, тон чёрный
                            </h3>
                            <p className="home__left-price">
                               267 p
                                <span>
                                  270 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(201 215 223)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Всё для фитнеса
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(201 215 223)"}}>
                            Все    <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12569791/2a0000018f1b24c81f9978b56a2bbc742809/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              23 255 p
                                <span>
                                  30 490 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5023672/2a0000018b963c71d9096ff9cf835654bfaf/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                              455 p
                                <span>
                                  750 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7666641/img_id8948088483082713103.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               1 583 p
                                <span>
                                2 190 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1861069/2a0000018bae2bf881a4cea4164ae19cefe4/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               479 p
                                <span>
                                  515 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(219 209 221)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Для грызунов
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(219 209 221)"}}>
                            Все      <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11483862/2a0000018c5da69d9a1d4b36c8b3648fadfb/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                4 694 p
                                <span>
                                 7 112 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12306721/2a0000018d33cdca4745d9a4d495d0c5850d/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              386 p
                                <span>
                                  1 200 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7396071/img_id5129285501787568280.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               573 p
                                <span>
                                 788 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1859495/img_id7973303395102564704.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                485 p
                                <span>
                                  1 900 p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12354050/2a0000018e2db723f213337f11483446a350/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Canon EOS 600D Kit 18-135mm F/3.5-5.6 IS
                            </h3>
                            <p className="home__left-price">
                                43 992 p
                                <span>
                                  44 890 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5220597/img_id3585850823641579655.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Поло Us Basic
                            </h3>
                            <p className="home__left-price">
                                Цена 948 ₽ вместо 1 936
                                <span>
                                    2700p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5277894/img_id9074228653544471264.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                                417 p
                                <span>
                                    599 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4589539/img_id5874136762043194299.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Копилка сейф черный
                            </h3>
                            <div className="home__left-price">
                               881 p
                                <span>
                                   2 000 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/3986581/img_id4372607001202184861.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Платок
                            </h3>
                            <p className="home__left-price">
                               1 040 p
                                <span>
                                  1 400 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6879515/img_id7552670063831973948.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Картина по номерам "Многоэтажки " холст на подрамнике 40х50
                            </h3>
                            <p className="home__left-price">
                               1 070 p
                                <span>
                                   2 600 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/10933212/2a0000018a304f98e8a3df450c36ced10041/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Цепь ЮВЕЛИРНОЕ ЦАРСТВО
                            </h3>
                            <p className="home__left-price">
                               391
                                <span>
                                  550 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/2016828/img_id9042920497076190135.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Сувенирные деньги / дубли / 2000 рублей
                            </h3>
                            <p className="home__left-price">
                                97p
                                <span>
                                    175p
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4578218/img_id8102103380884332852.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Зажигалка бензиновая Mewni-Shop, с принтом "Рик и Морти, Rick and Morty" - RAM0021
                            </h3>
                            <p className="home__left-price">
                               872 p
                                <span>
                                   890 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/986077/2a0000018a8f1df4cd227d42b97c35b0ddad/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Кардиомонитор кардиокарта CardioQVARK
                            </h3>
                            <p className="home__left-price">
                                9 702 p
                                <span>
                                   11 300 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4289990/img_id1788069492589316741.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Кожаная куртка Мой Мир
                            </h3>
                            <p className="home__left-price">
                              1 950 p
                                <span>
                                   4 490 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11483501/2a0000018c8c9fa30cf1ddbbce8ce73e6492/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смарт набор с часами 6в1.
                            </h3>
                            <div className="home__left-price">
                               3 564 p
                                <span>
                                    5 000 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4399094/img_id5914036037067881620.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                                568p
                                <span>
                                    4899p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12636049/2a0000018d32f336a6caed21e3dff90c9043/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Фотоальбом для Instax mini, 64 фото, биндер для карт kpop
                            </h3>
                            <p className="home__left-price">
                              676 p
                                <span>
                                    990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5236248/img_id1784306992371409094.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Коврик для мыши / Оксимирон / Окси / Oxxxymiron / певец / голос / мем / стиль / мода / хайп / музыка / хит / сувенир                            </h3>
                            <p className="home__left-price">
                               491 p
                                <span>
                                  524p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11621477/2a0000018c154fec0ac351c0c623099ccd3e/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Комплект украшений Киберпанк
                            </h3>
                            <p className="home__left-price">
                                791p
                                <span>
                                    999p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(191 231 214)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Прокачка ног
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(191 231 214)"}}>
                            Все                             <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6382710/img_id5760765427685947969.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                1567 p
                                <span>
                                   1999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/2991631/img_id9129637745998705222.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              26 729 p
                                <span>
                                  29 999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5319505/img_id4878058997228659947.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              13 616 p
                                <span>
                                   26 928 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11404302/2a0000018ca6b0c91f38935fd77eab525f71/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               1 686 p
                                <span>
                                   2 653 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(198 225 252)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Геймерам
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(198 225 252)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4754204/2a0000018f1aa3d322013c095bd9cab065b6/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                1172 p
                                <span>
                                    1790 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1644362/img_id4515111845577517118.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               9 702 p
                                <span>
                                     15 190 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5233681/img_id2247045687474617121.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               2 734 p
                                <span>
                                    3 590 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6273606/img_id7752517191911317657.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price" style={{color:"rgb(156 52 31)"}}>
                                1960p
                                <span>
                                        2900 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4901324/img_id532567642204034755.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Семена Лесландия Туя Западная Смарагд-Турри, 50 шт
                            </h3>
                            <p className="home__left-price">
                                377 p
                                <span>
                                    450 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5220508/2a0000018ec89053257bad09947fb69e11df/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Брюки чинос Заряд
                            </h3>
                            <p className="home__left-price">
                               4 302 p
                                <span>
                                   8 580 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4081122/2a0000018b8bc050767f485ac4ad5169440c/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Пинцет для бровей профессиональный
                            </h3>
                            <p className="home__left-price">
                                192p
                                <span>
                                    590p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5253277/img_id4121796132939826272.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Наклейки на телефон 3D стикеры гта gta san andreas гонка
                            </h3>
                            <div className="home__left-price">
                                 317 p
                                <span>
                                   650 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11918242/2a0000018ca2935e6b24159adc5e676ed737/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Стакан-кружка "Дракон с подсветкой"
                            </h3>
                            <p className="home__left-price">
                                382 p
                                <span>
                                   780 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11763878/2a0000018b4359ec381b7b6aec0235b4ba0a/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Тату переводные, временное тату
                            </h3>
                            <p className="home__left-price">
                                157 p
                                <span>
                                    389 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12025833/2a0000018ce8479c6dae605e2bfdd2067001/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Петарды терочные Корсар-1 (60 шт)
                            </h3>
                            <p className="home__left-price">
                                75p
                                <span>
                                    103p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5210364/img_id8162130878811447362.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Шуточное удостоверение "Хакера", корочка 95х65 мм
                            </h3>
                            <p className="home__left-price">
                               281 p
                                <span>
                                    530 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12025833/2a0000018d8d16659dd37c47949f07e7210e/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Кеды NIKE
                            </h3>
                            <p className="home__left-price">
                                 11 465 p
                                <span>
                                    12 999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5318100/2a0000018e429fcbd2a2c16ed8842a7820e5/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Подвеска
                            </h3>
                            <p className="home__left-price">
                                774 p
                                <span>
                                   909 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/2017291/img_id2411988973233230026.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Форма спортивная
                            </h3>
                            <p className="home__left-price">
                               1 950 p
                                <span>
                                   2 111 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5235182/img_id6907257147156733461.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Блютуз ресивер JBH BT-02 / Bluetooth ресивер / Bluetooth ресивер для компьютера / Bluetooth ресивер для авто / Bluetooth ресивер для передачи данных
                            </h3>
                            <div className="home__left-price">
                                343 p
                                <span>
                                   790 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12420731/2a0000018d55abdf64a5218a913238661e1c/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                               713 p
                                <span>
                                  800 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4119563/img_id5497635542711110354.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                               1 425 p
                                <span>
                                  1 519 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/364668/img_id7740543882472133461.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Футболка PRINTHAN Футболка мужская PRINTHAN с принтом Суетолог - это…, белая
                            </h3>
                            <p className="home__left-price">
                               1 129 p
                                <span>
                                   1 986 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5272194/img_id7138172057607662395.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Электрочайник Goodhelper KS-18B02
                            </h3>
                            <p className="home__left-price" style={{color:"black"}}>
                                599 p
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(239 217 189)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Освещение в доме
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(239 217 189)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12420404/2a0000018d13a5a8a59085e908c595755745/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              2 669 p
                                <span>
                                   5 392 p
                                </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12420105/2a0000018d0821a4d89a55133cffe457682a/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                1617 p
                                <span>
                                  2200 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4606255/img_id2625732266376244670.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               587 p
                                <span>
                                  1797 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11858961/2a0000018f0099fb19dcd804d8c2221ef468/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               3 950 p
                                <span>
                                    3 990 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(248 211 211)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Часы и аксессуары
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(248 211 211)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4904293/2a0000018e76dddcd08a914e8b94dfa1eab8/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              1 901 p
                                <span>
                                    2 990 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4012265/img_id3549832690860933342.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               2 342 p
                                <span>
                                  4 880 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5189780/img_id1110992073916221363.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              477 p
                                <span>
                                1 072 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11397617/2a0000018f418f10fb18e7464cd5d867c6d4/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              216 p
                                <span>
                                 719 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5209489/img_id1747656403602141539.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                PARIS LINE Cosa Nostra Platinium Мужская туалетная вода 100 мл
                            </h3>
                            <p className="home__left-price">
                              362 p
                                <span>
                                   786 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11225627/2a0000018ad3256d43f1514cfa6a60c60ccf/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Беспроводные наушники BESTHOUSE Гарнитура bluetooth (блютуз) с микрофоном для телефона, компьютера, TWS                            </h3>
                            <p className="home__left-price">
                               808 p
                                <span>
                                    3 000 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12626365/2a0000018e76282955c81c980c79e5696699/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Масляные духи с роллером Whiskey &amp; Tobacco AROMAKO, роллербол 10 мл, ароматическое масло аромако                            </h3>
                            <p className="home__left-price">
                               806 p
                                <span>
                                1 050 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11472827/2a0000018f3692de45bd953ce2123f0f95c1/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон Infinix Hot 40i 8/256Gb Золотистый
                            </h3>
                            <div className="home__left-price">
                              11 649 р
                                <span>
                                  13 738 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5313128/img_id3223959389476217909.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Шапка бини A-Store Шапка бини мужская
                            </h3>
                            <p className="home__left-price">
                               331 p
                                <span>
                                   999 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12200529/2a0000018c3afe40ac19e1fa7f0b89b86c33/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Подвеска Подвеска с цепочкой Джордан
                            </h3>
                            <p className="home__left-price">
                                 420 p
                                <span>
                                    940 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/10933212/2a0000018a299e9d926e392ca4707dc808be/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Наушники Xiaomi Redmi Buds 4 Active Black BHR6992GL
                            </h3>
                            <p className="home__left-price">
                               1 336 p
                                <span>
                                    1 621p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11695357/2a0000018e717a5e789d6a7ce4478d742a73/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Беспроводная гарнитура TWS Bluetooth HOCO EW42 Pods время работы 7 часов (черный)
                            </h3>
                            <p className="home__left-price">
                             1 098 p
                                <span>
                                  2 500 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1927699/2a0000018ac678341551aa222b0704cb4301/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Наручные часы Часымуждебвлесеребрчерн
                            </h3>
                            <p className="home__left-price">
                              831 p
                                <span>
                                   2 400 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4615396/2a0000018ef1e8087c05f552f9f406db4b8f/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Солнцезащитные очки
                            </h3>
                            <p className="home__left-price">
                               651 p
                                <span>
                                   1 790 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5222586/img_id6714019723241944457.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Зеркало настольное круглое двустороннее разного увеличения 13см
                            </h3>
                            <p className="home__left-price">
                               225 p
                                <span>
                                   400 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7764504/img_id3440539793467529832.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Руз ко Карта Российской Империи (сост. на 1913г.)К 400-летию Дома Романовых
                            </h3>
                            <div className="home__left-price">
                               1 178 p
                                <span>
                                   1 190 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12418417/2a0000018e748b83215fd706422c2d79e63b/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Большая портативная Bluetooth блютуз колонка беспроводная с радио светомузыкой переносной музыкальный центр, большой мощности, c подсветкой и AUX
                            </h3>
                            <p className="home__left-price">
                               1 862 p
                                <span>
                                    2 500 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11760083/2a0000018b1760d607be9f64c61bbc6625c9/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Триммер черный с 4 насадками 1.5мм 2мм 3мм 4мм / Беспроводной электрический триммер для стрижки /для бороды /усов /Подарок для мужчин
                            </h3>
                            <p className="home__left-price">
                               587 p
                                <span>
                                   1 299 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12411215/2a0000018f335b9f55c33cf041bc24dc1529/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                реклама
                            </h3>
                            <p className="home__left-price">
                              9 833 p
                                <span>
                                    22 000 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12503234/2a0000018f3dfec0818f3a87dc073f4cad8a/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Брюки чинос Заряд
                            </h3>
                            <p className="home__left-price">
                               4 606 p
                                <span>
                                 8 780 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(202 216 208)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Для чистой воды
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(202 216 208)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11404302/2a0000018b5c07345168d60313dd686ba199/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                941 p
                                <span>
                                       1 453 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11414233/2a0000018c00c9dd338d35b6f65dbbb263de/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               157 p
                                <span>
                                   318 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5332815/img_id2018494286253429769.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              3 007 p
                                <span>
                                    3 069 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5219133/img_id4730483224876194653.png/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                387 p
                                <span>
                                    690 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(205 223 252)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Создаём шедевры
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(205 223 252)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/12374158/2a0000018d6111f8eacd78fa345f4d972d29/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              1 206 p
                                <span>
                                    1 690 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4081122/img_id6023177936812628298.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                             361 p
                                <span>
                                    510 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4370207/2a0000018a69ea8a5cbc26b06aa87fea5aad/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               2 910 p
                                <span>
                                  3 880 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11532558/2a0000018b21ad3bd4d3f95127ab9cc225e5/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               1 086 p
                                <span>
                                 1 097 p
                                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5235448/img_id1069894546840800109.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Зеркало круглое железное двустороннее разного увеличения 9 см
                            </h3>
                            <p className="home__left-price">
                               147 p
                                <span>
                                   240 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5236045/img_id982429384764362342.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Плед 2-спальный из флиса и бамбука с Микки Маусом
                            </h3>
                            <p className="home__left-price">
                             602 p
                                <span>
                                    990 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5332113/img_id7072255631587379374.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Штатив-трипод на гибких ножках (чёрный)
                            </h3>
                            <p className="home__left-price">
                               186 p
                                <span>
                                  580 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1912364/img_id3122991021826921217.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Ножницы для самых жёстких, твёрдых и утолщённых ногтей
                            </h3>
                            <div className="home__left-price">
                             872 p
                                <span>
                                    2 500 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5320546/img_id7235721690630391537.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Смартфон Пельменница ручная, 2 ячейки / Машинка механическая для лепки пельменей / Форма для больших пельменей, вареников
                            </h3>
                            <p className="home__left-price">
                               1 022 p
                                <span>
                                   2 605 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5210428/img_id7552291685417979250.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                АС РемОкно Ручка оконная "Комфорт" металлическая, белая
                            </h3>
                            <p className="home__left-price" style={{color:"black"}}>
                               1 490
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11385384/2a0000018c82ca546b446fa8d160cca64174/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Ночник-проектор звездного неба с пультом
                            </h3>
                            <p className="home__left-price">
                              832 p
                                <span>
                                  1 527 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4519356/img_id6852713307966090678.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Будильник-куб Хамелеон с термометром
                            </h3>
                            <p className="home__left-price">
                             421 p
                                <span>
                                   990 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__left">
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5538428/2a0000018e190c0b04679b3302b3ad68a6d2/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Турка для кофе медная турецкая (Ложка в подарок) 250 мл.
                            </h3>
                            <p className="home__left-price">
                               1 128 p
                                <span>
                                  1 999 p
                                </span>
                            </p>

                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/3980374/img_id3628575931843048032.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Постельное белье однотонное Urban Family (аналог икеа), Шторм, 2 спальное с европростыней, наволочки на молнии 70х70, 100% хлопок, перкаль
                            </h3>
                            <p className="home__left-price">
                                 334 p
                                <span>
                                   570 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/6175789/img_id5575054894950017631.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Молоток для мяса с топориком Доляна, 22 см
                            </h3>
                            <p className="home__left-price">
                             352 p
                                <span>
                                   495 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5142344/img_id887104796922444541.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Ваза Риштанская Керамика "Атлас", 15 см, микс
                            </h3>
                            <div className="home__left-price">
                               678 p
                                <span>
                                   1 327 p
                                </span>
                            </div>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11483862/2a0000018c7e3577ca11cc403f244a372e72/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                "RGB Music Level Light" - светодиодный светильник, реагирующий на музыку White
                            </h3>
                            <p className="home__left-price">
                             692 p
                                <span>
                                   699 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11535894/2a0000018bed0f0493a64668c6dee533b993/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Стол разборный пластиковый красный 140x80x71 см
                            </h3>
                            <p className="home__left-price">
                              2 205 p
                                <span>
                                  2 799 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/11213128/2a0000018d357f6e9301f4ba8c8e229789d6/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Шахматы Америка и СССР (президенты, модель №1)
                            </h3>
                            <p className="home__left-price">
                            3 950 p
                                <span>
                                  5 985 p
                                </span>
                            </p>
                        </div>
                        <div className="home__left-card">
                            <div className="home__left-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/5270077/img_id7369272324451460024.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <h3 className="home__left-title">
                                Фотоаппарат Sony ZV-E10 kit 16-50mm белый
                            </h3>
                            <p className="home__left-price">
                             79 900 p
                                <span>
                                97 875 p
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="home__right" style={{background:"rgb(200 215 221)"}}>
                        <div className="home__right-top">
                            <p className={"home__right-text"}>
                                Рекомендуем вам
                            </p>
                            <h3 className="home__right-title">
                                Игры с водой
                            </h3>
                        </div>
                        <button className={"home__right-btn"} style={{background:"rgb(200 215 221)"}}>
                            Все
                            <IoIosArrowForward size={17} style={{margin:"0  0  0 5px"}}/>
                        </button>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/1750349/img_id3116486011045419551.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                            2 969 p
                                <span>
                                   5 500 p
                                    </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4034372/img_id3557168061547168582.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                                203 p
                                <span>
                                    236 p
                                        </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/4032259/img_id844491845481033072.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                               225 p
                                <span>
                                229 p
                                            </span>
                            </p>
                        </div>
                        <div className="home__right-card">
                            <div className="home__right-img">
                                <img src="https://avatars.mds.yandex.net/get-mpic/7690783/img_id2518136843768553349.jpeg/300x400" alt="#" width={"100%"}/>
                            </div>
                            <p className="home__left-price">
                              993 p
                                <span>
                                  1 782 p
                                    </span>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
        </section>
);
};

export default Home;