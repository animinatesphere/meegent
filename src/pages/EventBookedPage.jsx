import React from "react";
import Header from "../components/Header";
import ticketFill from "../assets/event-modal/ticket_fill.png";
import groupIcon from "../assets/event-modal/Vector.svg";

const EventBookedPage = ({ navigate }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between" style={{ background: "#FFFBF4" }}>
            {/* Header content wrapping at top */}
            <div className="w-full max-w-5xl mx-auto flex flex-col pt-4">
                <Header />
                {/* Exit Icon placed below the header wrapper */}
                <div className="w-full px-5 md:px-8 mt-4 flex justify-start">
                    <button onClick={() => navigate("home")} className="hover:scale-105 transition-transform">
                        <img src={groupIcon} alt="Close button" className="w-[24px] h-[24px] object-contain" />
                    </button>
                </div>
            </div>

            {/* Central Content */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-20">
                <img
                    src={ticketFill}
                    alt="Ticket booked icon"
                    className="w-[124px] h-[124px] object-contain mb-4 transform -rotate-12"
                />
                <h2 className="text-[17px] font-medium" style={{ color: "#2d2a26" }}>
                    Event Booked
                </h2>
            </div>
        </div>
    );
};

export default EventBookedPage;
