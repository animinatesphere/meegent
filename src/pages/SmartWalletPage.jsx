import { useState, useEffect } from "react";
import wa1 from "../assets/No trsasaction.png";
import wa2 from "../assets/NO TRANSACTION.png";
import bo2 from "../assets/Send.png";

const SmartWalletPage = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row md:items-center relative overflow-hidden"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Skip */}
      <div className="flex justify-end px-6 pt-2 md:absolute md:top-8 md:right-12">
        <button
          className="text-base font-medium"
          style={{ color: "#8B8068" }}
          onClick={() => navigate("home")}
        >
          Skip
        </button>
      </div>

      {/* Hero Text + CTA */}
      <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:pl-12 lg:pl-20 xl:pl-32 md:pr-8">
        <div className="px-6 pt-6 pb-4 md:px-0 md:pt-0 md:pb-0">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl text-[#F3A218] ru leading-tight mb-3 md:mb-5"
            style={{
              letterSpacing: "-0.5px",
            }}
          >
            Smart wallet address
          </h1>
          <p
            className="text-sm md:text-base lg:text-lg in leading-relaxed md:max-w-md"
            style={{ color: "#F3A218" }}
          >
            you automatically have a smart wallet address after sign up, you can
            get tips from friends, colleagues or anyone.
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block md:max-w-sm md:mt-8">
          <button
            className="w-full py-4 md:py-5 rounded-full text-base md:text-lg font-bold cursor-pointer"
            style={{
              background: "#E8960C",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(232, 150, 12, 0.4)",
            }}
            onClick={() => navigate("home")}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile bo2 decoration */}
      <img
        src={bo2}
        alt=""
        className="absolute z-10 md:hidden"
        style={{
          width: 200,
          height: 400,
          top: 100,
          right: 10,
        }}
      />

      {/* Wallet cards area */}
      <div className="flex-1 md:flex-none md:w-1/2 md:flex md:items-center md:justify-center md:min-h-screen relative">
        {/* Desktop bo2 decoration */}
        <img
          src={bo2}
          alt=""
          className="hidden md:block absolute z-10"
          style={{
            width: 280,
            height: 560,
            top: "8%",
            right: 0,
          }}
        />

        <div
          className="flex-1 md:flex-none relative flex items-start justify-center px-6 md:scale-110 lg:scale-125"
          style={{ paddingTop: 20 }}
        >
          {/* Back wallet card */}
          <div
            className="absolute rounded-2xl p-4"
            style={{
              width: 240,
              background: "white",
              transform: "rotate(6deg) translateX(30px)",
              top: 0,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              zIndex: 1,
            }}
          >
            <img src={wa1} alt="" />
          </div>

          {/* Front wallet card */}
          <div
            className="relative rounded-2xl p-4"
            style={{
              width: 240,
              background: "white",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              zIndex: 2,
            }}
          >
            <img src={wa2} alt="" />
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="px-6 pb-8 pt-4 md:hidden" style={{ zIndex: 10 }}>
        <button
          className="w-full py-4 rounded-full text-base font-bold"
          style={{
            background: "#E8960C",
            color: "#FFFFFF",
            boxShadow: "0 4px 20px rgba(232, 150, 12, 0.4)",
          }}
          onClick={() => navigate("home")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SmartWalletPage;
