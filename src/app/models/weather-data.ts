export class WeatherData {
  name: string;
  temperature: number;
  humidity: number;

  constructor(name: string, temperature: number, humidity: number) {
    this.name = name;
    this.temperature = temperature;
    this.humidity = humidity;
  }
}
