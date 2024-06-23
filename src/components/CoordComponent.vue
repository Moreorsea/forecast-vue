<template>
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <img class="block-bottom-pic pic-coords" src="../assets/compass.png" />
        <div class="block-bottom-texts">
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Longitude: {{ this.coord.lon }}</div>
            <div class="block-bottom-text-block-desc">
              Longitude measures distance east or west of the prime meridian.
            </div>
          </div>
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Latitude: {{ this.coord.lat }}</div>
            <div class="block-bottom-text-block-desc">
              Latitude lines start at the equator (0 degrees latitude) and run east and west,
              parallel to the equator.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useWeatherStore } from '../stores/weather'

export default {
  name: 'CoordComponent',
  computed: {
    ...mapState(useWeatherStore, ['coord'])
  }
}
</script>

<style lang="sass" scoped></style>
