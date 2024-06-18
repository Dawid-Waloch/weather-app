import React, { useState } from 'react'
import axios from 'axios'
import {WeatherData} from '../utils/WeatherData';
import {SearchButton, SearchInput, SearchWrapper} from './SearchStyled';

interface SearchProps {
  onSearch: (data: WeatherData) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('')

  const handleSearch = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

      try {
        const response = await axios.get(url)
        onSearch(response.data)
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
  }

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchWrapper>
  )
}

export default Search