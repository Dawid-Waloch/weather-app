import React, { useState } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import {WeatherData} from './utils/WeatherData';
import { AppContainer, AppHeader } from './AppStyled';

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = (data: WeatherData) => {
    setWeatherData(data);
  };

  return (
    <AppContainer>
      <AppHeader>Pogoda &#9925;</AppHeader>
      <Search onSearch={handleSearch} />
      {weatherData && <Weather data={weatherData} />}
    </AppContainer>
  );
}

export default App;
