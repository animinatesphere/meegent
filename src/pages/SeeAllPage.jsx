import { useState, useEffect } from "react";
import Header from "../components/Header";
import ev from "../assets/image 52.png";
import ev2 from "../assets/image 26.png";
import ev3 from "../assets/event-modal/image 24.png";
import fra from "../assets/Frame 2147226215.png";
import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";

import memoji1 from "../assets/event-modal/avatar/Memoji-1.png";
import memoji2 from "../assets/event-modal/avatar/Memoji-2.png";
import memoji3 from "../assets/event-modal/avatar/Memoji-3.png";
import memoji4 from "../assets/event-modal/avatar/Memoji-4.png";
import memoji5 from "../assets/event-modal/avatar/Memoji.png";

const SeeAllPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
    const saved = localStorage.getItem("meegent_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  const toggleFavorite = (event, e) => {
    e.stopPropagation();
    let newFavs;
    const isFav = favorites.some((fav) => fav.id === event.id);
    if (isFav) {
      newFavs = favorites.filter((fav) => fav.id !== event.id);
    } else {
      newFavs = [...favorites, event];
    }
    setFavorites(newFavs);
    localStorage.setItem("meegent_favorites", JSON.stringify(newFavs));
  };

  const events = [
    {
      id: 1,
      title: "Eth CC canes",
      desc: "Building tools not just apps.",
      location: "New York, USA",
      date: "May 29 - 10:00 AM",
      price: "200 $GLM",
      perPerson: true,
      ev: ev2,
    },
    {
      id: 2,
      title: "Acoustic Serenade Show",
      desc: "Listen to good music with Joel.",
      location: "New York, USA",
      date: "May 29 - 10:00 AM",
      price: "200 $GLM",
      perPerson: true,
      ev: ev,
    },
    {
      id: 3,
      title: "Arkiv Hackathon",
      desc: "Web3 Database builders challenge.",
      location: "New York, USA",
      date: "May 29 - 10:00 AM",
      price: "0 $GLM",
      perPerson: true,
      ev: ev3,
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Top bar */}
      <Header />

      {/* Content */}
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        {/* Title */}
        <div className="px-5 md:px-8 pt-4 pb-4">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold"
            style={{ color: "#E8960C" }}
          >
            See All
          </h1>
        </div>

        {/* Event cards */}
        <div className="px-5 md:px-8 pb-6">
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#FEF6E7",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Event image */}
                <div className="relative h-[220px] md:h-[240px] w-full">
                  <img
                    src={event.ev}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <img src={fra} className="w-4 h-4" />
                  </div>
                  <div
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => toggleFavorite(event, e)}
                  >
                    {favorites.some((fav) => fav.id === event.id) ? (
                      <svg width="16" height="16" fill="#F3A218" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" stroke="#F3A218" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Event details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-[17px] font-bold truncate"
                      style={{ color: "#202D3D" }}
                    >
                      {event.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs in md:text-sm mb-2 truncate"
                    style={{ color: "#98A2B3" }}
                  >
                    {event.desc}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="">
                      <img src={lo} alt="" className="w-4 h-4" />
                    </span>
                    <span className="text-xs in" style={{ color: "#475367" }}>
                      {event.location}
                    </span>
                    <img src={lo2} alt="" className="w-4 h-4 ml-2" />
                    <span className="text-xs" style={{ color: "#475367" }}>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span
                      className="text-sm font-bold inter"
                      style={{ color: "#E8960C" }}
                    >
                      {event.price}{" "}
                      <span
                        className="text-xs font-normal inter"
                        style={{ color: "#475367" }}
                      >
                        {event.perPerson ? "/Person" : ""}
                      </span>
                    </span>
                    <div className="flex -space-x-[10px] items-center">
                      <div className="w-[20px] h-[20px] rounded-full overflow-hidden border-[1.5px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[1]"><img src={memoji1} className="w-full h-full object-cover" /></div>
                      <div className="w-[20px] h-[20px] rounded-full overflow-hidden border-[1.5px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[2]"><img src={memoji2} className="w-full h-full object-cover" /></div>
                      <div className="w-[20px] h-[20px] rounded-full overflow-hidden border-[1.5px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[3]"><img src={memoji3} className="w-full h-full object-cover" /></div>
                      <div className="w-[20px] h-[20px] rounded-full overflow-hidden border-[1.5px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[4]"><img src={memoji4} className="w-full h-full object-cover" /></div>
                      <div className="w-[20px] h-[20px] rounded-full overflow-hidden border-[1.5px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[5]"><img src={memoji5} className="w-full h-full object-cover" /></div>
                      <div
                        className="w-[20px] h-[20px] rounded-full border-[1.5px] border-[#FFF9EF] shadow-sm relative z-[6] flex items-center justify-center -ml-1"
                        style={{ background: "#F3A218" }}
                      >
                        <span className="text-[7px] font-bold text-white">+34</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllPage;
