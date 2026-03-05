import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import Header from "../components/Header";

// Assets
import lo from "../assets/location_fill.png";
import lo2 from "../assets/alarm_2_fill.png";
import mapImage from "../assets/event-modal/Basemap image.png";

// Memojis
import memoji1 from "../assets/event-modal/avatar/Memoji-1.png";
import memoji2 from "../assets/event-modal/avatar/Memoji-2.png";
import memoji3 from "../assets/event-modal/avatar/Memoji-3.png";
import memoji4 from "../assets/event-modal/avatar/Memoji-4.png";
import memoji5 from "../assets/event-modal/avatar/Memoji.png";

const ManageEventPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const location = useLocation();

    // We can get event data from navigation state if available, otherwise use default
    const event = location.state?.event || {
        title: "Acoustic Serenade Show",
        location: "New York, USA",
        date: "May 29 - 10:00 AM",
        attendeesText: "8000+",
    };

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                background: "#FFFBF4",
                transition: "opacity 0.5s ease",
                opacity: fadeIn ? 1 : 0,
            }}
        >
            {/* Top bar */}
            <Header />

            {/* Content wrapper */}
            <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-5 md:px-8">

                {/* Manage Button */}
                <div className="flex justify-end mt-4 mb-8">
                    <button
                        className="px-6 py-2 rounded-xl text-[14px] font-medium shadow-sm"
                        style={{ background: "#FDE4B4", color: "#475367" }}
                    >
                        Manage
                    </button>
                </div>

                {/* Title & Link */}
                <div className="flex items-start justify-between mb-4">
                    <h1
                        className="text-[24px] md:text-[28px] font-bold leading-tight"
                        style={{ color: "#111827", maxWidth: "85%" }}
                    >
                        {event.title}
                    </h1>
                    <button className="text-[#F3A218] pt-1">
                        <FiLink size={24} strokeWidth="2.5" />
                    </button>
                </div>

                {/* Location & Date */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                        <img src={lo} alt="location" className="w-4 h-4 object-contain" />
                        <span className="text-[13px] font-medium" style={{ color: "#475367" }}>
                            {event.location}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={lo2} alt="date" className="w-4 h-4 object-contain" />
                        <span className="text-[13px] font-medium" style={{ color: "#475367" }}>
                            {event.date}
                        </span>
                    </div>
                </div>

                {/* Attendee Info */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex -space-x-[12px]">
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[1]">
                            <img src={memoji1} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[2]">
                            <img src={memoji2} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[3]">
                            <img src={memoji3} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[4]">
                            <img src={memoji4} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden border-[2px] border-[#FFFBF4] bg-[#FDE4B4] shadow-sm relative z-[5]">
                            <img src={memoji5} className="w-full h-full object-cover" />
                        </div>
                        <div
                            className="w-[36px] h-[36px] rounded-full border-[2px] border-[#FFFBF4] shadow-sm relative z-[6] flex items-center justify-center -ml-2"
                            style={{ background: "#F3A218" }}
                        >
                            <span className="text-[11px] font-bold text-white">34</span>
                        </div>
                    </div>
                    <div className="text-[14px] font-bold" style={{ color: "#202D3D" }}>
                        {event.attendeesText} <span className="font-normal text-[#F3A218]">/Invites</span>
                    </div>
                </div>

                {/* About Event */}
                <div className="mb-8">
                    <h3 className="text-[15px] font-bold mb-3" style={{ color: "#111827" }}>
                        About Event
                    </h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#374151" }}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when aWhere can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>

                {/* Location Block */}
                <div className="mb-10">
                    <h3 className="text-[13px] font-medium mb-2" style={{ color: "#475367" }}>
                        Location
                    </h3>
                    <p className="text-[15px] font-bold mb-1" style={{ color: "#374151" }}>
                        Conventional National Center
                    </p>
                    <p className="text-[13px] mb-4" style={{ color: "#98A2B3" }}>
                        Saint island New York USA
                    </p>

                    <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-sm relative">
                        <img src={mapImage} alt="Map" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageEventPage;
