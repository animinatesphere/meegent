import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
import wa3 from "../assets/image (7).png";
import wa4 from "../assets/Frame 2147225228.png";
import wa5 from "../assets/Frame 2147225229.png";
import ev from "../assets/image 52.png";
import fra from "../assets/Frame 2147226215.png";
import fra2 from "../assets/Frame 2147226216.png";
import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";
import im from "../assets/image (8).png";
const HomePage = ({ navigate }) => {
  const [activeTag, setActiveTag] = useState("All");
  const [fadeIn, setFadeIn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const tags = ["All", "Crypto", "festival", "Concert", "Fitness"];

  const events = [
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
      title: "Arkiv Hangout",
      desc: "Web3 Dev meetup",
      location: "New York",
      date: "May 30 - 2:00 PM",
      price: "0 $GLM",
      perPerson: false,
      ev: ev,
    },
  ];
  const events2 = [
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
  ];
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Top bar with icons */}
      {/* Top bar */}
      <div>
        <div className="max-w-5xl mx-auto flex justify-center md:justify-end gap-3 pt-3 pb-2 px-5 md:px-8">
          <Link to="/home">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center">
              <img src={wa1} />
            </div>
          </Link>
          <Link to="/wallet">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center">
              <img src={wa2} alt="" />
            </div>
          </Link>
          <Link to="/favorites">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                fill="#ffffff"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-5xl mx-auto w-full">
        {/* User row */}
        <div className="flex items-center justify-between px-5 md:px-8 pt-4 pb-3 overflow-hidden">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={wa3}
              alt=""
              className="w-11 h-11 md:w-13 md:h-13 rounded-full flex-shrink-0"
            />
            <button
              className="flex items-center gap-2"
              onClick={handleCopy}
            >
              <span
                className="text-sm px-3 py-1 rounded-full"
                style={{ background: "#F0EBE3", color: "#8B8068" }}
              >
                0x87... 6569hb
              </span>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#8B8068"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {copied && (
                <span
                  className="text-xs font-medium animate-pulse"
                  style={{ color: "#E8960C" }}
                >
                  Copied!
                </span>
              )}
            </button>
          </div>
          <div className="flex gap-2">
            {/* ADD BUTTON - navigates to Create Event */}
            <button
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center"
              // style={{ border: "1.5px solid #E8960C" }}
              onClick={() => navigate("createevent")}
            >
              <img src={wa4} alt="" />
            </button>
            <div
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center"
              // style={{ border: "1.5px solid #E8960C" }}
            >
              <img src={wa5} alt="" />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 md:gap-3 px-5 md:px-8 pb-3 overflow-x-auto">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-4 md:px-5 py-1.5 md:py-2 rounded-full in text-xs md:text-sm font-medium whitespace-nowrap"
              style={{
                background: activeTag === tag ? "#E8960C" : "#F5F0E8",
                color: activeTag === tag ? "white" : "#8B8068",
                transition: "all 0.2s ease",
              }}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="px-5 md:px-8 pb-4 flex gap-2">
          <div
            className="flex-1 flex items-center rounded-[10px] px-4 py-3 border-1 border-[#F3A218]"
            style={{ background: "#F5F0E8" }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#F3A218"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search event, organizer"
              className=" text-[#98A2B3]  text-xs md:text-sm bg-transparent outline-none w-full"
              style={{ color: "#2D2A26" }}
            />
          </div>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: "#E8960C" }}
          >
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="px-5 md:px-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base md:text-xl lg:text-2xl font-bold in text-[#1C1C1C]">
              Upcoming Events
            </h2>
            <Link to="/seeall" className="text-xs md:text-sm font-semibold text-[#F3A218]">
              See all
            </Link>
          </div>

          {/* Event cards: horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl overflow-hidden flex-shrink-0 md:flex-shrink w-[260px] md:w-auto"
                style={{
                  background: "#FEF6E7",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Event image */}
                <div className="relative h-[160px] md:h-[200px] ">
                  <img
                    src={event.ev}
                    alt=""
                    className="w-[500px] object-cover h-[250px] md:h-[200px]"
                  />
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-lg flex items-center justify-center">
                    <img src={fra} />
                  </div>
                  <div
                    className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
                    // style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    <img src={fra2} alt="" />
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
                    <button
                      className="w-10 h-10 flex items-center justify-center cursor-pointer"
                      style={{ background: "#F3A218" }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <span className="text-white text-[30px] text-center">
                        +
                      </span>
                    </button>
                  </div>
                  <p
                    className="text-xs in md:text-sm mb-2"
                    style={{ color: "#98A2B3" }}
                  >
                    {event.desc}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="">
                      <img src={lo} alt="" />
                    </span>
                    <span className="text-xs in" style={{ color: "#475367" }}>
                      {event.location}
                    </span>
                    <img src={lo2} alt="" />
                    <span className="text-xs" style={{ color: "#475367" }}>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
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

        {/* Hot this week */}
        <div className="px-5 md:px-8 pb-6">
          <div className="flex justify-between items-center mb-3">
            <h2
              className="text-base md:text-xl in lg:text-2xl font-bold"
              style={{ color: "#2D2A26" }}
            >
              Hot this week
            </h2>
            <Link
              to="/seeall"
              className="text-xs md:text-sm font-semibold in"
              style={{ color: "#F3A218" }}
            >
              See all
            </Link>
          </div>
          <div
            className="p-3 md:p-4"
            style={{
              background: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center gap-3 rounded-2xl ">
              <img src={im} alt="" />
              <div className="flex-1">
                <p
                  className="text-sm md:text-base font-bold in "
                  style={{ color: "#2D2A26" }}
                >
                  Thailand Web3 Meet up
                </p>
                <div className="flex items-center gap-2">
                  <img src={lo} alt="" />
                  <span
                    className="text-xs md:text-sm"
                    style={{ color: "#8B8068" }}
                  >
                    Bangkok
                  </span>
                  <img src={lo2} alt="" />
                  <span
                    className="text-xs md:text-sm"
                    style={{ color: "#8B8068" }}
                  >
                    May 29 - 10:00 AM
                  </span>
                </div>
              </div>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#F3A218"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            {events2.map((event) => (
              <div
                className="flex items-center justify-between mt-5"
                key={event.id}
              >
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
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-5"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="rounded-2xl overflow-hidden w-full max-w-sm"
            style={{
              background: "#FEF6E7",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal event image */}
            <div className="relative h-[200px]">
              <img
                src={selectedEvent.ev}
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

            {/* Modal event details */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "#202D3D" }}
                >
                  {selectedEvent.title}
                </h3>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "#F3A218" }}
                >
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <p
                className="text-xs mb-3"
                style={{ color: "#98A2B3" }}
              >
                {selectedEvent.desc}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <img src={lo} alt="" />
                <span className="text-xs" style={{ color: "#475367" }}>
                  {selectedEvent.location}
                </span>
                <img src={lo2} alt="" />
                <span className="text-xs" style={{ color: "#475367" }}>
                  {selectedEvent.date}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-bold"
                  style={{ color: "#E8960C" }}
                >
                  {selectedEvent.price}{" "}
                  <span
                    className="text-xs font-normal"
                    style={{ color: "#475367" }}
                  >
                    {selectedEvent.perPerson ? "/Person" : ""}
                  </span>
                </span>
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      style={{
                        background: `hsl(${30 + i * 20}, 60%, ${55 + i * 5}%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
