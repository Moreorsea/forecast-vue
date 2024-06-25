import axios from 'axios'
import dayjs from 'dayjs'
import { defineStore } from 'pinia'

interface Weather {
  coord: {
    lat: number
    lon: number
  }
  forecast: {
    temp: number
    sunrise: number
    sunset: number
    iconUrl: string
    description: string
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  pressure: number
  city: {
    name: string
    country: string
    dt: string
    timezone: number
  }
  humidity: number
  clouds: number
  feelsLike: number
}

export const useWeatherStore = defineStore('weather', {
  state: (): Weather => ({
    coord: {
      lat: 59.8944,
      lon: 30.2642
    },
    forecast: {
      temp: 0,
      sunrise: 0,
      sunset: 0,
      iconUrl: '',
      description: ''
    },
    wind: {
      speed: 0,
      deg: 0,
      gust: 0
    },
    pressure: 0,
    city: {
      name: 'Sankt Petersburg',
      country: 'RU',
      dt: '',
      timezone: 0
    },
    humidity: 0,
    clouds: 0,
    feelsLike: 0
  }),
  actions: {
    getForecast() {
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${this.city.name}&lat=${this.city.name}&lon=${this.coord.lon}&appid=219cda179dfba493ef2e271ffb914ecc&units=metric&lang=ru`
      }).then((res: any) => {
        this.updateState(res.data)
      })
    },
    updateState(res: any) {
      const { coord, main, wind, clouds, sys, name, dt, timezone, weather } = res
      const { feels_like, humidity, pressure } = main

      this.coord = coord

      this.forecast = {
        temp: main.temp,
        description: weather[0].description,
        sunrise: dayjs.unix(sys.sunrise).format('HH:mm:ss'),
        sunset: dayjs.unix(sys.sunset).format('HH:mm:ss'),
        iconUrl: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      }

      this.wind = wind

      this.pressure = pressure

      this.city = {
        name,
        dt: dayjs.unix(dt + timezone).format('ddd, MMM D, YYYY'),
        country: sys.country
      }

      this.humidity = humidity

      this.clouds = clouds.all

      this.feelsLike = feels_like
    },
    updateCity(newCity: string) {
      this.city.name = newCity
    }
  }
})
