import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  onSignUpClick,
  onLoginClick,
  loggedIn,
  // currentUser,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const userAvatar = currentUser?.avatar ? (
    <img
      src={currentUser.avatar}
      alt={currentUser.name}
      className="header__avatar"
    />
  ) : (
    <div className="header__avatar-placeholder">
      {currentUser?.name?.charAt(0).toUpperCase() || "U"}
    </div>
  );

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>

        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__controls">
        <ToggleSwitch />

        {loggedIn ? (
          <button
            onClick={handleAddClick}
            type="button"
            className="header__button"
          >
            + Add Clothes
          </button>
        ) : (
          <>
            <button onClick={onSignUpClick} className="header__auth-button">
              Sign Up
            </button>
            <button onClick={onLoginClick} className="header__auth-button">
              Log In
            </button>
          </>
        )}
      </div>
      {loggedIn && (
        <Link className="header__link" to="/profile">
          <div className="header__user">
            <p className="header__username">{currentUser?.name || "User"}</p>
            <img
              src={currentUser?.avatar || avatar}
              alt={currentUser?.name || "User"}
              className="header__avatar"
            />
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
