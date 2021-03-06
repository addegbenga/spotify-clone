const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  singlePlaylist: [],
  singlePlaylistDetails: [],
  singleCategory: [],
  recentlyPlayed: [],
  moodCategory: [],
  focusCategory: [],
  newRelease: [],
  editorspick: [],
  user: null,
  error: {},
};

export const dashBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        ...action.payload,
        token: action.payload.data.access_token,
        isAuthenticated: true,
      };
    case "GET_TOKEN_ERROR":
      return {
        error: action.payload,
        isAuthenticated: false,
      };
    case "GET_MOOD_PLAYLISTS":
      return {
        ...state,
        moodCategory: action.payload.playlists.items,
      };
    case "GET_MOOD_PLAYLISTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_FOCUS_PLAYLISTS":
      return {
        ...state,
        focusCategory: action.payload.playlists.items,
      };
    case "GET_FOCUS_PLAYLISTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_FEATURED_PLAYLISTS":
      return {
        ...state,
        editorspick: action.payload.playlists.items,
      };
    case "GET_FEATURED_PLAYLISTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "GET_SINGLE_PLAYLISTS":
      return {
        ...state,
        ...action.payload,
        singlePlaylist: action.payload,
        singlePlaylistDetails: "",
      };
    // case "LOAD_USER_ERROR":
    case "LOGIN_ERROR":
    case "GET_SINGLE_PLAYLIST_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
