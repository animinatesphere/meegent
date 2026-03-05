import { useState, useEffect } from "react";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
// import lo2 from "../assets/alarm_2_fill.png";
import stroke from "../assets/Rectangle 12.png";
import { Link } from "react-router-dom";
const WalletPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [copied, setCopied] = useState(false);

  // Toggle this to switch between empty and populated states
  const [transactions] = useState([
    {
      id: 1,
      type: "sent",
      label: "Sent",
      date: "Mar 1st 5:22 PM",
      amount: "4000 $GLM",
      icon: "sent",
    },
    {
      id: 2,
      type: "tipped",
      label: "Abdul Lotanna tipped",
      date: "Mar 1st 5:22 PM",
      amount: "4000 $GLM",
      icon: "tipped",
    },
    {
      id: 3,
      type: "received",
      label: "Received",
      date: "Mar 1st 5:22 PM",
      amount: "4000 $GLM",
      icon: "received",
    },
  ]);

  const [showTransactions, setShowTransactions] = useState(true);

  // Split balance to style decimals differently
  const balanceWhole = showTransactions ? "100" : "0";
  const balanceDecimal = showTransactions ? ".20" : ".00";

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const renderIcon = (type) => {
    switch (type) {
      case "sent":
        return (
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#FDEAEA" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E85C4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        );
      case "tipped":
        return (
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#FFF3E0" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8960C">
              <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4z" />
            </svg>
          </div>
        );
      case "received":
        return (
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#E8F4FD" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4A90D9">
              <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Top nav icons */}
      <div>
        <div className="max-w-5xl mx-auto flex justify-end pt-5 pb-2 px-5 md:px-8">
          <div className="flex items-center gap-5 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <Link to="/home">
              <img src={wa1} alt="home" className="w-5 h-5 object-contain" />
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

      <div className="max-w-lg mx-auto w-full px-5 pb-10">
        {/* My Wallet title */}
        <h1
          className="text-2xl font-bold mb-2"
          style={{
            color: "#2D2A26",
          }}
        >
          My Wallet
        </h1>

        {/* Wallet address */}
        <button className="flex items-center gap-2 mb-5" onClick={handleCopy}>
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

        {/* Wallet card */}
        <div
          className="rounded-3xl p-4 sm:p-5 mb-8 relative overflow-hidden"
          style={{
            background: "#E8960C",
          }}
        >
          {/* Top patterned area with wavy cut-out */}
          <div
            className="mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "#1A1A1A",
              aspectRatio: "2.2 / 1",
            }}
          >
            <img src={stroke} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Balance info */}
          <div className="mt-4 sm:mt-5">
            <p className="text-xs sm:text-sm mb-1" style={{ color: "#FFF8E8" }}>
              Available balance
            </p>
            <div className="flex items-center justify-between">
              <h2
                className="text-2xl sm:text-3xl font-black"
                style={{ color: "white", fontFamily: "'Georgia', serif" }}
              >
                $GLM {balance}
              </h2>
              <button
                className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-bold"
                style={{
                  background: "#FDE9C4",
                  color: "#2D2A26",
                }}
              >
                Send
              </button>
            </div>

            <button
              className="px-6 py-[14px] rounded-[14px] text-base font-medium shadow-sm transition-transform hover:scale-105"
              style={{
                background: "#EEDBB4",
                color: "#1A1A1A",
              }}
            >
              Send
            </button>
          </div>
        </div>

        {/* Toggle for demo purposes */}
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-lg font-bold"
            style={{
              color: "#2D2A26",
            }}
          >
            Recent activity
          </h2>
          <button
            className="text-xs px-3 py-1.5 rounded-full font-medium"
            style={{
              background: showTransactions ? "#E8960C" : "#F0EBE3",
              color: showTransactions ? "white" : "#8B8068",
              transition: "all 0.3s ease",
            }}
            onClick={() => setShowTransactions(!showTransactions)}
          >
            {showTransactions ? "Has Transactions" : "No Transactions"}
          </button>
        </div>

        {/* Transaction list or empty state */}
        {!showTransactions ? (
          /* ========== EMPTY STATE (Image 1) ========== */
          <div
            className="rounded-3xl flex items-center justify-center"
            style={{
              background: "#FFF8EE",
              minHeight: 200,
            }}
          >
            <p className="text-base font-medium" style={{ color: "#B5AEA2" }}>
              No transactions yet
            </p>
          </div>
        ) : (
          /* ========== TRANSACTION LIST (Image 2) ========== */
          <div className="flex flex-col gap-3 bg-[#FEF6E7]">
            {transactions.map((tx, index) => (
              <div
                key={tx.id}
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{
                  background: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                  animation: `slideUp 0.4s ease ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                {renderIcon(tx.icon)}

                {/* Label & date */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{ color: "#2D2A26" }}
                  >
                    {tx.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#B5AEA2" }}>
                    {tx.date}
                  </p>
                </div>

                {/* Amount */}
                <span
                  className="text-sm font-bold flex-shrink-0"
                  style={{ color: "#E8960C" }}
                >
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WalletPage;
