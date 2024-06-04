import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Spilt from "./pages/Spilt/Spilt";
import Cloth from "./pages/Cloth/Cloth";
import Cosiness from "./pages/Сosiness/Cosiness";
import Children from "./pages/Children/Children";
import Products from "./pages/Products/Products";
import How from "./pages/How/How";
import Description from "./pages/Description/Description";
import Basket from "./pages/Basket/Basket";
import Favorites from "./pages/Favorites/Favorites";
import Orders from "./pages/Orders/Orders";
import Balls from "./pages/Balls/Balls";
import Map from "./pages/Map/Map";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/spilt"} element={<Spilt/>}/>
        <Route path={"/cloth"} element={<Cloth/>}/>
        <Route path={"/cosiness"} element={<Cosiness/>}/>
        <Route path={"/children"} element={<Children/>}/>
        <Route path={"/basket"} element={<Basket/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={"/orders"} element={<Orders/>}/>
        <Route path={"/how"} element={<How/>}/>
        <Route path={"/description"} element={<Description/>}/>
        <Route path={"/map"} element={<Map/>}/>
      </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
      <Route path={"/balls"} element={<Balls/>}/>
    </Routes>
  );
}

export default App;
