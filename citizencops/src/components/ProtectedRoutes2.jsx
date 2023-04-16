import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const ProtectedRoutes2 = () => {
    const token = cookies.get("POLICETOKEN");

    return token ? <Outlet/> : <Navigate to='/' exact />
};
