export class City {
  name: string;
  temperature: number;
  humidity: number;
  weatherConditions?: {
    description: string,
    icon: string,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    pressure: number,
    wind: {
      speed: number,
      degrees: number
    }
  }
  sunProps?: {
    sunrise: bigint,
    sunset: bigint
  }

  constructor(name: string, temperature: number, humidity: number, weatherConditions: any, sunProps: any) {
    this.name = name;
    this.temperature = temperature;
    this.humidity = humidity;
    this.weatherConditions = weatherConditions,
    this.sunProps = sunProps
  }
}
