import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label htmlFor="theme-toggle" className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        id="theme-toggle"
        type="checkbox"
        className="toggle-switch__checkbox"
      />{" "}
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text_F">F</span>
      <span className="toggle-switch__text_C">C</span>
    </label>
  );
}
