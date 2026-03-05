import { useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SmartWalletPage from "./pages/SmartWalletPage";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import DatePickerPage from "./pages/DatePickerPage";
import EventCreatedPage from "./pages/EventCreatedPage";
import WalletPage from "./pages/WalletPage";
import FavoritePage from "./pages/FavoritePage";
import SeeAllPage from "./pages/SeeAllPage";
import SplashPage from "./pages/SplashPage";
import EventsPage from "./pages/EventsPage";
import ManageEventPage from "./pages/ManageEventPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationPage from "./pages/NotificationPage";
import EventBookedPage from "./pages/EventBookedPage";

const MobileFrame = ({ children }) => (
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
    {children}
  </div>
);

function App() {
  const nav = useNavigate();
  const location = useLocation();

  const navigate = useCallback(
    (page, data = {}) => {
      nav(`/${page}`, { state: data });
    },
    [nav],
  );

  const goBack = useCallback(() => {
    nav(-1);
  }, [nav]);

  const pageData = location.state || {};

  return (
    <Routes>
      <Route path="/" element={<SplashPage navigate={navigate} />} />
      <Route path="/welcome" element={<Welcome navigate={navigate} />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route
        path="/favorites"
        element={<FavoritePage navigate={navigate} />}
      />
      <Route
        path="/smartwallet"
        element={<SmartWalletPage navigate={navigate} />}
      />
      <Route path="/home" element={<HomePage navigate={navigate} />} />
      <Route path="/events" element={<EventsPage navigate={navigate} goBack={goBack} />} />
      <Route
        path="/seeall"
        element={<SeeAllPage navigate={navigate} />}
      />
      <Route
        path="/createevent"
        element={<CreateEventPage navigate={navigate} goBack={goBack} />}
      />
      <Route
        path="/datepicker"
        element={
          <DatePickerPage
            navigate={navigate}
            goBack={goBack}
            pageData={pageData}
          />
        }
      />
      <Route
        path="/eventcreated"
        element={
          <MobileFrame>
            <EventCreatedPage navigate={navigate} pageData={pageData} />
          </MobileFrame>
        }
      />
      <Route
        path="/manageevent"
        element={<ManageEventPage navigate={navigate} />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/notifications"
        element={<NotificationPage />}
      />
      <Route
        path="/eventbooked"
        element={<EventBookedPage navigate={navigate} />}
      />
    </Routes>
  );
}

export default App;
