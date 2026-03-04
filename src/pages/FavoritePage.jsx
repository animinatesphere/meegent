import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
import ev from "../assets/image 52.png";
import fra from "../assets/Frame 2147226215.png";
import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";

const FavoritePage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [favorites] = useState([
    {
      id: 1,
      title: "Acoustic Serenade Show",
      desc: "Listen to good music with Joel.",
      location: "New York, USA",
      date: "May 29 - 10:00 AM",
      price: "200 $GLM",
      perPerson: true,
      ev: ev,
    },
    {
      id: 2,
      title: "Arkiv Hackathon",
      desc: "Web3 Database builders challenge.",
      location: "New York, USA",
      date: "May 29 - 10:00 AM",
      price: "0 $GLM",
      perPerson: true,
      ev: ev,
    },
  ]);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

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
      <div>
        <div className="max-w-5xl mx-auto flex justify-end pt-5 pb-2 px-5 md:px-8">
          <div className="flex items-center gap-5 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <Link to="/profile">
              <img src={wa1} alt="Profile" className="w-5 h-5 object-contain" />
            </Link>
            <Link to="/wallet">
              <img src={wa2} alt="Wallet" className="w-5 h-5 object-contain" />
            </Link>
            <div className="flex items-center justify-center">
              <svg
                width="20"
                height="20"
                fill="#F3A218"
                stroke="#F3A218"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        {favorites.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex items-center justify-center">
            <p
              className="text-sm md:text-base in"
              style={{ color: "#8B8068" }}
            >
              No favorite yet
            </p>
          </div>
        ) : (
          /* Favorites list */
          <div className="px-5 md:px-8 pt-4 pb-6">
            <div className="flex gap-4 flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#FEF6E7",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Event image */}
                  <div className="relative h-[160px] md:h-[200px]">
                    <img
                      src={event.ev}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-lg flex items-center justify-center">
                      <img src={fra} alt="" />
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        fill="#F3A218"
                        stroke="#F3A218"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </div>
                  </div>

                  {/* Event details */}
                  <div className="p-3 md:p-4">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-sm md:text-base in font-bold mb-1"
                        style={{ color: "#202D3D" }}
                      >
                        {event.title}
                      </h3>
                      <div
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ background: "#F3A218" }}
                      >
                        <span className="text-white text-[30px] text-center">
                          +
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-xs in md:text-sm mb-2"
                      style={{ color: "#98A2B3" }}
                    >
                      {event.desc}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <img src={lo} alt="" />
                      <span
                        className="text-xs in"
                        style={{ color: "#475367" }}
                      >
                        {event.location}
                      </span>
                      <img src={lo2} alt="" />
                      <span className="text-xs" style={{ color: "#475367" }}>
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-bold"
                        style={{ color: "#E8960C" }}
                      >
                        {event.price}{" "}
                        <span
                          className="text-xs font-normal"
                          style={{ color: "#475367" }}
                        >
                          {event.perPerson ? "/Person" : ""}
                        </span>
                      </span>
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border-2 border-white"
                            style={{
                              background: `hsl(${30 + i * 20}, 60%, ${55 + i * 5}%)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
