import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import "./style.css"
export default function Welcome() {
  return (
    <>
      <div
        className="flex lg:items-center lg:justify-center premium-section "
        style={{ background: "#f8ccd2", height: "100%", minHeight: "80vh" }}
      >
        <div className="text-white flex flex-col items-center mt-44 lg:mt-12 ">
          <h1
            style={{ color: "#d8412c",  }}
            className="lg:text-7xl text-4xl text-center lg:text-right tracking-tighter lg:tracking-normal font-extrabold"
          >
            Go Premium. Be happy.
          </h1>
          <button
            style={{ background: "#d8412c" }}
            className="px-12 text-sm tracking-wider rounded-full py-4 lg:py-3 mt-10  transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
          >
            START A FREE TRIAL
          </button>
          <p
            className="text-sm px-5 lg:px-0 text-center lg:text-left mt-10"
            style={{ color: "#d8412c" }}
          >
            * Terms and conditions apply. Open only to users who haven't already
            tried Premium.
          </p>
        </div>
        {/* <div>
        <Link to="/dashboard">
          {" "}
          <button className="bg-green-200"> open web player</button>
        </Link>
      </div> */}
      </div>
      <div
        style={{ height: "100%", minHeight: "90vh", background: "#2941AB" }}
        className="lg:p-20 flex lg:justify-center webplayer-section items-center pt-32 lg:items-start flex-col lg:block lg:pt-32 bg-blue-400  "
      >
        <h1 style={{ color: "#64d862" }} className="lg:text-6xl  tracking-tighter lg:tracking-normal text-4xl text-center lg:text-left font-semibold">
          Looking for music?
        </h1>
        <p
          style={{ color: "#59c571" }}
          className="lg:py-12 py-5 tracking-wider lg:text-xl text-base text-center lg:text-left "
        >
          Start listening to the best new releases.
        </p>
        <button
          className="lg:px-14 px-7  py-4   tracking-wider  lg:py-3.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-sm rounded-full"
          style={{ background: "#64d862", color: "#2941AB" }}
        >
          <Link to="/dashboard"> OPEN WEB PLAYER</Link>
        </button>
      </div>

      {/* footer section */}
      <section
        style={{ height: "100%", minHeight: "75vh" }}
        className="bg-black h-full lg:px-20  flex flex-col justify-between pt-10 lg:pt-20 "
      >
        <div className="  flex lg:flex-row  flex-col pl-4 lg:pl-0 justify-between">
          <div className="flex lg:flex-row  flex-col lg:justify-between ">
            <div className="lg:mr-14 lg:-mt-4">
              <svg
                width="138"
                height="44"
                viewBox="0 0 148 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.04407 22.1294C1.04407 34.0353 10.9629 43.8706 22.97 43.8706C34.977 43.8706 44.8959 34.0353 44.8959 22.1294C44.8959 10.2235 34.977 0.517639 22.97 0.517639C10.9629 0.517639 1.04407 10.2235 1.04407 22.1294ZM31.0617 32.2235C25.9718 29.1176 19.4462 28.3412 11.8765 30.0235C10.0494 30.2823 9.78833 27.6941 11.3545 27.4353C19.7072 25.4941 26.7548 26.4 32.4973 29.8941C33.933 30.8 32.4973 33 31.0617 32.2235ZM33.2804 26.4C27.4074 22.7765 18.4021 21.7412 11.485 23.8118C9.26629 24.4588 8.48322 21.0941 10.5714 20.5765C18.5326 18.247 28.321 19.4118 35.1076 23.5529C36.9347 24.7176 35.1076 27.5647 33.2804 26.4ZM10.4409 17.2118C8.2222 17.9882 6.78657 14.2353 9.26629 13.3294C16.9665 11 30.0176 11.3882 38.1093 16.1765C40.328 17.3412 38.2398 20.9647 35.8906 19.6706C28.843 15.5294 17.097 15.1412 10.4409 17.2118ZM59.9047 28.9882C57.686 28.9882 55.5979 28.2118 53.7707 26.4C53.6402 26.4 53.6402 26.5294 53.6402 26.5294L51.552 28.9882C51.4215 29.1176 51.4215 29.247 51.552 29.3765C53.9012 31.447 56.7725 32.4823 59.9047 32.4823C64.3421 32.4823 67.0829 30.0235 67.0829 26.4C67.0829 23.2941 65.1252 21.6118 60.5573 20.4471C56.7725 19.5412 56.1199 18.8941 56.1199 17.6C56.1199 16.3059 57.425 15.5294 59.1217 15.5294C60.8183 15.5294 62.3844 16.1765 64.2116 17.4706C64.2116 17.4706 64.3421 17.6 64.4726 17.6C64.6031 17.6 64.6031 17.4706 64.6031 17.4706L66.4303 14.8823C66.5608 14.7529 66.5608 14.7529 66.4303 14.6235C64.3421 12.9412 61.8624 12.0353 59.1217 12.0353C55.0758 12.0353 52.2046 14.4941 52.2046 17.9882C52.2046 21.7412 54.8148 22.9059 58.9911 23.9412C62.6455 24.7176 63.1675 25.4941 63.1675 26.7882C63.1675 28.2118 61.8624 28.9882 59.9047 28.9882ZM72.3033 19.0235V17.3412C72.3033 17.2118 72.1728 17.0823 72.0423 17.0823H68.649C68.5185 17.0823 68.388 17.2118 68.388 17.3412V36.3647C68.388 36.4941 68.5185 36.6235 68.649 36.6235H72.0423C72.1728 36.6235 72.3033 36.4941 72.3033 36.3647V30.4118C73.6084 31.8353 75.0441 32.4823 77.0017 32.4823C80.5255 32.4823 84.0493 29.7647 84.0493 24.5882C84.0493 19.4118 80.5255 16.8235 77.0017 16.8235C75.0441 16.8235 73.6084 17.4706 72.3033 19.0235ZM76.2187 29.1176C73.8695 29.1176 72.1728 27.1765 72.1728 24.5882C72.1728 22 73.8695 20.1882 76.2187 20.1882C78.5679 20.1882 80.134 22 80.134 24.5882C80.134 27.1765 78.5679 29.1176 76.2187 29.1176ZM85.0934 24.7176C85.0934 29.1176 88.6172 32.4823 93.1852 32.4823C97.7531 32.4823 101.277 28.9882 101.277 24.5882C101.277 20.1882 97.8836 16.8235 93.3157 16.8235C88.7478 16.8235 85.0934 20.3176 85.0934 24.7176ZM89.0088 24.5882C89.0088 22 90.7054 20.1882 93.1852 20.1882C95.6649 20.1882 97.492 22.1294 97.492 24.7176C97.492 27.3059 95.7954 29.1176 93.3157 29.1176C90.8359 29.1176 89.0088 27.1765 89.0088 24.5882ZM107.28 17.0823V13.3294C107.28 13.2 107.28 13.0706 107.15 13.0706H103.757C103.626 13.0706 103.496 13.2 103.496 13.3294V17.0823H101.799C101.668 17.0823 101.538 17.2118 101.538 17.3412V20.1882C101.538 20.3176 101.668 20.4471 101.799 20.4471H103.496V27.9529C103.496 30.9294 104.931 32.4823 107.933 32.4823C109.108 32.4823 110.282 32.2235 111.196 31.7059C111.326 31.7059 111.326 31.5765 111.326 31.447V28.7294C111.326 28.6 111.326 28.4706 111.196 28.4706H110.935C110.282 28.8588 109.499 28.9882 108.847 28.9882C107.802 28.9882 107.28 28.4706 107.28 27.4353V20.4471H111.196C111.326 20.4471 111.457 20.3176 111.457 20.1882V17.3412C111.457 17.2118 111.326 17.0823 111.196 17.0823H107.28ZM124.116 16.6941C124.116 15.2706 124.638 14.7529 125.813 14.7529C126.466 14.7529 127.118 14.7529 127.771 15.0118H127.901C127.901 15.0118 128.032 14.8823 128.032 14.7529V12.0353C128.032 11.9059 128.032 11.7765 127.901 11.7765C127.249 11.5176 126.335 11.3882 125.03 11.3882C121.898 11.3882 120.332 13.2 120.332 16.4353V17.0823H118.635C118.504 17.0823 118.374 17.2118 118.374 17.3412V20.1882C118.374 20.3176 118.504 20.4471 118.635 20.4471H120.332V31.9647C120.332 32.0941 120.462 32.2235 120.593 32.2235H123.986C124.116 32.2235 124.116 32.0941 124.116 31.9647V20.4471H127.379L132.208 31.9647C131.686 33.1294 131.164 33.3882 130.381 33.3882C129.728 33.3882 129.076 33.2588 128.423 32.8706H128.293L128.162 33L126.988 35.4588C126.988 35.5882 126.988 35.847 127.118 35.847C128.293 36.4941 129.337 36.7529 130.642 36.7529C133.122 36.7529 134.557 35.5882 135.732 32.4823L141.605 17.4706V17.2118C141.605 17.0823 141.474 17.0823 141.344 17.0823H137.82C137.69 17.0823 137.69 17.2118 137.69 17.3412L134.035 27.4353L130.12 17.3412C130.12 17.2118 129.989 17.0823 129.859 17.0823H124.116V16.6941ZM113.284 17.0823C113.153 17.0823 113.023 17.2118 113.023 17.3412V31.9647C113.023 32.0941 113.153 32.2235 113.284 32.2235H116.677C116.808 32.2235 116.808 32.0941 116.808 31.9647V17.3412C116.808 17.2118 116.808 17.0823 116.677 17.0823H113.284ZM112.501 12.8118C112.501 14.1059 113.675 15.2706 114.981 15.2706C116.286 15.2706 117.33 14.1059 117.33 12.8118C117.33 11.5176 116.286 10.4823 114.981 10.4823C113.675 10.4823 112.501 11.5176 112.501 12.8118ZM144.476 21.7412C145.781 21.7412 146.956 20.7059 146.956 19.4118C146.956 18.1176 145.781 17.0823 144.476 17.0823C143.171 17.0823 142.127 18.1176 142.127 19.4118C142.127 20.7059 143.171 21.7412 144.476 21.7412ZM144.476 17.3412C145.651 17.3412 146.695 18.247 146.695 19.4118C146.695 20.5765 145.651 21.4823 144.476 21.4823C143.302 21.4823 142.388 20.5765 142.388 19.4118C142.388 18.247 143.302 17.3412 144.476 17.3412ZM144.998 19.6706C145.39 19.5412 145.651 19.2823 145.651 18.8941C145.651 18.3765 145.129 18.1176 144.607 18.1176H143.563V20.5765H144.085V19.8H144.607L145.129 20.5765H145.781L144.998 19.6706ZM144.607 18.5059C144.868 18.5059 145.129 18.6353 145.129 18.8941C145.129 19.1529 144.868 19.2823 144.607 19.2823H144.085V18.5059H144.607Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex pt-5 lg:pt-0 flex-col lg:mr-20">
              <h1 className="text-white text-opacity-60 mb-3">Company</h1>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400 mb-4 " href="#div">
                About
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400  mb-4 " href="#div">
                Jobs
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400  mb-4" href="#div">
                For the Record
              </a>
            </div>
            <div className="flex pt-5 lg:pt-0 flex-col lg:mr-20">
              <h1 className="text-white text-opacity-60  mb-3">Communities</h1>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400   mb-4" href="#div">
                For Artists
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400  mb-4" href="#div">
                Developers
              </a>
              <a className="text-white   hover:text-spotifyGreen ease-in-out transition duration-400  mb-4" href="#div">
                Advertising
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400  mb-4" href="#div">
                Investors
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400 mb-4" href="#div">
                Vendors
              </a>
            </div>
            <div className="flex pt-5 lg:pt-0 flex-col">
              <h1 className="text-white text-opacity-60   mb-3">
                Useful Links
              </h1>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400 mb-4" href="#div">
                Support
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400 mb-4" href="#div">
                Web Player
              </a>
              <a className="text-white  hover:text-spotifyGreen ease-in-out transition duration-400 mb-4" href="#div">
                Free Mobile App
              </a>
            </div>
          </div>
          <div className="text-white pt-20 lg:pt-0 flex">
            <div className="h-12 flex items-center  hover:text-spotifyGreen ease-in-out transition duration-400 pointer justify-center  w-12 rounded-full bg-white bg-opacity-10">
              <AiOutlineInstagram size={24} />
            </div>
            <div className="h-12 flex  hover:text-spotifyGreen ease-in-out transition duration-400 items-center pointer justify-center mx-2 w-12 rounded-full bg-white bg-opacity-10">
              <FaTwitter size={24} />
            </div>
            <div className="h-12 flex  hover:text-spotifyGreen ease-in-out transition duration-400 items-center pointer justify-center w-12 rounded-full bg-white bg-opacity-10">
              <FaFacebookF size={24} />
            </div>
          </div>
        </div>

        <div className="py-10 flex lg:justify-between pl-4 lg:pl-0 flex-wrap text-xs items-center ">
          <div>
            <a className="text-white text-opacity-50 mr-8  hover:text-spotifyGreen ease-in-out transition duration-400 text-xs" href="#div">
              Legal
            </a>
            <a className="text-white text-opacity-50 mr-8  hover:text-spotifyGreen ease-in-out transition duration-400 text-xs " href="#div">
              Privacy Center
            </a>
            <a className="text-white text-opacity-50 mr-8  hover:text-spotifyGreen ease-in-out transition duration-400 text-xs" href="#div">
              Privacy Policy
            </a>
            <a className="text-white text-opacity-50 mr-8  hover:text-spotifyGreen ease-in-out transition duration-400 text-xs" href="#div">
              Cookies
            </a>
            <a className="text-white text-opacity-50 mr-8  hover:text-spotifyGreen ease-in-out transition duration-400 text-xs" href="#div">
              About Ads
            </a>
            <a className="text-white text-opacity-50 mr-8 text-xs  hover:text-spotifyGreen ease-in-out transition duration-400" href="#div">
              Additional CA Privacy Disclosures
            </a>
          </div>
          <div className="lg:-mt-8">
            <h1 className="text-opacity-50 text-white lg:pb-2">USA</h1>
            <span className="text-opacity-50 text-white ">
              &copy; 2021 Spotify Ad
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
