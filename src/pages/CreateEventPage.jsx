import { useState, useEffect } from "react";
import wa1 from "../assets/Frame 2147225395 (1).png";
import wa2 from "../assets/wallet_5_fill.png";
import lo2 from "../assets/link_2_line.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const CreateEventPage = ({ navigate, goBack }) => {
  const [eventName, setEventName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [ticketPrice, setTicketPrice] = useState("Free $GLM");
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [priceInput, setPriceInput] = useState("0");
  const [requireApproval, setRequireApproval] = useState(false);
  const [capacity] = useState("Unlimited");
  const [gmail, setGmail] = useState("");
  const [callLine, setCallLine] = useState("");
  const [visibility] = useState("Public");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const handleCreate = () => {
    navigate("eventcreated", { eventName: eventName || "Web 3 Thai Event" });
  };

  const handleDatePick = (field) => {
    navigate("datepicker", { field, returnTo: "createevent" });
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Top bar */}
      <div>
        <div className="max-w-5xl mx-auto flex justify-end pt-5 pb-2 px-5 md:px-8">
          <div className="flex items-center gap-5 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <Link to="/profile">
              <img src={wa1} alt="Profile" className="w-5 h-5 object-contain" />
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

      {/* Form content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full">
          {/* Visibility dropdown */}
          <div className="flex justify-end px-5 md:px-8 pt-4">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "#F5F0E8" }}
            >
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: "#2D2A26" }}
              >
                {visibility}
              </span>
              <svg width="12" height="12" fill="#8B8068" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="px-5 md:px-8 pt-3 pb-4">
            <div
              className="rounded-2xl flex items-center justify-center relative h-[150px] sm:h-[180px] md:h-[240px]"
              style={{
                background: "linear-gradient(135deg, #F5E6B8 0%, #E8D48B 100%)",
              }}
            >
              <div
                className="absolute bottom-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                style={{ background: "#8B8068" }}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12m-3.2 0a3.2 3.2 0 106.4 0 3.2 3.2 0 10-6.4 0M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Event Name */}
          <div className="px-5 md:px-8 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center flex-1 min-w-0 gap-2">
                <input
                  type="text"
                  placeholder="Event Name"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="text-xl sm:text-2xl md:text-3xl font-bold flex-1 min-w-0 bg-transparent outline-none"
                  style={{
                    color: "#2D2A26",
                    fontFamily: "'Georgia', serif",
                    caretColor: "#E8960C",
                  }}
                />
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#E8960C"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <img src={lo2} alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          </div>

          {/* Date / Time label */}
          <div className="px-5 md:px-8 pb-1">
            <p className="text-xs md:text-sm mb-2" style={{ color: "#B5AEA2" }}>
              Date&nbsp;&nbsp;&nbsp;Time
            </p>
          </div>

          {/* Date selection card */}
          <div
            className="mx-5 md:mx-8 rounded-2xl p-4 md:p-5 mb-4"
            style={{ background: "#F5F0E8" }}
          >
            <button
              className="flex items-center justify-between w-full mb-3"
              onClick={() => handleDatePick("start")}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#2D2A26" }}
                />
                <span
                  className="text-sm md:text-base"
                  style={{ color: "#2D2A26" }}
                >
                  Start
                </span>
              </div>
              <span
                className="text-sm md:text-base"
                style={{ color: "#8B8068" }}
              >
                {startDate || "Start Date"}
              </span>
            </button>

            <div
              className="ml-1.5 mb-3"
              style={{
                borderLeft: "1.5px dashed #B5AEA2",
                height: 16,
                marginLeft: 5,
              }}
            />

            <button
              className="flex items-center justify-between w-full"
              onClick={() => handleDatePick("end")}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ border: "1.5px solid #B5AEA2" }}
                />
                <span
                  className="text-sm md:text-base"
                  style={{ color: "#2D2A26" }}
                >
                  End
                </span>
              </div>
              <span
                className="text-sm md:text-base"
                style={{ color: "#8B8068" }}
              >
                {endDate || "End Date"}
              </span>
            </button>
          </div>

          {/* Location */}
          <div className="px-5 md:px-8 pb-3">
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" fill="#E8960C" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: "#E8960C" }}
              >
                Add Location
              </span>
            </div>
            <input
              type="text"
              placeholder="Paste offline location or virtual link"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm md:text-base bg-transparent outline-none pb-3"
              style={{
                color: "#2D2A26",
                borderBottom: "1px solid #E8E2D6",
                caretColor: "#E8960C",
              }}
            />
          </div>

          {/* Description */}
          <div className="px-5 md:px-8 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" fill="#E8960C" viewBox="0 0 24 24">
                <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
              </svg>
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: "#E8960C" }}
              >
                Add Description
              </span>
            </div>
            <textarea
              placeholder="Write short description about your event"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full text-sm md:text-base bg-transparent outline-none resize-none"
              rows={2}
              style={{
                color: "#2D2A26",
                borderBottom: "1px solid #E8E2D6",
                caretColor: "#E8960C",
              }}
            />
          </div>

          {/* Ticket & Contact settings — side by side on desktop */}
          <div className="md:grid md:grid-cols-2 md:gap-4 md:px-8">
            {/* Ticket settings */}
            <div
              className="mx-5 md:mx-0 rounded-2xl p-4 md:p-5 mb-4 md:mb-0"
              style={{ background: "#F5F0E8" }}
            >
              <button
                className="flex items-center justify-between mb-3 w-full"
                onClick={() => setShowPriceModal(true)}
              >
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    fill="#E8960C"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2z" />
                  </svg>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#2D2A26" }}
                  >
                    Ticket Price
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#E8960C" }}
                  >
                    {ticketPrice}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="#E8960C"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </button>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    fill="#E8960C"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#2D2A26" }}
                  >
                    Require approval
                  </span>
                </div>
                <button
                  className="w-6 h-6 rounded-full border-2"
                  style={{
                    borderColor: requireApproval ? "#E8960C" : "#B5AEA2",
                    background: requireApproval ? "#E8960C" : "transparent",
                  }}
                  onClick={() => setRequireApproval(!requireApproval)}
                >
                  {requireApproval && (
                    <svg
                      width="12"
                      height="12"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    fill="#E8960C"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#2D2A26" }}
                  >
                    Capacity
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#E8960C" }}
                  >
                    {capacity}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="#E8960C"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact settings */}
            <div
              className="mx-5 md:mx-0 rounded-2xl p-4 md:p-5 mb-6 md:mb-0"
              style={{ background: "#F5F0E8" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#E8960C" }}>@</span>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#2D2A26" }}
                  >
                    Gmail username
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    placeholder="Optional"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    className="text-sm md:text-base text-right bg-transparent outline-none w-24 md:w-32"
                    style={{ color: "#E8960C", caretColor: "#E8960C" }}
                  />
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="#E8960C"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    fill="#E8960C"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span
                    className="text-sm md:text-base"
                    style={{ color: "#2D2A26" }}
                  >
                    Call line
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    placeholder="Unlimited"
                    value={callLine}
                    onChange={(e) => setCallLine(e.target.value)}
                    className="text-sm md:text-base text-right bg-transparent outline-none w-24 md:w-32"
                    style={{ color: "#E8960C", caretColor: "#E8960C" }}
                  />
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="#E8960C"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Event button */}
      <div className="max-w-2xl mx-auto w-full px-5 md:px-8 pb-8 pt-2">
        <button
          className="w-full py-4 md:py-5 rounded-full text-base md:text-lg font-bold cursor-pointer"
          style={{
            background: "#E8960C",
            color: "#F4F4F4",
            boxShadow: "0 4px 20px rgba(232, 150, 12, 0.4)",
          }}
          onClick={handleCreate}
        >
          Create Event
        </button>
      </div>

      {/* Ticket Price Modal */}
      {showPriceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-5"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowPriceModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl p-6 relative"
            style={{
              background: "#FFFBF4",
              boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* User info pill */}
            <div
              className="flex items-center gap-2.5 rounded-full px-3 py-2 mb-6 w-fit"
              style={{ background: "#FFF3E0", border: "1px solid #FDE9C4" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#E8960C" }}
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#2D2A26" }}>
                  {eventName || "Event"}
                </p>
                <p className="text-[11px]" style={{ color: "#8B8068" }}>
                  @organizer
                </p>
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-lg font-bold text-center mb-5"
              style={{ color: "#2D2A26" }}
            >
              Ticket Price
            </h3>

            {/* Price input area */}
            <div
              className="rounded-2xl px-5 py-4 mb-6 flex items-center justify-center gap-2"
              style={{ background: "#FFF8EE", border: "1.5px solid #FDE9C4" }}
            >
              <span
                className="text-2xl sm:text-3xl font-black"
                style={{ color: "#2D2A26", fontFamily: "'Georgia', serif" }}
              >
                $GLM
              </span>
              <input
                type="number"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                className="text-2xl sm:text-3xl font-black bg-transparent outline-none w-20 sm:w-24"
                style={{
                  color: "#2D2A26",
                  fontFamily: "'Georgia', serif",
                  caretColor: "#E8960C",
                }}
                min="0"
                autoFocus
              />
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#E8960C"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>

            {/* Confirm button */}
            <button
              className="w-full py-3.5 rounded-full text-base font-bold"
              style={{
                background: "#E8960C",
                color: "white",
              }}
              onClick={() => {
                const val = Number(priceInput);
                setTicketPrice(val > 0 ? `${val} $GLM` : "Free $GLM");
                setShowPriceModal(false);
              }}
            >
              Set Price
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEventPage;
