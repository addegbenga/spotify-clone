import { BsFillHeartFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
const base = "/dashboard";
export const navbarLinks = [
  {
    name: "Home",
    link: base,
    svg: (
      <path
        d="M37.0797 39H23.7955V25.5H16.2045V39H2.92029V10.9406L20 1L37.0797 10.8728V39Z"
        // fill="#ffff"
        // stroke="#fff"
      />
    ),
  },
  {
    name: "Search",
    link: base + "/search",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.3008 28.1934L37.4721 37.782L36.0548 39L27.8613 29.4114C25.0416 31.552 21.8675 32.6223 18.3391 32.6223C16.1984 32.6223 14.1501 32.2052 12.194 31.3711C10.238 30.537 8.55498 29.4151 7.14505 28.0052C5.73512 26.5953 4.61314 24.9123 3.7791 22.9562C2.94506 21.0001 2.52801 18.9518 2.52795 16.8111C2.5279 14.6705 2.94494 12.6222 3.7791 10.6661C4.61326 8.70995 5.73524 7.02696 7.14505 5.61709C8.55486 4.20723 10.2378 3.08524 12.194 2.25115C14.1502 1.41705 16.1985 1 18.3391 1C20.4797 1 22.528 1.41705 24.4842 2.25115C26.4403 3.08524 28.1233 4.20723 29.5331 5.61709C30.943 7.02696 32.0649 8.70995 32.8991 10.6661C33.7333 12.6222 34.1503 14.6705 34.1502 16.8111C34.1502 19.0108 33.7221 21.0924 32.8659 23.0559C32.0096 25.0194 30.8212 26.7319 29.3006 28.1934L29.3008 28.1934ZM18.3393 30.7621C20.8637 30.7621 23.1963 30.1383 25.3369 28.8908C27.4776 27.6433 29.1717 25.9492 30.4191 23.8086C31.6666 21.668 32.2903 19.3355 32.2904 16.811C32.2905 14.2865 31.6667 11.9539 30.4191 9.8133C29.1716 7.67269 27.4775 5.97866 25.3369 4.7312C23.1964 3.48375 20.8638 2.86002 18.3393 2.86002C15.8147 2.86002 13.4822 3.48375 11.3416 4.7312C9.20105 5.97866 7.50702 7.67269 6.25951 9.8133C5.01199 11.9539 4.38827 14.2865 4.38832 16.811C4.38838 19.3355 5.01211 21.668 6.25951 23.8086C7.5069 25.9492 9.20094 27.6433 11.3416 28.8908C13.4823 30.1383 15.8148 30.7621 18.3393 30.7621Z"
          fill="#ffff"
        />
      </svg>
    ),
  },
  {
    name: "Your Library",
    link: base + "/library",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9419 1.64966L39 37.7129L37.1368 38.5465L21.0788 2.48322L22.9419 1.64966ZM1 38.522V1.45351H3.05942V38.522H1ZM13.3562 38.522V1.45351H15.4156V38.522H13.3562Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Create Playlist",
    link: base + "/create_playlist",
    svg: <FaPlus size={11} color="black" />,
  },
  {
    name: "Liked Songs",
    link: base + "/fav",
    svg: <BsFillHeartFill size={11} className="text-white text-opacity-50" />,
  },
];

export const editorsPick = [
  {
    title: "New Music Friday...",
    description: "New Music from Omah Lay, Reekado Banks,..",
    cover: "/assets/pick.jpeg",
  },
  {
    title: "Hot Hits Naija",
    description: "Nigeria's hottest Cover:Reekado Banks",
    cover: "/assets/hothits.jpeg",
  },
  {
    title: "Alte Cruise",
    description: "The contemporary new wave of alternative,...",
    cover: "/assets/alte.jpeg",
  },
  {
    title: "Gbedu",
    description: "Afrobeats' hottest singles. Cover: Niniola",
    cover: "/assets/gbedu.jpeg",
  },
  {
    title: "Viral Hits",
    description: "Viral, trending and taking off",
    cover: "/assets/viralhits.jpeg",
  },
];

export const focus = [
  {
    title: "Sound Semester",
    description: "Chill afro music to study with.",
    cover: "/assets/focus1.jpeg",
  },
  {
    title: "lofi beats",
    description: "Beats to relax, study, and focus...",
    cover: "/assets/focus2.jpeg",
  },
  {
    title: "Peaceful Piano",
    description: "relax and indulge with beautiful piano pieces",
    cover: "/assets/focus3.jpeg",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-...",
    cover: "/assets/focus4.jpeg",
  },
  {
    title: "Instrumental Study",
    description: "A soft musical backdrop for your studies.",
    cover: "/assets/focus5.jpeg",
  },
];
export const popular = [
  {
    title: "New Music Friday",
    description: "The very best in new music from around the...",
    cover: "/assets/popular1.jpeg",
  },
  {
    title: "OTR Vol.2",
    description: "Reekado Banks",
    cover: "/assets/popular2.jpeg",
  },
  {
    title: "Lagos to Jozi",
    description: "Niniola, GuiltyBeatz,OSKIDO",
    cover: "/assets/popular3.jpeg",
  },
  {
    title: "Sorry i'm Late",
    description: "Buju",
    cover: "/assets/popular4.jpeg",
  },
  {
    title: "Love and Highlife",
    description: "The cavemen.",
    cover: "/assets/popular5.jpeg",
  },
];

export const mood = [
  {
    title: "Happy Hits!",
    description: "Hits to boost your mood and fill you with...",
    cover: "/assets/mood1.jpeg",
  },
  {
    title: "Sad Songs",
    description: "Beautiful songs to break your heart...",
    cover: "/assets/mood2.jpeg",
  },
  {
    title: "Mood Booster",
    description: "Get happy with today's dose of feel-good songs!",
    cover: "/assets/mood3.jpeg",
  },
  {
    title: "Life Sucks",
    description: "Does school, your love life or work suck? Or ar...",
    cover: "/assets/mood4.jpeg",
  },
  {
    title: "Chilled R&B",
    description: "Chilled R&B jams for your most relaxed moods",
    cover: "/assets/mood5.jpeg",
  },
];

export const soundTrack = [
  {
    title: "Top Gaming Tracks ",
    description: "The tracks that gamers love.",
    cover: "/assets/sound1.jpeg",
  },
  {
    title: "Mood Booster",
    description: "Get happy with today's dose of feel-good songs!",
    cover: "/assets/sound2.jpeg",
  },
  {
    title: "Disney Hits",
    description: "All of your favourite Disney hits including",
    cover: "/assets/sound3.jpeg",
  },
];
