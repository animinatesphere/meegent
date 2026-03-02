import fir from "../assets/HOME SCREEN (19).png";
import fir3 from "../assets/HOME SCREEN (21).png";
import fir2 from "../assets/Frame 2147225395.png";

const Welcome = ({ navigate }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:items-center bg-[#FEF6E766] relative">
      {/* Skip */}
      <div className="flex justify-end px-6 pt-2 md:absolute md:top-4 md:right-8">
        <button
          className="text-base font-medium"
          style={{ color: "#000000" }}
          onClick={() => navigate("home")}
        >
          Skip
        </button>
      </div>

      {/* Hero Text + CTA */}
      <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:pl-12 lg:pl-20 xl:pl-32 md:pr-8">
        <div className="px-6 pt-6 pb-4 md:px-0 md:pt-0 md:pb-0">
          <h1
            className="ru text-2xl sm:text-4xl md:text-5xl lg:text-6xl  leading-tight font-bold mb-3 md:mb-5"
            style={{
              color: "#E8960C",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.5px",
            }}
          >
            Welcome to Megnet
          </h1>
          <p
            className="in mb-[8rem] md:mb-10 text-sm md:text-base lg:text-lg leading-relaxed md:max-w-md"
            style={{ color: "#F3A218" }}
          >
            Set up an event page, invite friends and sell tickets. Host a
            memorable event today.
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block md:max-w-sm">
          <button
            className="in w-full py-4 md:py-5 rounded-full text-base md:text-lg font-bold cursor-pointer"
            style={{
              background: "#F3A218",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(232, 150, 12, 0.4)",
            }}
            onClick={() => navigate("smartwallet")}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile fir2 overlay */}
      <img
        src={fir2}
        alt=""
        className="h-[126px] w-[126px] absolute left-[200px] sm:left-[200px]  top-[300px]  z-10 md:hidden"
      />

      {/* Phone mockup area */}
      <div className="flex-1 md:flex-none md:w-1/2 md:flex md:items-center md:justify-center md:min-h-screen">
        <div
          className="flex-1 md:flex-none relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: 340 }}
        >
          {/* Desktop fir2 overlay */}
          <img
            src={fir2}
            alt=""
            className="hidden md:block h-[126px] w-[126px] lg:h-[150px] lg:w-[150px] absolute right-0 top-4 z-10"
          />

          {/* Background card */}
          <div
            className="absolute rounded-3xl"
            style={{
              width: 260,
              height: 380,
              background: "#F5F0E8",
              transform: "rotate(-8deg) translateX(-30px)",
              top: 20,
              opacity: 0.5,
            }}
          />
          <img
            src={fir}
            alt=""
            className="absolute"
            style={{ paddingTop: 50, left: 19 }}
          />
          <div className="absolute rounded-3xl" />

          {/* Main phone card */}
          <img src={fir3} alt="" />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="px-6 pb-8 pt-4 md:hidden">
        <button
          className="in w-full py-4 rounded-full text-base font-bold"
          style={{
            background: "#F3A218",
            color: "#FFFFFF",
            boxShadow: "0 4px 20px rgba(232, 150, 12, 0.4)",
          }}
          onClick={() => navigate("smartwallet")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
