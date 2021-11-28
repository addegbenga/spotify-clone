import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  getMoodPlaylist,
  getFocusPlaylist,
  getFeaturedPlaylist,
} from "../../actions/dashBoardAction";
import { NavLink } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  const { moodCategory, focusCategory, editorspick } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    dispatch(getMoodPlaylist());
    dispatch(getFocusPlaylist());
    dispatch(getFeaturedPlaylist());
  }, [dispatch]);

  return (
    <>
      {/* show playlist section start */}
      <div
        style={{
          background: "#1e1e1e",
          // paddingLeft:"21.5rem"
        }}
        className="lg:py-24 2xl:pl-paddingXl  2xl:py-28 w-full  lg:pl-72  lg:pr-9  min-h-screen  text-white"
      >
        <section className="">
          {/* Popular section start*/}

          <div>
            <h1 className=" text-xl lg:text-2xl 2xl:text-3xl mb-1.5 ml-5 lg:ml-0 pt-24 lg:pt-0 lg:mb-5 tracking-tight font-bold ">
              Editor's Picks
            </h1>
            <div className=" relative scrollbar overflow-y-hidden h-52 lg:h-auto  overflow-x-scroll lg:overflow-x-hidden  ">
              <div className="flex   w-full lg:grid lg:grid-cols-5  lg:gap-5">
                {editorspick.map((item, index) => (
                  <NavLink key={index} to={`playlist/${item.id}`}>
                    <div
                      style={{ position: "absolute", left: index * 172 + "px" }}
                      className="lg:p-4 card-scroll flex flex-col   lg:bg-cardBg lg:w-full w-40 mx-5 lg:mx-0 lg:h-auto h-40 lg:rounded lg:drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                    >
                      <figure className="relative ">
                        <img
                          src={item.images[0].url}
                          alt="playlist_editors_cover"
                          className="shadow-2xl bg-black lg:w-full w-40 h-40 lg:h-auto lg:filter lg:drop-shadow-2xl"
                        />

                        <div
                          style={{ background: "#1ed760" }}
                          className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                        >
                          <BsFillPlayFill size={20} />
                        </div>
                      </figure>

                      <div className="lg:pt-4">
                        <h1 className="font-bold text-sm lg:text-base lg:text-left 2xl:text-lg text-center truncate mt-1 lg:mb-1">
                          {item.name}
                        </h1>
                        <p className="text-xs opacity-0 absolute lg:opacity-100 lg:static line-clamp-2 2xl:text-base text-white text-opacity-70">
                          {item.description.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* Popular section end*/}
          {/* editors chice section start*/}
          <div>
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl mb-1.5  ml-5 lg:ml-0 pt-3.5 lg:mt-4 lg:mb-0 tracking-tight font-bold ">
              Mood
            </h1>
            <p className=" lg:mb-3 hidden lg:block text-sm text-opacity-60 2xl:text-base  text-white">
              playlist to match your mood
            </p>
            <div className=" relative scrollbar overflow-y-hidden h-52 lg:h-auto  overflow-x-scroll lg:overflow-x-hidden  ">
              <div className="flex   w-full lg:grid lg:grid-cols-5  lg:gap-5">
                {moodCategory.map((item, index) => (
                  <NavLink key={index} to={`playlist/${item.id}`} end>
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: index * 172 + "px",
                      }}
                      className="lg:p-4 card-scroll flex flex-col   lg:bg-cardBg lg:w-full w-40 mx-5 lg:mx-0 lg:h-auto h-40 lg:rounded lg:drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out  "
                    >
                      <figure className="relative ">
                        <img
                          src={item.images[0].url}
                          alt="playlist_editors_cover"
                          className="shadow-2xl bg-black lg:w-full w-40 h-40 lg:h-full lg:filter lg:drop-shadow-2xl"
                        />

                        <div
                          style={{ background: "#1ed760" }}
                          className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                        >
                          <BsFillPlayFill size={20} />
                        </div>
                      </figure>
                      <div className="lg:pt-4 ">
                        <h1 className="font-bold text-sm lg:text-base lg:text-left 2xl:text-lg text-center truncate mt-1 lg:mb-1">
                          {item.name}
                        </h1>
                        <p className="text-xs opacity-0 absolute lg:opacity-100 lg:static line-clamp-2 2xl:text-base text-white text-opacity-70">
                          {item.description.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* editors chice section end*/}

          {/* Focus section start*/}

          <div>
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl mb-1.5  ml-5 lg:ml-0 pt-3.5 lg:mt-4 lg:mb-0 tracking-tight font-bold  ">
              Focus
            </h1>
            <p className="lg:mb-3 hidden lg:block text-sm text-opacity-60 2xl:text-base  text-white">
              Music to help you concentrate
            </p>
            <div className="relative scrollbar overflow-y-hidden h-52 lg:h-auto  overflow-x-scroll lg:overflow-x-hidden  ">
              <div className="flex   w-full lg:grid lg:grid-cols-5  lg:gap-5">
                {focusCategory.map((item, index) => (
                  <NavLink key={index} to={`playlist/${item.id}`} end>
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: index * 172 + "px",
                      }}
                      className="lg:p-4 card-scroll flex flex-col   lg:bg-cardBg lg:w-full w-40 mx-5 lg:mx-0 lg:h-auto h-40 lg:rounded lg:drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out  "
                    >
                      <figure className="relative ">
                        <img
                          src={item.images[0].url}
                          alt="playlist_editors_cover"
                          className="shadow-2xl bg-black lg:w-full w-40 h-40 lg:h-full lg:filter lg:drop-shadow-2xl"
                        />

                        <div
                          style={{ background: "#1ed760" }}
                          className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                        >
                          <BsFillPlayFill size={20} />
                        </div>
                      </figure>
                      <div className="lg:pt-4">
                        <h1 className="font-bold text-sm lg:text-base lg:text-left 2xl:text-lg text-center truncate mt-1 lg:mb-1">
                          {item.name}
                        </h1>
                        <p className="text-xs opacity-0 absolute lg:opacity-100 lg:static line-clamp-2 2xl:text-base text-white text-opacity-70">
                          {item.description.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* Focus section end*/}

          {/* additional section on mobile section start*/}

          <div className="lg:hidden pb-6">
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl mb-1.5  ml-5 lg:ml-0 pt-3.5 lg:mt-4 lg:mb-0 tracking-tight font-bold  ">
              Blow Mind
            </h1>
            <p className="lg:mb-3 hidden lg:block text-sm text-opacity-60 2xl:text-base  text-white">
              Music to help you concentrate
            </p>
            <div className="relative scrollbar overflow-y-hidden h-52 lg:h-auto  overflow-x-scroll lg:overflow-x-hidden  ">
              <div className="flex   w-full lg:grid lg:grid-cols-5  lg:gap-5">
                {moodCategory.map((item, index) => (
                  <NavLink key={index} to={`playlist/${item.id}`} end>
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: index * 172 + "px",
                      }}
                      className="lg:p-4 card-scroll flex flex-col   lg:bg-cardBg lg:w-full w-40 mx-5 lg:mx-0 lg:h-auto h-40 lg:rounded lg:drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out  "
                    >
                      <figure className="relative ">
                        <img
                          src={item.images[0].url}
                          alt="playlist_editors_cover"
                          className="shadow-2xl bg-black lg:w-full w-40 h-40 lg:h-full lg:filter lg:drop-shadow-2xl"
                        />

                        <div
                          style={{ background: "#1ed760" }}
                          className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                        >
                          <BsFillPlayFill size={20} />
                        </div>
                      </figure>
                      <div className="lg:pt-4">
                        <h1 className="font-bold text-sm lg:text-base lg:text-left 2xl:text-lg text-center truncate mt-1 lg:mb-1">
                          {item.name}
                        </h1>
                        <p className="text-xs opacity-0 absolute lg:opacity-100 lg:static line-clamp-2 2xl:text-base text-white text-opacity-70">
                          {item.description.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* end of additional asection on mobile */}
        </section>
      </div>
      {/* show playlist section end */}
    </>
  );
}
