<template>
  <div class="card-small">
    <div class="card-small-title">Cloudiness</div>
    <div class="card-small-info">
      <div class="card-small-data">
        <div class="info-main-num">{{ this.clouds }}</div>
        <div class="info-main-text">%</div>
      </div>
      <div class="card-small-hint">
        <div class="card-small-pic card-small-pic--sun"></div>
        <div class="card-small-text">The sky fraction obscured by clouds</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../../stores/weather'

export default {
  name: 'CloudinessComponent',
  computed: {
    ...mapState(useWeatherStore, ['clouds'])
  }
}
</script>
