import axios from 'axios'
import dayjs from 'dayjs'
import { defineStore } from 'pinia'

interface Weather {
  lat: number
  lon: number
  forecast: {
    feelsLike: number
    clouds: number
    temp: number
    sunrise: number
    sunset: number
    iconCode: string
    iconUrl: string
    description: string
  }
  wind: {
    speed: number
    deg: number
  }
  pressure: number
  city: {
    name: string
    country: string
  }
  humidity: number
  dt: string
  timezone: string
}

export const useWeatherStore = defineStore('weather', {
  state: (): Weather => ({
    lat: 59.8944,
    lon: 30.2642,
    forecast: {
      feelsLike: 0,
      clouds: 0,
      temp: 0,
      sunrise: 0,
      sunset: 0,
      iconCode: '',
      iconUrl: '',
      description: ''
    },
    wind: {
      speed: 0,
      deg: 0
    },
    pressure: 0,
    city: {
      name: 'Sankt Petersburg',
      country: 'RU'
    },
    humidity: 0,
    dt: '',
    timezone: ''
  }),
  actions: {
    getForecast() {
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=219cda179dfba493ef2e271ffb914ecc&units=metric`
      }).then((res: any) => {
        this.updateForecast(res.data)
      })
    },
    updateForecast(res: any) {
      console.log('RES', res)
      this.forecast = {
        ...this.forecast,
        feelsLike: res.main.feels_like,
        clouds: res.clouds.all,
        humidity: res.main.humidity,
        temp: res.main.temp,
        description: res.weather[0].main,
        iconCode: res.weather[0].icon,
        sunrise: dayjs.unix(res.sys.sunrise).format('HH:mm:ss'),
        sunset: dayjs.unix(res.sys.sunset).format('HH:mm:ss')
      }

      this.city.name = res.name
      this.city.country = res.sys.country
      this.wind.speed = res.wind.speed
      this.wind.deg = res.wind.deg
      this.humidity = res.main.humidity
      this.pressure = res.main.pressure
      this.timezone = res.timezone
      this.dt = dayjs.unix(res.dt + res.timezone).format('ddd, MMM D, YYYY')

      this.forecast.iconUrl = `https://openweathermap.org/img/wn/${this.forecast.iconCode}@2x.png`
    },
    getWeatherIcon(iconCode: string) {
      if (!iconCode) return

      return `https://openweathermap.org/img/wn/${iconCode}@3x.png`
    }
  }
})
