import React from "react";
import { editorsPick } from "../../components/dashboard/utils";
export default function Search() {
  return (
    <>
      {/* show playlist section start */}
      <div
        style={{
          background: "#1e1e1e",
        }}
        className=" py-24 2xl:pl-paddingXl 2xl:py-28 w-full 2 pl-72  pr-9   w-full   min-h-screen  text-white"
      >
        <section className="">
          {/* editors chice section start*/}
          <div>
            <h1 className="text-2xl tracking-tight font-bold mb-5">
              Browse all
            </h1>
            <div className="grid grid-cols-5 gap-5">
              {editorsPick.map((item, index) => (
                <div
                  key={index}
                  className="  rounded drop-shadow-2xl cursor-pointer "
                >
                  <figure>
                    <img
                      src={item.cover}
                      alt="playlist_editors_cover"
                      className="shadow-2xl bg-black w-full object-cover filter drop-shadow-2xl"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
          {/* editors chice section end*/}
        </section>
      </div>
      {/* show playlist section end */}
    </>
  );
}
