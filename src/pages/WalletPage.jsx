import { useState, useEffect } from "react";
import Header from "../components/Header";

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
      <Header />

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
          className="rounded-[32px] p-6 mb-8 relative flex flex-col justify-between"
          style={{
            background: "#F2A214",
            minHeight: 240,
            boxShadow: "0 8px 32px rgba(242, 162, 20, 0.2)",
          }}
        >
          {/* Top patterned area with wavy cut-out */}
          <div
            className="absolute top-3 left-3 right-3 h-[130px] rounded-[24px] overflow-hidden"
            style={{
              background: "#121212",
            }}
          >
            {/* Abstract pattern overlay */}
            <svg
              viewBox="0 0 400 140"
              className="w-full h-full"
              style={{ opacity: 1, position: "absolute", top: 0, left: 0 }}
            >
              {/* Haring-inspired figures with white strokes */}
              <g stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Random energetic lines mirroring mockup */}
                <path d="M-10 40 Q20 20 30 80 Q40 120 50 110" />
                <path d="M20 120 Q30 90 40 100" />
                <path d="M60 20 L80 40 L70 80 L90 70 L110 50" />

                {/* Figure 1 - center left */}
                <path d="M150 100 L160 60 L180 50 L190 70 L200 40 L210 50 L220 80 L230 110" />
                <path d="M175 70 L140 85 L120 110" />
                <path d="M165 40 L150 10" />

                {/* Circle with cross */}
                <circle cx="90" cy="40" r="16" />
                <path d="M78 35 L102 45 M82 48 L98 32" />

                {/* Figure 2 - right */}
                <path d="M260 20 L270 50 L250 80 Q260 110 280 120 M270 50 L300 40 L320 70 L300 100 M290 80 L320 120" />

                {/* Extra squiggles */}
                <path d="M340 30 Q360 50 350 80 L380 90 M360 85 L390 120 M380 20 L410 40" />
                <path d="M120 -10 Q140 20 130 50" />
              </g>

            </svg>

            {/* Wavy shape cut out from bottom, drawing the card's yellow background with a white stroke */}
            <svg
              className="absolute bottom-[-1px] left-0 w-full"
              viewBox="0 0 400 24"
              preserveAspectRatio="none"
              style={{ height: "24px" }}
            >
              <path
                d="M -10 30 L -10 24 Q 200 0 410 24 L 410 30 Z"
                fill="#F2A214"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Spacer to push content down */}
          <div className="flex-1"></div>

          {/* Balance info bottom section */}
          <div className="relative mt-[110px] w-full flex items-end justify-between">
            <div className="flex flex-col">
              <p className="text-[15px] font-medium mb-1" style={{ color: "#1A1A1A" }}>
                Available balance
              </p>
              <h2 className="flex items-baseline font-black leading-none m-0 p-0 shadow-none">
                <span className="text-4xl" style={{ color: "#1A1A1A", letterSpacing: "-0.04em" }}>
                  $GLM {balanceWhole}
                </span>
                <span className="text-4xl font-black" style={{ color: "#74726B", letterSpacing: "-0.04em" }}>
                  {balanceDecimal}
                </span>
              </h2>
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
          <div className="flex flex-col gap-3">
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
