import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import {
  focus,
  editorsPick,
  popular,
  mood,
  soundTrack,
} from "../../components/dashboard/utils";

export default function Home() {
  return (
    <>
      {/* show playlist section start */}
      <div
        style={{
          background: "#121212",
          paddingLeft: "19rem",
          paddingRight: "3rem",
        }}
        className="py-24 w-full   min-h-screen  text-white"
      >
        <section className="">
          {/* editors chice section start*/}
          <div>
            <h1 className="text-2xl tracking-tight font-bold mb-5">
              Editor's Pick
            </h1>
            <div className="grid grid-cols-5 gap-5">
              {editorsPick.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col  bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full object-cover filter drop-shadow-2xl"
                    />
                    <div
                      style={{ background: "#1ed760" }}
                      className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                    >
                      <BsFillPlayFill size={20} />
                    </div>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className="text-xs text-white text-opacity-70">
                      {item.description}
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
            <p className="mb-5 text-sm text-opacity-70 text-white">
              Music to help you concentrate
            </p>
            <div className="grid grid-cols-5 gap-5">
              {focus.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black object-cover w-full filter drop-shadow-2xl"
                    />
                    <div
                      style={{ background: "#1ed760" }}
                      className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                    >
                      <BsFillPlayFill size={20} />
                    </div>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className="text-xs text-white text-opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Focus section end*/}

          {/* Mood section start*/}

          <div className="mt-12">
            <h1 className="text-2xl tracking-tight font-bold ">Mood</h1>
            <p className="mb-5 text-sm text-opacity-70 text-white">
              Playlist to match your mood.
            </p>
            <div className="grid grid-cols-5 gap-5">
              {mood.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative  ">
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black object-cover filter  drop-shadow-2xl w-full"
                    />
                    <div
                      style={{ background: "#1ed760" }}
                      className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                    >
                      <BsFillPlayFill size={20} />
                    </div>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className="text-xs text-white text-opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mood section end*/}

          {/* Popular section start*/}

          <div className="mt-12">
            <h1 className="text-2xl mb-5 tracking-tight font-bold ">
              Popular new releases
            </h1>

            <div className="grid grid-cols-5 gap-5">
              {popular.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col  bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full object-cover filter drop-shadow-2xl"
                    />
                    <div
                      style={{ background: "#1ed760" }}
                      className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                    >
                      <BsFillPlayFill size={20} />
                    </div>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className="text-xs text-white text-opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Popular section end*/}

          {/* sound track section start*/}

          <div className="mt-12">
            <h1 className="text-2xl mb-5 tracking-tight font-bold ">
              Soundtrack your home
            </h1>

            <div className="grid grid-cols-5 gap-5">
              {soundTrack.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col bg-cardBg  rounded drop-shadow-2xl hover:bg-cardHover transition duration-500 group cursor-pointer ease-in-out "
                >
                  <figure className="relative ">
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full filter drop-shadow-2xl"
                    />
                    <div
                      style={{ background: "#1ed760" }}
                      className="bg-green-400 p-2 drop-shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 transform group-hover:translate-y-0 bottom-1.5 transition duration-500  ease-in-out right-1.5 rounded-full absolute z-10"
                    >
                      <BsFillPlayFill size={20} />
                    </div>
                  </figure>
                  <div className="pt-4">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className="text-xs text-white text-opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* sound track section end*/}
        </section>
      </div>
      {/* show playlist section end */}
    </>
  );
}
