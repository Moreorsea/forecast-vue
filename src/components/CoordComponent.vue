<template>
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <img class="block-bottom-pic pic-coords" src="../assets/compass.png" />
        <div class="block-bottom-texts">
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">
              {{ $t('coord.lon') }}: {{ this.coord.lon }}
            </div>
            <div class="block-bottom-text-block-desc">
              {{ $t('coord.lonText') }}
            </div>
          </div>
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">
              {{ $t('coord.lat') }}: {{ this.coord.lat }}
            </div>
            <div class="block-bottom-text-block-desc">
              {{ $t('coord.latText') }}
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
