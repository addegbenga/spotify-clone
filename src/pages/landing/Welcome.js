import React from "react";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div>
      <div className="text-white">
        Welcome to mood booster the home of sweet music get started now
      </div>
      <div>
        <Link to="/dashboard">
          {" "}
          <button className="bg-green-200"> open web player</button>
        </Link>
      </div>
    </div>
  );
}
