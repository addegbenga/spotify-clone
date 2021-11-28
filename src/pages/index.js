import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./landing/Layout";
import MyDashboard from "./dashboard/Layout";
import DashBoardComponents from "./dashboard/routes";
import NotFound from "./dashboard/NotFound";
const LazyLandingComponents = React.lazy(() => import("./landing"));

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                  {" "}
                  <img src="/assets/loder.svg" alt="loader" />
                </div>
              }
            >
              <LazyLandingComponents />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<MyDashboard />}>
        <Route path="dashboard//*" element={<DashBoardComponents />}></Route>
      </Route>
    </Routes>
  );
}
