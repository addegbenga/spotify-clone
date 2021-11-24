// import { usePalette } from "react-palette";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSinglePlaylist } from "../../actions/dashBoardAction";
import { useParams } from "react-router-dom";

export default function Playlist() {
  let params = useParams();
  const dispatch = useDispatch();
  // const { data, loading, error } = usePalette("");
  useEffect(() => {
    dispatch(getSinglePlaylist(params.id));
  }, [dispatch, params]);

  return (
    <div
      style={{
        background: "#1e1e1e",
        paddingLeft: "19rem",
        paddingRight: "3rem",
      }}
      className="py-24 w-full   min-h-screen  text-white"
    >
      <section className="">
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          <h2>Playlist</h2>
          <h1>Hot Hits Naija</h1>
          <p>Nigeria's Hottest tracks. Cover:Davido and Focalistic</p>
          <div>
            <h3>Spotify</h3>
            <span>.</span>
            <span>19,953 Likes</span>
            <span>.</span>
            <span>80 Songs, 4hr 12 min</span>
          </div>
        </div>
      </section>
    </div>
  );
}
