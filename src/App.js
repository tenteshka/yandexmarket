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
import Alice from "./pages/Alice/Alice";
import How from "./pages/How/How";
import Description from "./pages/Description/Description";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/spilt"} element={<Spilt/>}/>
        <Route path={"/cloth"} element={<Cloth/>}/>
        <Route path={"/cosiness"} element={<Cosiness/>}/>
        <Route path={"/children"} element={<Children/>}/>
        <Route path={"/products"} element={<Products/>}/>
\        <Route path={"/alice"} element={<Alice/>}/>
        <Route path={"/how"} element={<How/>}/>
        <Route path={"/description"} element={<Description/>}/>
      </Route>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
