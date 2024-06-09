<script setup lang="ts">
import CoordComponent from './components/CoordComponent.vue'
import HumidityComponent from './components/HumidityComponent.vue'
import HighlightsWrapper from './components/Highlights/HighlightsWrapper.vue'
import SummaryComponent from './components/SummaryComponent.vue'
</script>

<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <SummaryComponent />
            <HighlightsWrapper />
          </div>
          <div class="sections">
            <CoordComponent />
            <HumidityComponent />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass">
*
  box-sizing: border-box
  font-size: 16px

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

// .inter-<uniquifier>
//   font-family: "Inter", sans-serif
//   font-optical-sizing: auto
//   font-weight: 400
//   font-style: normal


html,
body
  margin: 0
  padding: 0
  font-family: 'Inter', Arial, sans-serif
  font-size: 16px
  line-height: 1.4
  color: #ffffff

a
  font-size: inherit
  line-height: inherit
  color: inherit

.container
  max-width: 1200px
  width: 100%
  margin: 0 auto
  padding: 0 3%

.section
  z-index: 2
  position: relative

.block-bottom
  height: 100%
  margin-left: 10px
  padding: 28px 16px 16px
  background: url('src/assets/gradient-1.jpg') no-repeat 0% 0%
  background-size: cover
  border-radius: 25px

  &-inner
    display: flex
    align-items: center

    @media (max-width: 575px)
      flex-direction: column

  &-pic
    width: 15%
    height: 70px
    object-fit: contain
    border-radius: 16px

    @media (max-width: 575px)
      width: 30%
      margin-right: 0

  &-texts
    width: 85%
    padding-left: 20px

    @media (max-width: 575px)
      width: 100%
      padding-top: 16px
      padding-left: 0

  &-text-block

    &:first-child
      padding-bottom: 12px

    &-title
      padding-bottom: 4px
      font-size: 15px
      font-weight: 700

    &-desc
      font-size: 13px
      color: rgba(#ffffff, 0.75)

.pic-humidity
  background-image: url('/src/assets/img/humidity.png')


.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
