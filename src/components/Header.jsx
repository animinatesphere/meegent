import React from "react";
import { Link } from "react-router-dom";
import wa2 from "../assets/wallet_5_fill.png";

const Header = () => {
    return (
        <div className="w-full">
            <div className="max-w-5xl mx-auto flex justify-end pt-5 pb-2 px-5 md:px-8 w-full">
                <div className="flex items-center gap-5 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100/50">
                    {/* Events / Ticket Button */}
                    <Link to="/events" className="flex items-center justify-center">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#F3A218"
                            className="transition-transform hover:scale-110"
                        >
                            <path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2 2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2 2 2 0 0 1 2-2zM7 4h1v16H7V4zm9 16h-1V4h1v16z" />
                        </svg>
                    </Link>

                    {/* Wallet Button */}
                    <Link to="/wallet" className="flex items-center justify-center">
                        <img
                            src={wa2}
                            alt="Wallet"
                            className="w-5 h-5 object-contain transition-transform hover:scale-110"
                            style={{ filter: "brightness(0.2)" }} // Make it darker to match screenshot
                        />
                    </Link>

                    {/* Favorites Button */}
                    <Link to="/favorites" className="flex items-center justify-center">
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#F3A218"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="transition-transform hover:scale-110"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
