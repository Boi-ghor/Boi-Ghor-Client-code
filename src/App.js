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
import AboutPage from "./Pages/CommonPage/AboutPage";
import ContactPage from "./Pages/CommonPage/ContactPage";
import FaqPage from "./Pages/CommonPage/FaqPage";
import Privacy from "./Pages/CommonPage/PrivacyPage";
import AuthorsPage from "./Pages/NavbarPages/AuthorsPage";
import PublishersPage from "./Pages/NavbarPages/PublishersPage";
import BookPage from "./Pages/BookPage/BookPage";
import FullScreenLoader from "./Component/Common/FullScreenLoader";

const App = () => {
  return (
    <>
      <FullScreenLoader />
      <div className={""}>
        <TopNav></TopNav>
        <Menu></Menu>
      </div>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route path={"/books"} element={<BookPage />}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<RegisterComponents />}></Route>
        <Route path={"/send-otp"} element={<SendotpComponents />}></Route>
        <Route path={"/verify-otp"} element={<OTPverify />}></Route>
        <Route path={"/change-pass"} element={<ChangepassComponents />}></Route>

        {/*Navbar related pages routing*/}
        <Route path={"/authors"} element={<AuthorsPage />}></Route>
        <Route path={"/publishers"} element={<PublishersPage />}></Route>

        {/*Footers routing*/}
        <Route path={"/about"} element={<AboutPage />}></Route>
        <Route path={"/contact"} element={<ContactPage />}></Route>
        <Route path={"/faq"} element={<FaqPage />}></Route>
        <Route path={"/privacy-policy"} element={<Privacy />}></Route>
        <Route path={"*"} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
