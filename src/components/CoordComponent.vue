<template>
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <img class="block-bottom-pic pic-coords" src="../assets/compass.png" />
        <div class="block-bottom-texts">
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Longitude: {{ lon }}</div>
            <div class="block-bottom-text-block-desc">
              Longitude measures distance east or west of the prime meridian.
            </div>
          </div>
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Latitude: {{ lat }}</div>
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
export default {
  name: 'CoordComponent',
  props: {
    lon: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped></style>
