<template>
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <img class="block-bottom-pic pic-humidity" src="../assets/humidity.png" />
        <div class="block-bottom-texts">
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">
              {{ $t('humidity.title') }}: {{ this.humidity }} %
            </div>
            <div class="block-bottom-text-block-desc">
              {{ $t('humidity.text') }}
              <br /><br />
              {{ $t('humidity.text2') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { mapState } from 'pinia'

export default {
  name: 'HumidityComponent',
  computed: {
    ...mapState(useWeatherStore, ['humidity'])
  }
}
</script>
