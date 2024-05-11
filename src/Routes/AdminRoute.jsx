import React from "react";
import { Navigate, Outlet } from "react-router-dom";

async function AdminRoute() {
  const admin = true;
  return admin ? <Outlet /> : <Navigate to="/home" />;
}

export default AdminRoute;
