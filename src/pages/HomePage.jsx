import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
import wa3 from "../assets/Image (7).png";
import wa4 from "../assets/Frame 2147225228.png";
import wa5 from "../assets/Frame 2147225229.png";
import ev from "../assets/image 52.png";
import fra from "../assets/Frame 2147226215.png";
import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";
import im from "../assets/image (8).png";

import memoji1 from "../assets/event-modal/avatar/Memoji-1.png";
import memoji2 from "../assets/event-modal/avatar/Memoji-2.png";
import memoji3 from "../assets/event-modal/avatar/Memoji-3.png";
import memoji4 from "../assets/event-modal/avatar/Memoji-4.png";
import memoji5 from "../assets/event-modal/avatar/Memoji.png";

import { FiLink, FiPhone, FiMessageSquare, FiArrowLeft } from "react-icons/fi";
const HomePage = ({ navigate }) => {
  const [activeTag, setActiveTag] = useState("All");
  const [fadeIn, setFadeIn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalView, setModalView] = useState("main"); // "main", "readMore", "map"
  const [quantity, setQuantity] = useState(1);
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
      isVirtual: false,
      about: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      organizer: {
        name: "Sonic Managemnet",
        role: "Organize Team"
      },
      attendees: 8000
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
      isVirtual: true,
      virtualLink: "http://meet.google.c",
      about: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      organizer: {
        name: "Sonic Managemnet",
        role: "Organize Team"
      },
      attendees: 5000
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
        <div className="max-w-5xl mx-auto flex justify-end pt-5 pb-2 px-5 md:px-8">
          <div className="flex items-center gap-5 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <Link to="/profile">
              <img src={wa1} alt="Profile" className="w-5 h-5 object-contain" />
            </Link>
            <Link to="/wallet">
              <img src={wa2} alt="Wallet" className="w-5 h-5 object-contain" />
            </Link>
            <Link to="/favorites" className="flex items-center justify-center">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#F3A218"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-5xl mx-auto w-full">
        {/* User row */}
        <div className="flex items-center justify-between px-5 md:px-8 pt-4 pb-3 overflow-hidden">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/profile">
              <img
                src={wa3}
                alt=""
                className="w-11 h-11 md:w-13 md:h-13 rounded-full flex-shrink-0 cursor-pointer"
              />
            </Link>
            <button className="flex items-center gap-2" onClick={handleCopy}>
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
          <Link to="/events">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer"
              style={{ background: "#E8960C" }}
            >
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="px-5 md:px-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base md:text-xl lg:text-2xl font-bold in text-[#1C1C1C]">
              Upcoming Events
            </h2>
            <Link
              to="/seeall"
              className="text-xs md:text-sm font-semibold text-[#F3A218]"
            >
              See all
            </Link>
          </div>

          {/* Event cards: horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl overflow-hidden flex-shrink-0 md:flex-shrink w-[280px] sm:w-[320px] md:w-auto cursor-pointer"
                style={{
                  background: "#FEF6E7",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
                onClick={() => setSelectedEvent(event)}
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
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                  >
                    <svg width="16" height="16" fill="#F3A218" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
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
                className="flex items-center justify-between mt-5 pt-3"
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                style={{ borderTop: "1px solid #F5F0E8" }}
              >
                <div className="flex flex-col">
                  <span
                    className="text-[17px] font-bold"
                    style={{ color: "#E8960C" }}
                  >
                    {event.price}{" "}
                    <span
                      className="text-sm font-normal"
                      style={{ color: "#475367" }}
                    >
                      {event.perPerson ? "/Person" : ""}
                    </span>
                  </span>
                </div>
                <div className="flex -space-x-[8px] items-center">
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-[2px] border-white bg-[#FDE4B4] shadow-sm relative z-[1]"><img src={memoji1} className="w-full h-full object-cover" /></div>
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-[2px] border-white bg-[#FDE4B4] shadow-sm relative z-[2]"><img src={memoji2} className="w-full h-full object-cover" /></div>
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-[2px] border-white bg-[#FDE4B4] shadow-sm relative z-[3]"><img src={memoji3} className="w-full h-full object-cover" /></div>
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-[2px] border-white bg-[#FDE4B4] shadow-sm relative z-[4]"><img src={memoji4} className="w-full h-full object-cover" /></div>
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden border-[2px] border-white bg-[#FDE4B4] shadow-sm relative z-[5]"><img src={memoji5} className="w-full h-full object-cover" /></div>
                  <div
                    className="w-[24px] h-[24px] rounded-full border-[2px] border-white shadow-sm relative z-[6] flex items-center justify-center -ml-[6px]"
                    style={{ background: "#F3A218" }}
                  >
                    <span className="text-[8px] font-bold text-white">+34</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal / Bottom Sheet */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{
            background: "rgba(0,0,0,0.6)",
          }}
          onClick={() => {
            setSelectedEvent(null);
            setModalView("main");
          }}
        >
          <div
            className="rounded-t-[32px] overflow-hidden w-full max-w-full relative flex flex-col"
            style={{
              background: "#FFFBF4",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
              maxHeight: "90vh"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal top border/handle piece */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 rounded-full" style={{ background: "#F5DEC0" }} />
            </div>

            {modalView === "main" && (
              <div className="px-5 pb-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-start pt-2">
                  <h3 className="text-xl font-bold leading-tight" style={{ color: "#111827", maxWidth: "80%" }}>
                    {selectedEvent.title}
                  </h3>
                  <button className="text-[#F3A218] p-1">
                    <FiLink size={20} />
                  </button>
                </div>

                {/* Location & Date */}
                <div className="flex items-center gap-4 mt-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <img src={lo} className="w-4 h-4" alt="" />
                    <span className="text-xs font-medium" style={{ color: "#4B5563" }}>
                      {selectedEvent.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img src={lo2} className="w-4 h-4" alt="" />
                    <span className="text-xs font-medium" style={{ color: "#4B5563" }}>
                      {selectedEvent.date}
                    </span>
                  </div>
                </div>

                {/* Attendees */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex -space-x-[10px]">
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[1]"><img src={memoji1} className="w-full h-full object-cover" /></div>
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[2]"><img src={memoji2} className="w-full h-full object-cover" /></div>
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[3]"><img src={memoji3} className="w-full h-full object-cover" /></div>
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[4]"><img src={memoji4} className="w-full h-full object-cover" /></div>
                    <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[5]"><img src={memoji5} className="w-full h-full object-cover" /></div>
                    <div
                      className="w-[32px] h-[32px] rounded-full border-[2px] border-[#FFFBF4] shadow-sm relative z-[6] flex items-center justify-center -ml-2"
                      style={{ background: "#F3A218" }}
                    >
                      <span className="text-[11px] font-bold text-white">+34</span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold">
                    {selectedEvent.attendees}+ <span style={{ color: "#F3A218", fontWeight: "normal" }}>/Invites</span>
                  </div>
                </div>

                {/* About Event */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold mb-2" style={{ color: "#111827" }}>About Event</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#374151" }}>
                    {selectedEvent.about.substring(0, 180)}...{" "}
                    <button onClick={() => setModalView("readMore")} style={{ color: "#F3A218" }}>Read more</button>
                  </p>
                </div>

                {/* Organizer */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold mb-3" style={{ color: "#111827" }}>Organizer</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-900 border border-gray-100">
                        {/* Mock organizer image */}
                        <img src={im} alt="Organizer" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#111827" }}>{selectedEvent.organizer?.name}</p>
                        <p className="text-[11px]" style={{ color: "#6B7280" }}>{selectedEvent.organizer?.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#FFF0D6", color: "#F3A218" }}>
                        <FiPhone size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#FFF0D6", color: "#F3A218" }}>
                        <FiMessageSquare size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Address block */}
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <h4 className="text-sm font-bold mb-1" style={{ color: "#111827" }}>Address</h4>
                    <p className="text-[13px]" style={{ color: "#6B7280" }}>
                      {selectedEvent.isVirtual ? selectedEvent.virtualLink : "Saint Ives ,New York, USA"}
                    </p>
                  </div>
                  <button onClick={() => setModalView("map")} className="text-sm font-bold mb-0.5" style={{ color: "#F3A218" }}>
                    View map
                  </button>
                </div>

                {/* Footer price / counter */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "#6B7280" }}>Total Price</p>
                    <p className="font-bold text-sm" style={{ color: "#F3A218" }}>
                      200 $GLM <span className="text-[10px] font-normal text-gray-400">/Person</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600"
                      style={{ background: "#F5E6D3" }}
                    >
                      -
                    </button>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium" style={{ background: "#F3A218" }}>
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600"
                      style={{ background: "#F5E6D3" }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full py-3.5 rounded-xl font-bold text-white shadow-sm" style={{ background: "#F3A218" }}>
                  Book Now
                </button>
              </div>
            )}

            {/* Read More View */}
            {modalView === "readMore" && (
              <div className="flex flex-col h-full bg-[#FFFBF4]">
                <div className="flex items-center gap-3 px-5 pt-2 pb-4">
                  <button
                    onClick={() => setModalView("main")}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#F3A218] bg-[#FFF0D6]"
                  >
                    <FiArrowLeft size={18} />
                  </button>
                </div>

                <h3 className="px-5 text-lg font-bold mb-4" style={{ color: "#111827" }}>About Event</h3>

                <div className="px-5 pb-8 overflow-y-auto">
                  <p className="text-[13px] leading-relaxed mb-6" style={{ color: "#374151" }}>
                    {selectedEvent.about}
                    <br /><br />
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                  </p>

                  <div className="text-[14px]">
                    <span style={{ color: "#374151" }}>Book here: </span>
                    <a href="https://www.ebocab.com/" className="underline font-medium" style={{ color: "#374151" }}>
                      https://www.ebocab.com/
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Map View */}
            {modalView === "map" && (
              <div className="flex flex-col h-full bg-[#FFFBF4]">
                <div className="flex flex-col px-5 pt-2 pb-4">
                  <button
                    onClick={() => setModalView("main")}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#F3A218] bg-[#FFF0D6] mb-4"
                  >
                    <FiArrowLeft size={18} />
                  </button>
                  <h3 className="text-lg font-bold" style={{ color: "#111827" }}>Map</h3>
                </div>

                <div className="px-5 pb-6 flex-1 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[342px] h-[341px] rounded-2xl overflow-hidden bg-gray-200 relative" style={{ border: "1px dashed #3B82F6" }}>
                    <img src="https://i.stack.imgur.com/HILmr.png" alt="Map view" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
