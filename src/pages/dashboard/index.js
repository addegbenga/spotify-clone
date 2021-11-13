import React, { Suspense } from "react";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

export default function index() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar />
      <Navbar />
      <Routes>{routeComponents}</Routes>
    </Suspense>
  );
}
