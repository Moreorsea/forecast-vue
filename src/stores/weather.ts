import axios from 'axios'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      lat: 59.8944,
      lon: 30.2642,
      forecast: {
        feelsLike: 0,
        clouds: 0,
        humidity: 0,
        temp: 0,
        sunrise: 0,
        sunset: 0,
        icon: '',
        wind: {
          speed: 0,
          deg: 0
        }
      },
      city: {
        name: 'Sankt Petersburg',
        country: 'RU'
      },
      humidity: 0
    }
  },
  actions: {
    getForecast() {
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=219cda179dfba493ef2e271ffb914ecc&units=metric`
      }).then((res) => {
        this.updateForecast(res.data)
      })
    },
    updateForecast(res) {
      console.log('RES', res)
      this.forecast = {
        ...this.forecast,
        feelsLike: res.main.feels_like,
        clouds: res.clouds.all,
        humidity: res.main.humidity,
        temp: res.main.temp
      }
      this.humidity = res.main.humidity
    },
    test() {
      axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Sankt Petersburg&appid=219cda179dfba493ef2e271ffb914ecc'
      }).then((res) => {
        console.log('RES', res)
      })
    }
  }
})
