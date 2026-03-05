import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import profilePic from "../assets/Image (7).png"; // Specific user avatar
import eventThumb from "../assets/event-modal/Frame 2147226298.png"; // "Your Events" thumbnail
import vectorIcon from "../assets/event-modal/Vector.png"; // Specific email alert vector icon
import exitIcon from "../assets/event-modal/Group.png"; // Sign out modal icon

// Custom Icons
const CloseAccountIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#2970FF" />
    </svg>
);

const AboutIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 17H13V15H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 13H13V7H11V13Z" fill="#12B76A" />
    </svg>
);

const EditPenIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#F3A218" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="#98A2B3" />
    </svg>
);


const ProfilePage = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    // Toggle state mimicking the mockup (whether the user is an event creator)
    const [isEventOwner] = useState(true);

    // Profile Edit State
    const [isEditingName, setIsEditingName] = useState(false);
    const [name, setName] = useState("Anita Ndukwe");

    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [email, setEmail] = useState("Anitandukwe@gmail.com");

    // Settings Toggle state
    const [emailAlerts, setEmailAlerts] = useState(false);

    // Modal state
    const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center bg-[#FFFBF4] pt-8"
            style={{
                transition: "opacity 0.5s ease",
                opacity: fadeIn ? 1 : 0,
            }}
        >
            <div className="w-full max-w-sm flex-1 flex flex-col relative px-6 pb-12">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-10 w-full relative">
                    {/* Back Button */}
                    <button
                        onClick={goBack}
                        className="w-10 h-10 rounded-full bg-[#f6f2ec] flex items-center justify-center relative z-10"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F3A218" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Centered Title */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h1 className="text-[17px] font-bold text-[#111827]">My Profile</h1>
                    </div>
                </div>

                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-[68px] h-[68px] rounded-full overflow-hidden border-[1px] border-[#FFFBF4] shadow-sm mb-3 relative">
                        <img src={profilePic} alt="Ndukwe Anita" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-[13px] font-medium text-[#98A2B3]">{name}</h2>
                </div>

                {/* Details Card */}
                <div className="bg-white rounded-[16px] p-5 mb-6 w-full flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] font-medium text-[#344054] whitespace-nowrap">Full Name</span>
                        <div className="flex items-center gap-2 justify-end w-full ml-4">
                            {isEditingName ? (
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => setIsEditingName(false)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setIsEditingName(false) }}
                                    autoFocus
                                    className="text-[14px] text-[#111827] bg-[#F5F0E8] px-2 py-1 rounded outline-none w-full text-right"
                                />
                            ) : (
                                <span className="text-[14px] text-[#98A2B3] truncate">{name}</span>
                            )}
                            <button onClick={() => setIsEditingName(!isEditingName)} className="flex-shrink-0">
                                <EditPenIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] font-medium text-[#344054] whitespace-nowrap">Email address</span>
                        <div className="flex items-center gap-2 justify-end w-full ml-4">
                            {isEditingEmail ? (
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setIsEditingEmail(false)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setIsEditingEmail(false) }}
                                    autoFocus
                                    className="text-[14px] text-[#111827] bg-[#F5F0E8] px-2 py-1 rounded outline-none w-full text-right"
                                />
                            ) : (
                                <span className="text-[14px] text-[#98A2B3] truncate">{email}</span>
                            )}
                            <button onClick={() => setIsEditingEmail(!isEditingEmail)} className="flex-shrink-0">
                                <EditPenIcon />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Settings Block 1 (Email Alerts) */}
                <div className="bg-[#FFF9F2] rounded-[16px] p-4 px-5 mb-3 w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={vectorIcon} alt="Email" className="w-5 h-5 object-contain" />
                        <span className="text-[14px] font-medium text-[#98A2B3]">Email alert</span>
                    </div>
                    {/* Custom Toggle */}
                    <button
                        onClick={() => setEmailAlerts(!emailAlerts)}
                        className={`w-[44px] h-[24px] rounded-full flex items-center p-[2px] border-[1.5px] border-[#D0D5DD] transition-colors duration-300 ${emailAlerts ? 'bg-[#F3A218] border-none' : 'bg-white'}`}
                    >
                        <div className={`w-5 h-5 rounded-full bg-[#D0D5DD] shadow-sm transform transition-transform duration-300 ${emailAlerts ? 'translate-x-[20px] bg-white' : 'translate-x-0'}`} />
                    </button>
                </div>

                {/* Settings Block 2 (Close Account) */}
                <button className="bg-[#FFF9F2] rounded-[16px] p-4 px-5 mb-3 w-full flex items-center justify-between transition active:scale-95">
                    <div className="flex items-center gap-3">
                        <CloseAccountIcon />
                        <span className="text-[14px] font-medium text-[#98A2B3]">Closae account</span>
                    </div>
                    <ChevronRightIcon />
                </button>

                {/* Settings Block 3 (About) */}
                <button className="bg-[#FFF9F2] rounded-[16px] p-4 px-5 mb-10 w-full flex items-center justify-between transition active:scale-95">
                    <div className="flex items-center gap-3">
                        <AboutIcon />
                        <span className="text-[14px] font-medium text-[#98A2B3]">About</span>
                    </div>
                    <ChevronRightIcon />
                </button>

                {/* Your Events Section (Conditional) */}
                {isEventOwner && (
                    <div className="mb-12 w-full">
                        <h3 className="text-[14px] font-medium text-[#344054] mb-4">Your Events</h3>
                        <div className="flex gap-4 items-center">
                            <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden flex-shrink-0">
                                <img src={eventThumb} alt="Web3 Conference" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col flex-1 py-1">
                                <span className="text-[13px] font-medium text-[#475367] mb-1">Jan, 11:00 PM</span>
                                <span className="text-[16px] font-bold text-[#111827] mb-1 line-clamp-1">Web3 Conference</span>
                                <span className="text-[13px] text-[#475367]">By Anita Ndukwe</span>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className="w-full py-[16px] rounded-[14px] text-[16px] font-semibold text-white shadow-sm transition active:scale-95 mt-auto"
                    style={{ background: "#F3A218" }}
                    onClick={() => setIsSignOutModalOpen(true)}
                >
                    Sign Out
                </button>

            </div>

            {/* Sign Out Confirmation Modal */}
            {isSignOutModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
                        onClick={() => setIsSignOutModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="bg-white rounded-[24px] w-full max-w-[320px] p-8 flex flex-col items-center relative z-10 shadow-xl overflow-hidden border border-gray-100">
                        {/* Close Icon in Top Right */}
                        <div className="absolute top-4 right-4">
                            <img src={exitIcon} alt="Exit" className="w-8 h-8 object-contain" />
                        </div>

                        <h4 className="text-[18px] font-medium text-[#101828] text-center mt-6 mb-10 px-2 leading-tight">
                            Are you sure you want to sign out ?
                        </h4>

                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => navigate("/")}
                                className="flex-1 py-4 rounded-[16px] bg-[#FDE4B4] text-[#111827] text-[16px] font-semibold transition active:scale-95"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setIsSignOutModalOpen(false)}
                                className="flex-1 py-4 rounded-[16px] bg-[#F3A218] text-white text-[16px] font-semibold shadow-sm transition active:scale-95 transition-colors"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
