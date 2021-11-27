import React, { useEffect } from "react";
import { getToken } from "./actions/dashBoardAction";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import RoutesPages from "./pages/index";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(getToken());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: "LOGOUT_USER" });
    });
  }, [dispatch]);

  return (
    <>
      {/* <div className="lg:hidden block text-3xl flex justify-center items-center p-20 text-center  ">
        Currently available on desktop mobile view coming soon...{" "}
      </div> */}
      <div className="bg-black min-h-screen ">
        <RoutesPages />
      </div>
    </>
  );
}
