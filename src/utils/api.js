import axios from "axios";
import store from "../store";
import { LOGOUT_USER } from "../actions/types";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT_USER });
    }
    return Promise.reject(err);
  }
);

export { api };
