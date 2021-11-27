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

  const handleAudio = (file) => {
    var audio = new Audio(file);
    console.log(audio);
    document.addEventListener("click", () => {
      audio.play();
    });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, #1e1e1e ,  #1e1e1e 90% ,   #273ca0   )`,
      }}
      className="pt-24 pb-10 overflow-x-hidden  2xl:pl-paddingXl 2xl:py-28  lg:pl-72  lg:pr-9     min-h-screen  text-white"
    >
      <section className="flex flex-col lg:flex-row justify-center lg:justify-start  items-center lg:items-end ">
        <figure>
          <img
            className="lg:h-60 lg:w-60 w-44"
            src="/assets/mood3.jpeg"
            alt="gbedu"
          />
        </figure>
        <div className="lg:pl-4 flex flex-col justify-center items-center lg:block">
          <h2 className="text-sm hidden lg:block">PLAYLIST</h2>
          <h1 className=" text-4xl text-center lg:text-right lg:text-8xl py-4 font-bold tracking-tighter">
            Mood Booster
          </h1>
          <p className="text-sm text-opacity-70 text-center tracking-wider lg:text-left  text-white">
            Nigeria's Hottest tracks. Cover:{" "}
            <span className="text-white"> Davido</span> and{" "}
            <span className="text-white"> Focalistic</span>
          </p>
          <div className="flex text-sm  justify-center lg:justify-start items-center py-1">
            <h3 className=" text-white text-xs lg:text-sm tracking-wider lg:tracking-wide text-opacity-70 lg:text-opacity-100">
              Spotify
            </h3>
            <span className="mx-1 -mt-1 text-xs lg:text-sm tracking-wider lg:tracking-wide ">
              .
            </span>
            <span className="text-white text-opacity-70 text-xs lg:text-sm tracking-wider lg:tracking-wide  ">
              19,953 Likes
            </span>
            <span className="px-1  -mt-1 text-xs lg:text-sm tracking-wider lg:tracking-wide ">
              .
            </span>
            <span className="text-white text-opacity-70 text-xs lg:text-sm tracking-wider lg:tracking-wide ">
              80 Songs, 4hr 12 min
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center lg:justify-start mt-6">
          <div
            style={{ background: "#1ed760" }}
            className="bg-red-100 p-2 rounded-full inline-block"
          >
            <BsFillPlayFill size={40} />
          </div>
          <div className="mx-6 hidden lg:block">
            <IoMdHeartEmpty size={30} />
          </div>
          <div className="hidden lg:block">
            <BiDotsHorizontalRounded color="white" size={30} />
          </div>
        </div>
      </section>
      <table className="table-auto  ">
        <thead className="hidden lg:table-header-group">
          <tr className="border-b border-opacity-10  text-sm  text-opacity-70 text-white ">
            <th className=" lg:w-80 text-left pb-2 lg:pt-8  pl-8  ">#TITLE</th>
            <th className=" lg:w-80 text-left pb-2  lg:pt-8 ">ALBUM</th>
            <th className=" lg:w-80 text-left pb-2 lg:pt-8 ">DATE ADDED</th>
            <th className="text-left pb-2 pr-20 lg:pt-8 ">
              <IoTimeOutline size={20} />
            </th>
          </tr>
        </thead>
        {singlePlaylist.items?.map((item, index) => (
          <tbody key={index}>
            <tr className="group  ">
              <td
                className="
           lg:group-hover:bg-musicTabHover  transition duration-400 group cursor-pointer ease-in-out  rounded-l py-2 top-3 bottom-4    relative "
              >
                <span
                  className={` ${
                    index < 9
                      ? "left-8 lg:left-4 lg:top-3.5 top-4"
                      : "lg:left-2 left-6 top-4 lg:top-3.5"
                  } text-white lg:text-base text-base text-opacity-70 absolute lg:group-hover:opacity-0 text-left `}
                >
                  {index + 1}
                </span>
                <div
                  onClick={() => handleAudio(item.track.preview_url)}
                  className="text-white  play text-opacity-70 absolute opacity-0 lg:group-hover:opacity-100 text-left left-2 top-4"
                >
                  <BsFillPlayFill size={20} />
                </div>
                {/* <div className="flex items-center pl-10 "> */}
                <div className="relative">
                  <div className="flex items-center pl-14 lg:pl-10 ">
                    <img
                      className="h-9 w-9 hidden lg:block"
                      src={item.track.album.images[0]?.url}
                      alt="viral"
                    />
                    <div className="text-sm ml-3 mt-1.5">
                      <p className="leading-none truncate w-96 pr-32">
                        {item.track.name}
                      </p>
                      <span className="text-white lg:text-sm text-xs  text-opacity-70">
                        {/* Fireboy DMW */}
                        {item.track.artists[0].name}
                      </span>
                    </div>
                  </div>
                  <h1 className="text-sm absolute lg:hidden transform rotate-90 right-12 top-1 text-opacity-80 text-white">
                    {" "}
                    <BiDotsHorizontalRounded size={25} />
                  </h1>
                </div>
              </td>
              <td
                className="
     
         hidden lg:table-cell relative top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  text-opacity-70"
              >
                {item.track.album.name}
              </td>
              <td
                className="
           relative     hidden lg:table-cell top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  text-opacity-70"
              >
                1 day ago
              </td>
              <td
                className="
           relative     hidden lg:table-cell  top-3 bottom-4 py-2 text-white text-sm group-hover:bg-musicTabHover transition duration-400 group cursor-pointer ease-in-out  rounded-r text-opacity-70"
              >
                2:31
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
