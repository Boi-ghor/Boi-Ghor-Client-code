import React from "react";

import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

import TopNav from "./Component/navbar/TopNav";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/Auth/Login";
import RegisterComponents from "./Component/Auth/Register";
import SendotpComponents from "./Component/Auth/Sendotp";
import OTPverify from "./Component/Auth/OTPVERI";
import ChangepassComponents from "./Component/Auth/Changepass";
import Footer from "./Component/Common/Footer";
import Menu from "./Component/navbar/Menu";

const App = () => {
  return (
    <>
      <div className={""}>
        <TopNav></TopNav>
        <Menu></Menu>
      </div>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<RegisterComponents />}></Route>
        <Route path={"/send-otp"} element={<SendotpComponents />}></Route>
        <Route path={"/verify-otp"} element={<OTPverify />}></Route>
        <Route path={"/change-pass"} element={<ChangepassComponents />}></Route>
        <Route path={"*"} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;