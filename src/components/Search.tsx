import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {WeatherData} from '../utils/WeatherData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {SearchButton, SearchErrorMessage, SearchInput, SearchWrapper} from './SearchStyled';

interface SearchProps {
  onSearch: (data: WeatherData) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  
  const getLocation = () => {
    setError(null)
    setCity('')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoords(latitude, longitude);
        },
        error => {
          console.error(error);
          setError("Nie można uzyskać lokalizacji użytkownika.")
        }
      )
    } else {
      setError("Geolokalizacja nie jest obsługiwana przez tę przeglądarkę.")
    }
  }

  const fetchWeatherDataByCoords = async (lat: number, lon: number) => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`

      try {
        const response = await axios.get(url)
        onSearch(response.data)
      } catch (error) {
        console.error("Błąd podczas pobierania danych pogodowych przez koordynaty.", error);
        setError("Błąd podczas pobierania danych pogodowych przez koordynaty.");
      }
  }

  const fetchWeatherDataByCityName = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

      try {
        const response = await axios.get(url)
        onSearch(response.data)
        setError(null)
      } catch (error) {
        console.error("Błąd podczas pobierania danych pogodowych przez miasto / kraj.", error)
        setError("Błąd podczas pobierania danych pogodowych przez miasto / kraj.")
      }
  }

  return (
    <>
      <SearchWrapper>
        <SearchInput
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Podaj miasto / kraj"
        />
        <SearchButton onClick={getLocation}>
          Aktualna lokalizacja <FontAwesomeIcon icon={faMapMarkerAlt} />
        </SearchButton>
        <SearchButton onClick={fetchWeatherDataByCityName}>Search</SearchButton>
      </SearchWrapper>
      {error && <SearchErrorMessage>{error}</SearchErrorMessage>}
    </>
  )
}

export default Search