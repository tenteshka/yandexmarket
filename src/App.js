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
import Favorite from "./pages/Favorite/Favorite";
import Beauty from "./pages/Beauty/Beauty";
import Electronics from "./pages/Electronics/Electronics";
import Products from "./pages/Products/Products";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import Alice from "./pages/Alice/Alice";
import How from "./pages/How/How";
import Sell from "./pages/Sell/Sell";
import Map from "./pages/Map/Map";
import Description from "./pages/Description/Description";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/spilt"} element={<Spilt/>}/>
        <Route path={"/favorite"} element={<Favorite/>}/>
        <Route path={"/cloth"} element={<Cloth/>}/>
        <Route path={"/cosiness"} element={<Cosiness/>}/>
        <Route path={"/children"} element={<Children/>}/>
        <Route path={"/beauty"} element={<Beauty/>}/>
        <Route path={"/electronics"} element={<Electronics/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={"/pharmacy"} element={<Pharmacy/>}/>
        <Route path={"/alice"} element={<Alice/>}/>
        <Route path={"/how"} element={<How/>}/>
        <Route path={"/sell"} element={<Sell/>}/>
        <Route path={"/map"} element={<Map/>}/>
        <Route path={"/description"} element={<Description/>}/>
      </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
