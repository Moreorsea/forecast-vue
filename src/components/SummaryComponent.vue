<template>
  <section class="section section-left">
    <div class="info">
      <div class="city-inner">
        <input
          type="text"
          class="search"
          @input="searchText"
          v-model.trim="searchPattern"
          v-on:keydown.enter="submitCity"
        />
      </div>
      <div class="summary">
        <img class="pic-main" :src="this.forecast.iconUrl" />
        <div class="weather">
          <div class="temp">{{ Math.round(this.forecast.temp) }} °C</div>
          <div class="weather-desc text-block">{{ this.forecast.description }}</div>
        </div>
        <div class="city text-block">{{ this.city.name }}, {{ this.city.country }}</div>
        <div class="date text-block">{{ this.city.dt }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { useWeatherStore } from '../stores/weather'

export default {
  name: 'SummaryComponent',
  data() {
    return {
      searchPattern: ''
    }
  },
  computed: {
    ...mapState(useWeatherStore, ['forecast', 'city'])
  },
  methods: {
    ...mapActions(useWeatherStore, ['getForecast', 'updateCity']),
    searchText(e: Event) {
      const city = (e as unknown as HTMLInputElement).target.value
      this.searchPattern = city
    },
    submitCity() {
      this.updateCity(this.searchPattern)
      this.getForecast()
    }
  }
}
</script>

<style lang="sass">
.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('../assets/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('../assets/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: #ffffff
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%

.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  object-fit: contain
  transform: scale(2)

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc
  &::before
    background-image: url('../assets/weather.svg')

.city
  &::before
    background-image: url('../assets/location.svg')

.date
  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('../assets/calendar.svg')
</style>
