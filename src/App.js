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

import BookDetailsPage from "./Pages/BookDetailsPage/BookDetailsPage";

import AuthorsDetails from "./Pages/Details/AuthorsDetails";

import Profiles from "./Pages/Auth/Profiles";

import OrderPage from "./Pages/OrderPage/OrderPage";

import Cart from "./Pages/Cart";
import Blogs from "./Pages/Blog/Blogs";
import BlogDetails from "./Pages/BlogDetails";

import PublishersDetails from "./Pages/Details/PublishersDetails";
import PrivateRoute from "./Component/Route/PrivateRoute";
import PlaceOrder from "./Pages/Place-Order/Place-Order";
import MyOrder from "./Pages/MyOrder/MyOrder";
import ViewOrder from "./Pages/ViewOrder/ViewOrder";
import CheckOut from "./Pages/CheckOut/CheckOut";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";




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
        <Route path={"/book/:slug"} element={<BookDetailsPage />}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<RegisterComponents />}></Route>
        <Route path={"/send-otp"} element={<SendotpComponents />}></Route>
        <Route path={"/verify-otp"} element={<OTPverify />}></Route>
        <Route path={"/change-pass"} element={<ChangepassComponents />}></Route>
          <Route path={"/blogs"} element={<Blogs></Blogs>}></Route>
          <Route path={"/blogs/:id"} element={<BlogDetails></BlogDetails>}></Route>

        {/*Navbar related pages routing*/}
        <Route path={"/authors"} element={<AuthorsPage />}></Route>
          <Route path={"/author/:authorId"} element={<AuthorsDetails />}></Route>
          <Route path={"/publisher/:publisherId"} element={<PublishersDetails/>}></Route>
        <Route path={"/publishers"} element={<PublishersPage />}></Route>
        <Route path={"/profile"} element={<Profiles/>}></Route>
        <Route path={"/settings"} element={<SettingsPage/>}></Route>
          <Route path={"/order"} element={<OrderPage />}></Route>
          <Route path={"/cart"} element={<Cart></Cart>}></Route>

        {/*private route*/}
        <Route path={'/user'} element={<PrivateRoute></PrivateRoute>}>
          <Route path={'place-order'} element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path={'my-order'} element={<MyOrder></MyOrder>}></Route>
          <Route path={'my-order/:id'} element={<ViewOrder></ViewOrder>}></Route>
          <Route path={'checkout/:id/:price'} element={<CheckOut></CheckOut>}></Route>


        </Route>
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
