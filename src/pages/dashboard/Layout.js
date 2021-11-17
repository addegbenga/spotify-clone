import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

export default function MyDashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
}
