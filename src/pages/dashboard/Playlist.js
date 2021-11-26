// import { usePalette } from "react-palette";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { getSinglePlaylist } from "../../actions/dashBoardAction";
import { useParams } from "react-router-dom";

export default function Playlist() {
  let params = useParams();
  const { singlePlaylist } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  // const { data, loading, error } = usePalette("");
  useEffect(() => {
    dispatch(getSinglePlaylist(params.id));
  }, [dispatch, params]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, #1e1e1e ,  #1e1e1e 90% ,   #273ca0   )`,
      }}
      className="pt-24 pb-10  2xl:pl-paddingXl 2xl:py-28  pl-72  pr-9     min-h-screen  text-white"
    >
      <section className="flex items-end ">
        <figure>
          <img className="h-60 w-60" src="/assets/mood3.jpeg" alt="gbedu" />
        </figure>
        <div className="pl-4">
          <h2 className="text-sm">PLAYLIST</h2>
          <h1 className="text-8xl py-4 font-bold tracking-tighter">
            Mood Booster
          </h1>
          <p className="text-sm text-opacity-70 text-white">
            Nigeria's Hottest tracks. Cover:Davido and Focalistic
          </p>
          <div className="flex text-sm items-center py-1">
            <h3>Spotify</h3>
            <span className="mx-1 -mt-1">.</span>
            <span className="text-white text-opacity-70">19,953 Likes</span>
            <span className="mx-1  -mt-1">.</span>
            <span className="text-white text-opacity-70">
              80 Songs, 4hr 12 min
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center mt-6">
          <div
            style={{ background: "#1ed760" }}
            className="bg-red-100 p-2 rounded-full inline-block"
          >
            <BsFillPlayFill size={40} />
          </div>
          <div className="mx-6">
            <IoMdHeartEmpty size={30} />
          </div>
          <BiDotsHorizontalRounded color="white" size={30} />
        </div>
      </section>

      <section className="mt-10 ">
        <table className="table-fixed  ">
          <thead>
            <tr className="border-b border-opacity-10  text-sm  text-opacity-70 text-white ">
              <th className=" w-80 text-left pb-2 pl-8  ">#TITLE</th>
              <th className=" w-80 text-left pb-2 ">ALBUM</th>
              <th className=" w-80 text-left pb-2 ">DATE ADDED</th>
              <th className="text-left pb-2 pr-20">
                <IoTimeOutline size={20} />
              </th>
            </tr>
          </thead>
          {singlePlaylist.items?.map((item, index) => (
            <tbody key={index}>
              <tr className="group ">
                <td
                  className="
                   group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  rounded-l py-2 top-3 bottom-4   relative "
                >
                  <span
                    className={` ${
                      index < 9 ? "left-4 top-3.5" : "left-2 top-3.5"
                    } text-white text-opacity-70 absolute group-hover:opacity-0 text-left `}
                  >
                    {index + 1}
                  </span>
                  <div className="text-white text-opacity-70 absolute opacity-0 group-hover:opacity-100 text-left left-2 top-4">
                    <BsFillPlayFill size={20} />
                  </div>
                  <div className="flex items-center pl-10 ">
                    <img
                      className="h-9 w-9"
                      src={item.track.album.images[0].url}
                      alt="viral"
                    />
                    <div className="text-sm ml-3 mt-1.5">
                      <p className="leading-none truncate w-96 pr-32">
                        {item.track.name}
                      </p>
                      <span className="text-white  text-opacity-70">
                        {/* Fireboy DMW */}
                        {item.track.artists[0].name}
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className="
             
                  relative top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  text-opacity-70"
                >
                  {item.track.album.name}
                </td>
                <td
                  className="
                   relative top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  text-opacity-70"
                >
                  1 day ago
                </td>
                <td
                  className="
                   relative top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  rounded-r text-opacity-70"
                >
                  2:31
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </div>
  );
}
