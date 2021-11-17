import React from "react";
import { loginUrl } from "../../utils/spotify";
export default function Welcome() {
  return (
    <div>
      <div className="text-white">
        Welcome to mood booster the home of sweet music get started now
      </div>
      <div>
        <button className="bg-green-200">
          {" "}
          <a href={loginUrl}> Login with spotify </a>
        </button>
      </div>
    </div>
  );
}
