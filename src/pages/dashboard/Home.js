import React from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="bg-white flex-1 min-h-screen">
          <Navbar />
          <h1>Music section</h1>
        </div>
      </div>
    </>
  );
}
