import React, { useState } from "react";
import { Link } from "react-router-dom";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
import emptyBase from "../assets/event-modal/Rectangle 71.png";
import emptyTicket from "../assets/event-modal/ticket_fill.png";

import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";
import ev from "../assets/image 52.png";
import arkivImage from "../assets/event-modal/image 24.png";
import dummyMap from "../assets/event-modal/Basemap image.png"; // Fallback map placeholder

import memoji1 from "../assets/event-modal/avatar/Memoji-1.png";
import memoji2 from "../assets/event-modal/avatar/Memoji-2.png";
import memoji3 from "../assets/event-modal/avatar/Memoji-3.png";
import memoji4 from "../assets/event-modal/avatar/Memoji-4.png";
import memoji5 from "../assets/event-modal/avatar/Memoji.png";

const EventsPage = ({ navigate }) => {
    const [activeTab, setActiveTab] = useState("Upcoming");
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Mockup data grouping by date
    const [groupedEvents] = useState([
        {
            groupLabel: "Yesterday",
            day: "Monday",
            status: "Upcoming",
            items: [
                {
                    id: 1,
                    title: "Arkiv Hackathon",
                    desc: "Web3 Database builders challenge.",
                    location: "New York, USA",
                    date: "May 29 - 10:00 AM",
                    actionText: "Manage event",
                    attendees: 34,
                    ev: arkivImage
                }
            ]
        },
        {
            groupLabel: "May 29",
            day: "Monday",
            status: "Upcoming",
            items: [
                {
                    id: 2,
                    title: "Acoustic Serenade Show",
                    desc: "Listen to good music with Joel.",
                    location: "New York, USA",
                    date: "May 29 - 10:00 AM",
                    actionText: "Going",
                    attendees: 34,
                    ev: ev
                }
            ]
        },
        {
            groupLabel: "Jan 12",
            day: "Friday",
            status: "Past",
            items: [
                {
                    id: 3,
                    title: "Design Meetup 2025",
                    desc: "Figma tips and networking.",
                    location: "London, UK",
                    date: "Jan 12 - 09:00 AM",
                    actionText: "Past event",
                    attendees: 12,
                    ev: ev
                }
            ]
        }
    ]);

    // Filter groups based on active tab
    const filteredGroups = groupedEvents.filter((group) => group.status === activeTab);

    const goBackToList = () => {
        setSelectedEvent(null);
    };

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                background: "#FFFBF4",
                transition: "opacity 0.5s ease"
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
                        <Link to="/notifications">
                            <img src={lo2} alt="Notifications" className="w-5 h-5 object-contain" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content wrapper */}
            <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-5 md:px-8 pt-4">
                {/* Header and Toggle */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-[28px] font-bold" style={{ color: "#F3A218" }}>
                        Events
                    </h1>

                    {/* Pill Toggle */}
                    <div className="flex bg-[#FFF6E5] rounded-full p-1">
                        <button
                            onClick={() => setActiveTab("Upcoming")}
                            className={`px-5 py-2 text-[14px] font-medium rounded-full transition-all ${activeTab === "Upcoming"
                                ? "bg-[#FDE4B4] text-[#111827] shadow-sm"
                                : "text-[#111827] hover:bg-[#FDE4B4]/50"
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setActiveTab("Past")}
                            className={`px-5 py-2 text-[14px] font-medium rounded-full transition-all ${activeTab === "Past"
                                ? "bg-[#FDE4B4] text-[#111827] shadow-sm"
                                : "text-[#111827] hover:bg-[#FDE4B4]/50"
                                }`}
                        >
                            Past
                        </button>
                    </div>
                </div>

                {/* Empty State vs List View vs Detail View */}
                {selectedEvent ? (
                    <div className="flex-1 flex flex-col pb-10 fade-in">
                        {/* Selected Event Details Header */}
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                {/* Back link button */}
                                <button onClick={goBackToList} className="p-1 -ml-2 rounded-full hover:bg-black/5">
                                    <svg width="24" height="24" fill="none" stroke="#2d2a26" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <h2 className="text-[22px] font-bold" style={{ color: "#111827" }}>
                                    {selectedEvent.title}
                                </h2>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                <svg width="24" height="24" fill="none" stroke="#F3A218" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                    <path d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                        </div>

                        {/* Selected Event Meta Data */}
                        <div className="flex items-center gap-5 mt-1 mb-5">
                            <div className="flex items-center gap-1.5">
                                <img src={lo} alt="" className="w-[16px] h-[16px] object-contain" />
                                <span className="text-[14px]" style={{ color: "#475367" }}>
                                    {selectedEvent.location}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={lo2} alt="" className="w-[16px] h-[16px] object-contain" />
                                <span className="text-[14px]" style={{ color: "#475367" }}>
                                    {selectedEvent.date}
                                </span>
                            </div>
                        </div>

                        {/* Selected Event Attendees count */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex -space-x-[10px] items-center">
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FAF6EF] bg-[#FDE4B4] shadow-sm relative z-[1]"><img src={memoji1} className="w-full h-full object-cover" /></div>
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FAF6EF] bg-[#FDE4B4] shadow-sm relative z-[2]"><img src={memoji2} className="w-full h-full object-cover" /></div>
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FAF6EF] bg-[#FDE4B4] shadow-sm relative z-[3]"><img src={memoji3} className="w-full h-full object-cover" /></div>
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FAF6EF] bg-[#FDE4B4] shadow-sm relative z-[4]"><img src={memoji4} className="w-full h-full object-cover" /></div>
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-[#FAF6EF] bg-[#FDE4B4] shadow-sm relative z-[5]"><img src={memoji5} className="w-full h-full object-cover" /></div>
                                <div
                                    className="w-[32px] h-[32px] rounded-full border-[2px] border-[#FAF6EF] shadow-sm relative z-[6] flex items-center justify-center -ml-2"
                                    style={{ background: "#F3A218" }}
                                >
                                    <span className="text-[11px] font-bold text-white">{selectedEvent.attendees}</span>
                                </div>
                            </div>
                            <div className="text-[14px] font-semibold" style={{ color: "#475367" }}>
                                8000+ <span style={{ color: "#F3A218" }}>/Invites</span>
                            </div>
                        </div>

                        {/* Selected Event About text */}
                        <div className="mb-8">
                            <h3 className="text-[16px] font-bold mb-3" style={{ color: "#111827" }}>About Event</h3>
                            <p className="text-[14px] leading-relaxed" style={{ color: "#4b5563" }}>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when aWhere can I get some?
                                <br /><br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>

                        {/* Selected Event Map View */}
                        <div>
                            <p className="text-[12px] mb-2" style={{ color: "#6b7280" }}>Location</p>
                            <h4 className="text-[15px] font-bold mb-1" style={{ color: "#111827" }}>Conventional National Center</h4>
                            <p className="text-[13px] mb-4" style={{ color: "#9ca3af" }}>Saint island New York USA</p>

                            <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                                <img src={dummyMap} alt="Map UI placeholder" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                ) : filteredGroups.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center -mt-32">
                        <div className="relative w-[180px] h-[180px] mb-4 flex items-center justify-center">
                            {/* Stacked Images for Empty State */}
                            <img
                                src={emptyBase}
                                className="absolute inset-0 w-full h-full object-contain"
                                alt="Empty state background"
                            />
                            <img
                                src={emptyTicket}
                                className="absolute inset-0 w-full h-full object-contain"
                                alt="Empty state ticket"
                            />
                        </div>
                        <p className="text-[#374151] text-[16px] font-medium">
                            No events yet
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 pb-10">
                        {filteredGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="flex flex-col gap-4">
                                {/* Date Header */}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[17px] font-medium" style={{ color: "#2d2a26" }}>{group.groupLabel}</span>
                                    <span className="text-[15px]" style={{ color: "#98A2B3" }}>{group.day}</span>
                                </div>

                                {/* Event Cards in this Group */}
                                <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                                    {group.items.map((event) => (
                                        <div
                                            key={event.id}
                                            onClick={() => setSelectedEvent(event)}
                                            className="rounded-[28px] overflow-hidden flex flex-col cursor-pointer transition-transform hover:scale-[1.01]"
                                            style={{
                                                background: "#FFF9EF",
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                                            }}
                                        >
                                            {/* Top Image Section */}
                                            <div className="relative h-[220px] w-full">
                                                <img
                                                    src={event.ev}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Top Left Icon (Gift box) */}
                                                <div className="absolute top-6 left-6 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                    <svg width="18" height="18" fill="none" stroke="#F3A218" strokeWidth="2" viewBox="0 0 24 24">
                                                        <rect x="5" y="6" width="14" height="14" rx="2" />
                                                        <path d="M12 6V3M8 6v-3m8 3v-3m-12 8h16" />
                                                    </svg>
                                                </div>
                                                {/* Top Right Icon (Heart) */}
                                                <div className="absolute top-6 right-6 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                    <svg width="18" height="18" fill="#F3A218" viewBox="0 0 24 24">
                                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Bottom Details Section */}
                                            <div className="p-5 flex flex-col justify-between" style={{ background: "#FFF9EF" }}>
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3
                                                            className="text-[17px] font-medium mb-1 truncate"
                                                            style={{ color: "#2d2a26" }}
                                                        >
                                                            {event.title}
                                                        </h3>
                                                        <p
                                                            className="text-[13px]"
                                                            style={{ color: "#9da1a8", letterSpacing: "0.2px" }}
                                                        >
                                                            {event.desc}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="w-[52px] h-[52px] rounded-[16px] flex flex-shrink-0 items-center justify-center shadow-sm ml-3"
                                                        style={{ background: "#F3A218" }}
                                                    >
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 5v14M5 12h14" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Location and Time */}
                                                <div className="flex items-center justify-between mb-5 px-0.5">
                                                    <div className="flex items-center gap-1.5">
                                                        <img src={lo} alt="" className="w-[15px] h-[15px] object-contain" />
                                                        <span
                                                            className="text-[13px]"
                                                            style={{ color: "#475367" }}
                                                        >
                                                            {event.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <img src={lo2} alt="" className="w-[15px] h-[15px] object-contain" />
                                                        <span
                                                            className="text-[13px] whitespace-nowrap"
                                                            style={{ color: "#475367" }}
                                                        >
                                                            {event.date}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Actions and Attendees */}
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        className="px-6 py-[9px] rounded-xl text-[13px] font-semibold text-white shadow-sm"
                                                        style={{ background: "#F3A218" }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            navigate("/manageevent", { event: event });
                                                        }}
                                                    >
                                                        {event.actionText}
                                                    </button>

                                                    {/* Attendee Avatar Stack */}
                                                    <div className="flex -space-x-[10px] items-center">
                                                        <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-[2px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[1]"><img src={memoji1} className="w-full h-full object-cover" /></div>
                                                        <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-[2px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[2]"><img src={memoji2} className="w-full h-full object-cover" /></div>
                                                        <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-[2px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[3]"><img src={memoji3} className="w-full h-full object-cover" /></div>
                                                        <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-[2px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[4]"><img src={memoji4} className="w-full h-full object-cover" /></div>
                                                        <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-[2px] border-[#FFF9EF] bg-[#FDE4B4] shadow-sm relative z-[5]"><img src={memoji5} className="w-full h-full object-cover" /></div>
                                                        <div
                                                            className="w-[28px] h-[28px] rounded-full border-[2px] border-[#FFF9EF] shadow-sm relative z-[6] flex items-center justify-center -ml-2"
                                                            style={{ background: "#F3A218" }}
                                                        >
                                                            <span className="text-[9px] font-bold text-white">{event.attendees}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default EventsPage;
