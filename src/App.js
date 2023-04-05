import {React} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import {Toaster} from "react-hot-toast";
import Dashbord from './Component/Dashboard/Dashbord';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';

const App = () => {


      return (
          <>
              <BrowserRouter>
                  {/* <Navbar/> */}
                  <Toaster position="top-center"/>
                  <Routes>
                  
                      <Route path='/login' element={<Login/>} ></Route>                      
                      <Route path='/register' element={<Register/>} ></Route>

                  </Routes>

              </BrowserRouter>
             
          </>
      )
  }

  

export default App;
