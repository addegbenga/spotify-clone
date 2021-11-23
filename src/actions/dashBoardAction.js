import { api } from "../utils/api";
import axios from "axios";
import qs from "query-string";

export const loadUser = () => async (dispatch) => {
  try {
    const response = await api.get("https://api.spotify.com/v1/me");

    dispatch({
      type: "LOAD_USER",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_ERROR",
      payload: error.response,
    });
  }
};

export const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
export const getToken = () => async (dispatch) => {
  const data = {
    grant_type: "client_credentials",
    redirect_uri: redirect_uri,
  };
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              process.env.REACT_APP_CLIENT_ID +
                ":" +
                process.env.REACT_APP_CLIENT_SECRET
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    dispatch({
      type: "GET_TOKEN",
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: "GET_TOKEN_ERROR",
      payload: error.response,
    });
  }
};
export const getSinglePlaylist = (body) => async (dispatch) => {
  try {
    const response = await api.post(`/api/v1/auth/google`, body);
    dispatch({
      type: "GET_SINGLE_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_SINGLE_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};

export const getNewRelease = (body) => async (dispatch) => {
  try {
    const response = await api.get(
      "https://api.spotify.com/v1/browse/new-releases?country=SE&limit=5&offset=10"
    );
    dispatch({
      type: "GET_NEW_RELEASE_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_NEW_RELEASE_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};

export const getMoodPlaylist = (offset, limit) => async (dispatch) => {
  try {
    const response = await api.get(
      `https://api.spotify.com/v1/browse/categories/mood/playlists?country=NG&limit=10&offset=10`
    );
    dispatch({
      type: "GET_MOOD_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_MOOD_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};
export const getFeaturedPlaylist = (body) => async (dispatch) => {
  try {
    const response = await api.get(
      "https://api.spotify.com/v1/browse/featured-playlists?country=NG&locale=en_NG&timestamp=2021-10-23T09%3A00%3A00.000Z&limit=5&offset=1"
    );
    dispatch({
      type: "GET_FEATURED_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FEATURED_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};

export const getFocusPlaylist = (body) => async (dispatch) => {
  try {
    const response = await api.get(
      "https://api.spotify.com/v1/browse/categories/focus/playlists?country=NG&limit=10&offset=10"
    );
    dispatch({
      type: "GET_FOCUS_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FOCUS_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};

export const getRecentPlaylist = (body) => async (dispatch) => {
  try {
    const response = await api.get("", body);
    dispatch({
      type: "GET_RECENT_PLAYLISTS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_RECENT_PLAYLISTS_ERROR",
      payload: error.response,
    });
  }
};
