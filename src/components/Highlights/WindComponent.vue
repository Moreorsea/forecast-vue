<template>
  <div class="card">
    <div class="card-title">Wind</div>
    <img class="card-pic card-pic--wind" src="../../assets/equalizer (2).png" />
    <div class="card-info">
      <div class="card-justify">
        <div class="info-main">
          <div class="info-main-num">{{ this.wind.speed }}</div>
          <div class="info-main-text">m/s</div>
        </div>
        <div class="info-main">
          <div class="info-main-num">{{ this.wind.deg }}</div>
          <div class="info-main-text">deg</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { mapState } from 'pinia'

export default {
  name: 'WindComponent',
  computed: {
    ...mapState(useWeatherStore, ['wind'])
  }
}
</script>
