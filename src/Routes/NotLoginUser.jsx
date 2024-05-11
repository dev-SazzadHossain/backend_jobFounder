import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const NotLoginUser = () => {
    const {auth}=useSelector(state=>state)
    return !(auth?.user && auth?.refreshToken) ?  <Outlet/>:<Navigate to="/"/>
    
};

export default NotLoginUser;