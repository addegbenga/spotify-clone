import React from "react";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
