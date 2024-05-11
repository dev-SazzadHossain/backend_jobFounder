import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const LoginRoute = () => {
    const {auth}=useSelector(state=>state)
    return auth?.user && auth?.refreshToken ?  <Outlet/>:<Navigate to="/login"/>
    
};

export default LoginRoute;