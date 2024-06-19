<template>
  <div class="card">
    <div class="card-title">Pressure</div>
    <img class="card-pic card-pic--pressure" src="../../assets/barometer.png" />
    <div class="card-info">
      <div class="card-centered">
        <div class="info-main">
          <div class="info-main-num">{{ this.formatPressure }}</div>
          <div class="info-main-text">mm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../../stores/weather'

export default {
  name: 'PressureComponent',
  computed: {
    ...mapState(useWeatherStore, ['pressure']),
    formatPressure(): number {
      return Math.round(this.pressure * 0.750062)
    }
  }
}
</script>
