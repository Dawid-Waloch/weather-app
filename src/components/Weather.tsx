import React from "react";
import { WeatherData } from "../utils/WeatherData";
import { City, Description, Humidity, Temperature, WeatherWrapper, Wind } from "./WeatherStyled";
import cityTranslations from "../utils/cityTranslations";
import weatherTranslations from "../utils/weatherTranslations";

interface WeatherProps {
    data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
    const translateCity = (cityName: string) => {
        return cityTranslations[cityName] || cityName
    }

    const translateWeather = (weatherConditions: string) => {
        return weatherTranslations[weatherConditions]?.weatherName ?? weatherConditions
    }

    const translateUniCode = (weatherConditions: string) => {
        return weatherTranslations[weatherConditions]?.uniCode ?? ""
    }

    return (
      <WeatherWrapper>
        <City>{translateCity(data.name)}</City>
        <Temperature>Temperatura: {Math.round(data.main.temp)}°C</Temperature>
        <Description>Opis: {translateWeather(data.weather[0].description)} {translateUniCode(data.weather[0].description)}</Description>
        <Humidity>Wilgotność: {data.main.humidity}%</Humidity>
        <Wind>Prędkość wiatru: {data.wind.speed} m/s</Wind>
      </WeatherWrapper>
    )
  }

export default Weather