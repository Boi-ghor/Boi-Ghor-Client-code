import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Outlet } from "react-router-dom";


import {useAuth} from "../../context/useAuth";
import Loading from "./Loading";

const PrivateRoute = () => {
    const [auth,setAuth]=useAuth();

    const [ok,setOk]=useState(false)

    useEffect(() => {
        if(auth?.token){
            setOk(true)
        }else{
            setOk(false)
        }


    }, [auth?.token]);
    const checkLogin=async () =>{
        const {data}= await axios.get('/check-login')
        return data
    }
    return ok ? <Outlet/> : <Loading></Loading>;
};

export default PrivateRoute;