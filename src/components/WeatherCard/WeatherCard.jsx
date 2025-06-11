import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import clearDay from "../../assets/day/clear.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (
    !weatherData ||
    !weatherData.temp ||
    weatherData.isDay === undefined ||
    !weatherData.condition
  ) {
    return null;
  }

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl = filteredOptions[0]?.url;
  const weatherOptionCondition = filteredOptions[0]?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? `${weatherData.temp.F}°F`
          : `${weatherData.temp.C}°C`}
      </p>
      <img
        src={weatherOptionUrl || clearDay}
        alt={weatherOptionCondition || "weather"}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
