import * as React from 'react'
import WeatherTable from '../components/WeatherTable';
import { weatherType } from '../weatherApi/weatherType';
import { apiKey } from '../weatherApi/apiKey'
import { kelvinZero } from '../weatherApi/constants'
import { signOut } from '../authApi/auth'


const ForecastPage = () => {
  const [cityQuery, setCityQuery] = React.useState("");
  const [currWeather, setCurrWeather] = React.useState<weatherType | null>(null);
  const [error, setError] = React.useState(false);

  const handleGetWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${apiKey}`);

    let weather: weatherType | null;
    let error: boolean = false;

    if (response.ok) {
      weather = await response.json();
    } else {
      error = true;
      weather = null;
    }

    setCurrWeather(weather);
    setError(error);
  }

  return (
    <div className="container">
      <div className="row g-3 justify-content-center align-items-center w-100 my-3">
        <div className="col-auto">
          <form>
            <button onClick={signOut} type="submit" className="btn btn-secondary">Sign out</button>
          </form>
        </div>
      </div>

      <div className="row g-3 justify-content-center align-items-center my-5">
        <div className="col-auto">
          <label htmlFor="city" className="col-form-label">City</label>
        </div>
        <div className="col-auto">
          <input
            onChange={e => setCityQuery(e.target.value)}
            value={cityQuery}
            type="text"
            id="city"
            className="form-control"
            aria-describedby="city-weather"
          />
        </div>
        <div className="col-auto">
          <button onClick={handleGetWeather} type="submit" className="btn btn-primary">Look up</button>
        </div>
      </div>

      {
        currWeather === null
        ? error
          ? <h3 className="text-center">No city with such name!</h3>
          : <h3 className="text-center">Search for weather to see results</h3>
        : <WeatherTable
            city={currWeather.name}
            main={currWeather.weather[0].main}
            temp={Math.round(currWeather.main.temp + kelvinZero)}
            wind_speed={currWeather.wind.speed}
            wind_deg={currWeather.wind.deg}
          />
      }
      
    </div>
  );
}


export default ForecastPage;