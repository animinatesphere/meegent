import { useState, useEffect } from "react";
import logo from "../assets/Group 115.png";

const SplashPage = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("welcome");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      <img src={logo} alt="Megnet" className="w-40 md:w-52" />
    </div>
  );
};

export default SplashPage;
