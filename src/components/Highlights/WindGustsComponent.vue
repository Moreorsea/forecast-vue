<template>
  <div class="card-small">
    <div class="card-small-title">Wind gusts</div>
    <div v-if="this.wind.gust" class="card-small-info">
      <div class="card-small-data">
        <div class="info-main-num">{{ this.wind.gust }}</div>
        <div class="info-main-text">m/s</div>
      </div>
      <div class="card-small-hint">
        <div class="card-small-pic card-small-pic--wind"></div>
        <div class="card-small-text text-egorova">
          Learn
          <a
            href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
            target="_blank"
            >more</a
          >
          about gusts
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card-small-text text-egorova">Без порывов ветра</div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../../stores/weather'

export default {
  name: 'WindGustsComponent',
  computed: {
    ...mapState(useWeatherStore, ['wind'])
  }
}
</script>
