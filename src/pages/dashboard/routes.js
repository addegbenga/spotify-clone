import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
const Home = React.lazy(() => import("./Home.js"));
const Library = React.lazy(() => import("./Library.js"));
const Search = React.lazy(() => import("./Search.js"));
const LikedSong = React.lazy(() => import("./LikedSong.js"));
const Playlist = React.lazy(() => import("./Playlist.js"));
const CreatePlaylist = React.lazy(() => import("./CreatePlaylist"));

export default function Index() {
  let routes = [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "playlist/:id",
      element: <Playlist />,
    },

    {
      path: "create_playlist",
      element: <CreatePlaylist />,
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "fav",
      element: <LikedSong />,
    },
    {
      path: "library",
      element: <Library />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center text-white h-screen text-4xl">
            <img src="/assets/loder.svg" alt="loader"/>
          </div>
        }
      >
        {element}
      </Suspense>
    </>
  );
}
