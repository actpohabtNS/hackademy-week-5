export type weatherProps = {
  city: string,
  temp: number,
  main: string,
  wind_speed: number,
  wind_deg: number,
}

export type weatherType = {
  name: string,
  main: { temp: number },
  weather: Array<{ main: string }>,
  wind: { speed: number, deg: number }
}