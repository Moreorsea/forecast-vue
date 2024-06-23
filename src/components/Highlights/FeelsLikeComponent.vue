<template>
  <div class="card-small">
    <div class="card-small-title">Feels like</div>
    <div class="card-small-info">
      <div class="card-small-data">
        <div class="info-main-num">{{ Math.round(this.feelsLike) }}</div>
        <div class="info-main-text">°C</div>
      </div>
      <div class="card-small-hint">
        <div class="card-small-pic card-small-pic--margin card-small-pic--pressure"></div>
        <div class="card-small-text">How hot or cold it really feels</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../../stores/weather'

export default {
  name: 'FeelsLikeComponent',
  computed: {
    ...mapState(useWeatherStore, ['feelsLike'])
  }
}
</script>
