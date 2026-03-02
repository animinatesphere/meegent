import { useState, useCallback } from "react";
import Welcome from "../pages/Welcome";
import SmartWalletPage from "../pages/SmartWalletPage";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import DatePickerPage from "../pages/DatePickerPage";
import EventCreatedPage from "../pages/EventCreatedPage";

// ============================================================
// Custom Router Hook
// ============================================================
const useRouter = () => {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [pageData, setPageData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [history, setHistory] = useState(["welcome"]);

  const navigate = useCallback((page, data = {}) => {
    setHistory((prev) => [...prev, page]);
    setPageData(data);
    setCurrentPage(page);
  }, []);

  const goBack = useCallback(() => {
    setHistory((prev) => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      setCurrentPage(newHistory[newHistory.length - 1]);
      return newHistory;
    });
  }, []);

  return { currentPage, navigate, goBack, pageData };
};

// ============================================================
// Main App Component
// ============================================================
function App2() {
  const { currentPage, navigate, goBack, pageData } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage navigate={navigate} />;
      case "smartwallet":
        return <SmartWalletPage navigate={navigate} />;
      case "home":
        return <HomePage navigate={navigate} />;
      case "createevent":
        return <CreateEventPage navigate={navigate} goBack={goBack} />;
      case "datepicker":
        return (
          <DatePickerPage
            navigate={navigate}
            goBack={goBack}
            pageData={pageData}
          />
        );
      case "eventcreated":
        return <EventCreatedPage navigate={navigate} pageData={pageData} />;
      default:
        return <Welcome navigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        maxWidth: 390,
        margin: "0 auto",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 0 60px rgba(0,0,0,0.15)",
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App2;
