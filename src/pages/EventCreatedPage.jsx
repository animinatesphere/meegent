import { useState, useEffect } from "react";

const confettiColors = [
  "#F3A218",
  "#E85D75",
  "#7B61FF",
  "#00BCD4",
  "#FF6F00",
  "#E040FB",
  "#FFD600",
  "#1DE9B6",
  "#FF4081",
  "#536DFE",
];

const confettiPieces = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 35}%`,
  color: confettiColors[i % confettiColors.length],
  rotation: Math.random() * 360,
  width: Math.random() > 0.5 ? 3 + Math.random() * 4 : 8 + Math.random() * 14,
  height: Math.random() > 0.5 ? 3 + Math.random() * 4 : 2 + Math.random() * 3,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 3,
  isRibbon: Math.random() > 0.4,
}));

const EventCreatedPage = ({ navigate, pageData }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFDF8 0%, #FAF6EF 100%)",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Confetti */}
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: piece.left,
            top: piece.top,
            width: piece.isRibbon ? piece.width : piece.height,
            height: piece.isRibbon ? piece.height : piece.height,
            background: piece.color,
            borderRadius: piece.isRibbon ? 1 : "50%",
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.85,
            animation: `confettiFall ${piece.duration}s ease-in ${piece.delay}s infinite`,
          }}
        />
      ))}

      {/* Megnet logo */}
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "#F3A218",
          transform: "rotate(-15deg)",
          boxShadow: "0 8px 30px rgba(243, 162, 24, 0.3)",
        }}
      >
        <div style={{ transform: "rotate(15deg)" }}>
          <div className="flex gap-1.5">
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
              style={{ background: "white" }}
            />
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
              style={{ background: "white" }}
            />
          </div>
          <div
            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mt-1"
            style={{ background: "white" }}
          />
        </div>
      </div>

      {/* Success message */}
      <h1
        className="text-xl md:text-2xl font-bold text-center px-8"
        style={{
          color: "#2D2A26",
        }}
      >
        {pageData?.eventName || "Web 3 Thai Event"} Created
      </h1>

      {/* Confetti animation keyframes */}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.85; }
          100% { transform: translateY(40px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default EventCreatedPage;
