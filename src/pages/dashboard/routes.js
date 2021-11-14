import React from "react";
const LazyHome = React.lazy(() => import("./Home.js"));
const LazyLibrary = React.lazy(() => import("./Library.js"));
const LazySearch = React.lazy(() => import("./Search.js"));
const LazyLikedSong = React.lazy(() => import("./LikedSong.js"));
const LazyPlaylist = React.lazy(() => import("./Playlist.js"));
const LazyCreatePlaylist = React.lazy(() => import("./CreatePlaylist"));

const base = "/dashboard";
const routes = [
  {
    path: base ,
    component: <LazyHome />,
  },
  {
    path: base + "/search",
    component: <LazySearch />,
  },
  {
    path: base + "/library",
    component: <LazyLibrary />,
  },
  {
    path: base + "/fav",
    component: <LazyLikedSong />,
  },
  {
    path: base + "/playlist/:playlistId",
    component: <LazyPlaylist />,
  },
  {
    path: base + "/create_playlist",
    component: <LazyCreatePlaylist />,
  },
];

export default routes;
