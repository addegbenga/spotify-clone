
export const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;

// stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?redirect_uri=http://localhost:3000/dashboard&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scopes}&response_type=token&show_dialog=true`;
