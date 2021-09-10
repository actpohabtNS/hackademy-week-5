import * as React from 'react'
import WeatherTable from '../components/WeatherTable';
import { weatherType } from '../weatherApi/weatherType';
import { apiKey } from '../weatherApi/apiKey'
import { kelvinZero } from '../weatherApi/constants'
import { signOut } from '../authApi/auth'

type Props = {};
type State = {
  cityQuery: string,
  currWeather: weatherType | null,
  error: boolean
};

class ForecastPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cityQuery: "",
      currWeather: null,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ cityQuery: evt.target.value });
  }

  async handleGetWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityQuery}&appid=${apiKey}`);

    let weather: weatherType | null;
    let error: boolean = false;

    if (response.ok) {
      weather = await response.json();
    } else {
      error = true;
      weather = null;
    }

    this.setState({ currWeather: weather, error});
  }

  render() {
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
            <input onChange={this.handleChange} type="text" id="city" value={this.state.cityQuery} className="form-control" aria-describedby="city-weather" />
          </div>
          <div className="col-auto">
            <button onClick={this.handleGetWeather} type="submit" className="btn btn-primary">Look up</button>
          </div>
        </div>

        {
          this.state.currWeather === null
          ? this.state.error
            ? <h3 className="text-center">No city with such name!</h3>
            : <h3 className="text-center">Search for weather to see results</h3>
          : <WeatherTable
              city={this.state.currWeather.name}
              main={this.state.currWeather.weather[0].main}
              temp={Math.round(this.state.currWeather.main.temp + kelvinZero)}
              wind_speed={this.state.currWeather.wind.speed}
              wind_deg={this.state.currWeather.wind.deg}
            />
        }
        
      </div>
    );
  }
}

export default ForecastPage;