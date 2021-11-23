import React, { useEffect } from "react";
import { loadUser } from "./actions/dashBoardAction";
import setAuthToken from "./utils/setAuthToken";
import { getTokenFromUrl } from "./utils/spotify";
import store from "./store";
import RoutesPages from "./pages/index";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log(location.search)
    const _token = hash.access_token;

    console.log(_token);
    // check for token in LS
    if (_token) {
      dispatch({
        type: "LOGIN_USER",
        payload: _token,
      });
      setAuthToken(_token);
    }
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: "LOGOUT_USER" });
    });
  }, [dispatch]);

  return (
    <div className="bg-black min-h-screen">
      <RoutesPages />
    </div>
  );
}
