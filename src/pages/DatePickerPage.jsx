import { useState, useEffect } from "react";

const DatePickerPage = ({ navigate, goBack, pageData }) => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState(30);
  const [hours, setHours] = useState("10");
  const [minutes, setMinutes] = useState("47");
  const [ampm, setAmpm] = useState("AM");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  const handleSelect = () => {
    const dateStr = `${months[currentMonth].slice(0, 3)} ${selectedDay}, ${currentYear} ${hours}:${minutes} ${ampm}`;
    navigate("createevent", { selectedDate: dateStr, field: pageData?.field });
  };

  const isFriday = (day) =>
    new Date(currentYear, currentMonth, day).getDay() === 5;
  const isSaturday = (day) =>
    new Date(currentYear, currentMonth, day).getDay() === 6;

  return (
    <div
      className="min-h-screen flex flex-col md:justify-center md:items-center"
      style={{
        background: "#FAF6EF",
        transition: "opacity 0.5s ease",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      {/* Blurred background area */}
      <div
        className="h-[120px] md:hidden"
        style={{
          background: "linear-gradient(180deg, #F5E6B8 0%, #FAF6EF 100%)",
        }}
      />

      {/* Calendar card */}
      <div
        className="mx-5 md:mx-auto rounded-3xl p-5 md:p-8 -mt-8 md:mt-0 w-auto md:w-full max-w-lg"
        style={{
          background: "#FFFDF8",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        }}
      >
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={prevMonth}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
            style={{ background: "#F5F0E8" }}
          >
            <svg width="16" height="16" fill="#2D2A26" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <h2
            className="text-lg md:text-xl font-bold"
            style={{ color: "#2D2A26" }}
          >
            {months[currentMonth]}{" "}
            <span style={{ color: "#E8960C" }}>{currentYear}</span>
          </h2>
          <button
            onClick={nextMonth}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
            style={{ background: "#F5F0E8" }}
          >
            <svg width="16" height="16" fill="#2D2A26" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
          {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-xs md:text-sm font-medium py-1"
              style={{ color: "#8B8068" }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {[...Array(firstDayOfMonth)].map((_, i) => (
            <div key={`empty-${i}`} className="h-10 md:h-12" />
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const isSelected = selectedDay === day;
            const isWeekend = isFriday(day) || isSaturday(day);

            return (
              <button
                key={day}
                className="h-10 md:h-12 flex items-center justify-center rounded-full text-sm md:text-base font-medium cursor-pointer"
                style={{
                  background: isSelected ? "#E8960C" : "transparent",
                  color: isSelected
                    ? "white"
                    : isWeekend
                      ? "#E8960C"
                      : "#2D2A26",
                }}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Time picker */}
        <div className="flex items-center justify-between mt-6 md:mt-8 mb-4 md:mb-6">
          <span
            className="text-sm md:text-base font-medium"
            style={{ color: "#2D2A26" }}
          >
            Time
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="flex items-center rounded-lg px-3 py-2 md:px-4 md:py-3"
              style={{ background: "#F5F0E8" }}
            >
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value.slice(0, 2))}
                className="w-6 md:w-8 text-center text-sm md:text-base font-medium bg-transparent outline-none"
                style={{ color: "#2D2A26" }}
              />
              <span style={{ color: "#B5AEA2" }}>:</span>
              <input
                type="text"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
                className="w-6 md:w-8 text-center text-sm md:text-base font-medium bg-transparent outline-none"
                style={{ color: "#2D2A26" }}
              />
            </div>
            <button
              className="px-3 py-2 md:px-4 md:py-3 rounded-lg text-sm md:text-base font-bold cursor-pointer"
              style={{
                background: ampm === "AM" ? "#E8960C" : "#F5F0E8",
                color: ampm === "AM" ? "white" : "#8B8068",
              }}
              onClick={() => setAmpm("AM")}
            >
              AM
            </button>
            <button
              className="px-3 py-2 md:px-4 md:py-3 rounded-lg text-sm md:text-base font-bold cursor-pointer"
              style={{
                background: ampm === "PM" ? "#E8960C" : "#F5F0E8",
                color: ampm === "PM" ? "white" : "#8B8068",
              }}
              onClick={() => setAmpm("PM")}
            >
              PM
            </button>
          </div>
        </div>

        {/* Cancel / Select buttons */}
        <div className="flex gap-3 md:gap-4">
          <button
            className="flex-1 py-3 md:py-4 rounded-full text-sm md:text-base font-bold cursor-pointer"
            style={{ background: "#F5F0E8", color: "#8B8068" }}
            onClick={goBack}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 md:py-4 rounded-full text-sm md:text-base font-bold cursor-pointer"
            style={{ background: "#E8960C", color: "white" }}
            onClick={handleSelect}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerPage;
