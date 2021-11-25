// import { usePalette } from "react-palette";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

import { BiDotsHorizontalRounded } from "react-icons/bi";
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
        // background: "#1e1e1e",
        // background:"#273ca0",
        paddingLeft: "19rem",
        paddingRight: "3rem",
        // background:
        //    linear-gradient"(to bottom, #273ca0, #2d347d, #2c2d5b, #27253c, #1e1e1e)"
        backgroundImage: `linear-gradient(to top, #1e1e1e ,  #1e1e1e ,   #273ca0   )`,
      }}
      className="pt-24 pb-10     min-h-screen  text-white"
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
        <table className="table-fixed ">
          <thead className="">
            <tr className="border-b text-sm text-opacity-70 text-white ">
              <th className="w-1/2 text-left pb-2  ">#TITLE</th>
              <th className="w-1/4 text-left pb-2 ">ALBUM</th>
              <th className="w-1/4 text-left pb-2 ">DATE ADDED</th>
              <th className="w-1/4 text-left pb-2 ">TIME</th>
            </tr>
          </thead>
          <div className="pt-5"></div>
          <tbody className="">
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  1
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>{" "}
            <tr>
              <td className=" pb-4 relative">
                <span className="text-white text-opacity-70 absolute top-2.5">
                  2
                </span>
                <div className="flex items-center pl-6">
                  <img
                    className="h-10 w-10"
                    src="/assets/viralhits.jpeg"
                    alt="viral"
                  />
                  <div className="text-sm ml-2">
                    <p>Peru</p>
                    <span className="text-white text-opacity-70">
                      Fireboy DMW
                    </span>
                  </div>
                </div>
              </td>
              <td className=" pb-4  text-white text-opacity-70">Adam</td>
              <td className=" pb-4  text-white text-opacity-70">858</td>
              <td className=" pb-4  text-white text-opacity-70">2:31</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
