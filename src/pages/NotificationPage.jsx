import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import emptyBell from "../assets/event-modal/Group 114.png";
import ticketIcon from "../assets/event-modal/notification/ticket_fill.png";
import userAddIcon from "../assets/event-modal/notification/user_add_2_line.png";
import sentIcon from "../assets/event-modal/notification/Frame 2147226228.png";
import tipIcon from "../assets/event-modal/notification/Frame 2147226228 (1).png";
import receivedIcon from "../assets/event-modal/notification/Frame 2147226230.png";

const NotificationPage = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    // Toggle this to test both states
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'create', title: 'Create Event', time: 'Mar 1st 5:22 PM', value: null },
        { id: 2, type: 'going', title: 'Going to Acoustic...', time: 'Mar 1st 5:22 PM', value: '200 $GLM', color: 'text-[#12B76A]' },
        { id: 3, type: 'going', title: 'Going to Acoustic...', time: 'Mar 1st 5:22 PM', value: 'Free', color: 'text-[#12B76A]' },
        { id: 4, type: 'sent', title: 'Sent', time: 'Mar 1st 5:22 PM', value: '4000 $GLM', color: 'text-[#12B76A]' },
        { id: 5, type: 'tip', title: 'Abdul Lotanna tipped', time: 'Mar 1st 5:22 PM', value: '4000 $GLM', color: 'text-[#12B76A]' },
        { id: 6, type: 'received', title: 'Received', time: 'Mar 1st 5:22 PM', value: '4000 $GLM', color: 'text-[#12B76A]' },
    ]);

    // To see empty state, uncomment this:
    // useEffect(() => { setNotifications([]); }, []);

    useEffect(() => {
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    const renderIcon = (type) => {
        let iconSrc;
        switch (type) {
            case 'create': iconSrc = ticketIcon; break;
            case 'going': iconSrc = userAddIcon; break;
            case 'sent': iconSrc = sentIcon; break;
            case 'tip': iconSrc = tipIcon; break;
            case 'received': iconSrc = receivedIcon; break;
            default: return null;
        }
        return (
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img src={iconSrc} alt={type} className="w-full h-full object-contain" />
            </div>
        );
    };

    return (
        <div
            className="min-h-screen bg-[#FFFBF4] flex flex-col"
            style={{ transition: "opacity 0.4s ease", opacity: fadeIn ? 1 : 0 }}
        >
            {/* Header */}
            <div className="w-full max-w-sm mx-auto px-6 pt-10 pb-6 flex items-center justify-between relative">
                <button
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 rounded-full bg-[#f6f2ec] flex items-center justify-center relative z-10"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F3A218" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-[17px] font-bold text-[#111827]">Notification</h1>
                </div>
            </div>

            <div className="flex-1 w-full max-w-sm mx-auto px-6 overflow-y-auto pb-10">
                {notifications.length === 0 ? (
                    /* Empty State */
                    <div className="h-full flex flex-col items-center justify-center -mt-20">
                        <div className="mb-6">
                            <img src={emptyBell} alt="No notifications" className="w-[180px] h-auto object-contain" />
                        </div>
                        <p className="text-[16px] font-medium text-[#101828]">No notification</p>
                    </div>
                ) : (
                    /* Notifications List */
                    <div className="flex flex-col gap-3">
                        {notifications.map((notif) => (
                            <div
                                key={notif.id}
                                className="bg-white rounded-[16px] p-4 flex items-center justify-between shadow-sm border border-gray-50/50"
                            >
                                <div className="flex items-center gap-3">
                                    {renderIcon(notif.type)}
                                    <div className="flex flex-col">
                                        <span className="text-[14px] font-medium text-[#101828] line-clamp-1">{notif.title}</span>
                                        <span className="text-[12px] text-[#667085]">{notif.time}</span>
                                    </div>
                                </div>
                                {notif.value && (
                                    <span className={`text-[13px] font-semibold ${notif.color || 'text-[#12B76A]'}`}>
                                        {notif.value}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationPage;
