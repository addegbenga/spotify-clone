import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Navbar() {
  return (
    <div style={{paddingLeft:"16rem"}} className=" fixed w-full  z-10">
      <div style={{background:"#070707"}} className="px-10 py-4">
        <div className="flex justify-between items-center">
          <div className="flex text-white text-opacity-50">
            <div className="mr-5 bg-black p-1 rounded-full">
              <FiChevronLeft size={27} />
            </div>
            <div className="bg-black p-1 rounded-full">
              <FiChevronRight size={27} />
            </div>
          </div>
          <div>
            <button className="text-white text-xs tracking-widest">SIGN UP</button>
            <button className="bg-white text-xs rounded-full ml-10 tracking-wider px-8 py-2">LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
