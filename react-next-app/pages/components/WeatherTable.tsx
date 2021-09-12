import * as React from 'react'
import { weatherProps } from '../api/weather/weatherType';

const WeatherTable = (weather: weatherProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature</th>
          <th scope="col">Weather</th>
          <th scope="col">Wind speed</th>
          <th scope="col">Wind degree</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{weather.city}</th>
          <td>{weather.temp}</td>
          <td>{weather.main}</td>
          <td>{weather.wind_speed}</td>
          <td>{weather.wind_deg}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default WeatherTable;
