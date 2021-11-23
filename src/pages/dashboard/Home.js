import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
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
        className="py-24 2xl:pl-paddingXl 2xl:py-28 w-full 2 pl-72  pr-9  min-h-screen  text-white"
      >
        <section className="">
          {/* Popular section start*/}

          <div className="">
            <h1 className="text-2xl 2xl:text-3xl  mb-5 tracking-tight font-bold ">
              Editor's Pick
            </h1>

            <div className="grid grid-cols-5 gap-5">
              {editorspick.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col  bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.images[0].url}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full object-cover filter drop-shadow-2xl"
                    />
                    <NavLink to={"/dashboard/playlist/" + item.id} end>
                      <div
                        style={{ background: "#1ed760" }}
                        className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                      >
                        <BsFillPlayFill size={20} />
                      </div>
                    </NavLink>
                  </figure>

                  <div className="pt-4">
                    <h1 className="font-bold 2xl:text-lg truncate mb-1">{item.name}</h1>
                    <p className="text-xs line-clamp-2 2xl:text-base text-white text-opacity-70">
                      {item.description.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Popular section end*/}
          {/* editors chice section start*/}
          <div className="mt-12">
            <h1 className="text-2xl 2xl:text-3xl tracking-tight font-bold ">Mood</h1>
            <p className="mb-5 text-sm text-opacity-60 2xl:text-base  text-white">
              playlist to match your mood
            </p>
            <div className="grid grid-cols-5 gap-5">
              {moodCategory.map((item, index) => (
                <div
                  key={index}
                  className="p-4  flex flex-col  bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.images[0].url}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full object-cover filter drop-shadow-2xl"
                    />
                    <NavLink
                      onClick={() =>
                        dispatch({
                          type: "FETCH_SINGLE_PLAYLIST",
                          payload: item.id,
                        })
                      }
                      to={"/dashboard/playlist/" + item.id}
                      end
                    >
                      <div
                        style={{ background: "#1ed760" }}
                        className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                      >
                        <BsFillPlayFill size={20} />
                      </div>
                    </NavLink>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1 2xl:text-lg truncate">{item.name}</h1>
                    <p className="text-xs text-white  2xl:text-base  line-clamp-2 text-opacity-70">
                      {item.description.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* editors chice section end*/}

          {/* Focus section start*/}

          <div className="mt-12">
            <h1 className="text-2xl tracking-tight font-bold ">Focus</h1>
            <p className="mb-5 text-sm 2xl:text-base  text-opacity-70 text-white">
              Music to help you concentrate
            </p>
            <div className="grid grid-cols-5 gap-5">
              {focusCategory.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.images[0].url}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black object-cover w-full filter drop-shadow-2xl"
                    />
                    <NavLink to={"/dashboard/playlist/" + item.id} end>
                      <div
                        style={{ background: "#1ed760" }}
                        className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                      >
                        <BsFillPlayFill size={20} />
                      </div>
                    </NavLink>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold truncate 2xl:text-lg  mb-1">{item.name}</h1>
                    <p className="text-xs line-clamp-2 2xl:text-base   text-white text-opacity-70">
                      {item.description.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Focus section end*/}
        </section>
      </div>
      {/* show playlist section end */}
    </>
  );
}
