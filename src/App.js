import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
function App() {
  //1. 전체상품페이지, 로그인페이지, 상품상세페이지
  ///1-2. 네비게이션바 만들기
  //2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
  //3-1. 로그인 버튼을 누르면 로그인 페이지가 나온다.
  //3-2. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다.
  //4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
  //5-1. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  //5-2 로그아웃이되면 상품 디테일페이지를 볼 수없다. 다시 로그인 페이지가 보인다.
  //6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
  //7. 상품을 검색할 수 있다.
  //
  const [authenticate, setAuthenticate] = useState(false); //true -> 로그인 false -> 로그인 x

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll authenticate={authenticate} />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
