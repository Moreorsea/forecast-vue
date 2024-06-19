<template>
  <div class="card">
    <div class="card-title">Sunrise and sunset</div>
    <img class="card-pic card-pic--sun" src="../../assets/sun-moving.png" />
    <div class="card-info">
      <div class="states">
        <div class="state">
          <div class="state-pic"></div>
          <div class="state-title">Sunrise</div>
          <div class="state-time">{{ this.forecast.sunrise }}</div>
        </div>
        <div class="state">
          <div class="state-pic state-pic--flipped"></div>
          <div class="state-title">Sunset</div>
          <div class="state-time">{{ this.forecast.sunset }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../../stores/weather'
export default {
  name: 'SunriseSunsetComponent',
  computed: {
    ...mapState(useWeatherStore, ['forecast'])
  }
}
</script>
