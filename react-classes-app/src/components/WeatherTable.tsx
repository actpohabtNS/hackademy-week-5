import * as React from 'react'
import { weatherProps } from '../weatherApi/weatherType';

class WeatherTable extends React.Component<weatherProps> {
  render() {
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
            <th scope="row">{this.props.city}</th>
            <td>{this.props.temp}</td>
            <td>{this.props.main}</td>
            <td>{this.props.wind_speed}</td>
            <td>{this.props.wind_deg}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default WeatherTable;