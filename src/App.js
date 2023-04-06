
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiddleNav from "./Component/navbar/MiddleNav";
import TopNav from "./Component/navbar/TopNav";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <TopNav></TopNav>
        <MiddleNav></MiddleNav>
      </header>
    </BrowserRouter>
  );
};

import {React} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import {Toaster} from "react-hot-toast";
import Dashbord from './Component/Dashboard/Dashbord';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import SendOtp from "./Pages/Auth/SendOtp";
import ChangePass from "./Pages/Auth/ChangePass";
import OtpVerify from './Pages/Auth/OtpVerify';




const App = () => {

      return (
          <>
              <BrowserRouter>
                  {/* <Navbar/> */}
                  <Toaster position="top-center"/>
                  <Routes>
                  
                      <Route path='/login' element={<Login/>} ></Route>                      
                      <Route path='/register' element={<Register/>} ></Route>
                      <Route path='/sendotp' element={<SendOtp/>} ></Route>                      
                      <Route path='/verifiotp' element={<OtpVerify/>} ></Route>
                      <Route path='/changepassword' element={<ChangePass/>} ></Route>
                  </Routes>

              </BrowserRouter>
             
          </>
      )
  }

  


export default App;
