import { useState } from "react";
import { FaCat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DateTime from "./DateTime";
import "././ComponentStyleSheets/BottomNavBar.css";

const CatIcon = FaCat as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

const BottomNavBar = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="bottom-nav">
      <button
        className="power-button"
        onClick={() => setShowLogoutConfirmation(true)}
      >
        <CatIcon style={{ fontSize: 30 }} />
      </button>
      <div className="date-time-wrapper">
        <DateTime />
      </div>

      {/* Show confirmation popup when clicking power button */}
      {showLogoutConfirmation && (
        <div className="logout-popup">
          <p className="logout-message">Are you sure you want to log out?</p>
          <button className="confirm-button" onClick={handleLogout}>
            Yes
          </button>
          <button
            className="cancel-button"
            onClick={() => setShowLogoutConfirmation(false)}
          >
            No
          </button>
        </div>
      )}
      {isLoggingOut && (
        <div className="full-screen-overlay">
          <h1>Logging out...</h1>
        </div>
      )}
    </div>
  );
};

export default BottomNavBar;
