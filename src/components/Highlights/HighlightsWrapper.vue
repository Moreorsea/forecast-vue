<template>
  <section class="section section-right">
    <div class="section highlights">
      <div class="highlights-wrapper">
        <div class="title">Today's Highlights</div>
        <div class="lang">
          <div :class="{ active: this.lang === 'ru' }" @click="changeLang('ru')">RU</div>
          <span>|</span>
          <div :class="{ active: this.lang === 'en' }" @click="changeLang('en')">EN</div>
        </div>
      </div>
      <div class="highlights-wrapper">
        <div class="highlight">
          <WindComponent />
          <WindGustsComponent />
        </div>
        <div class="highlight">
          <PressureComponent />
          <FeelsLikeComponent />
        </div>
        <div class="highlight">
          <SunriseSunsetComponent />
          <CloudinessComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import WindComponent from './WindComponent.vue'
import PressureComponent from './PressureComponent.vue'
import SunriseSunsetComponent from './SunriseSunsetComponent.vue'
import WindGustsComponent from './WindGustsComponent.vue'
import FeelsLikeComponent from './FeelsLikeComponent.vue'
import CloudinessComponent from './CloudinessComponent.vue'

export default {
  name: 'HighlightsWrapper',
  data() {
    return {
      lang: 'ru'
    }
  },
  components: {
    WindComponent,
    PressureComponent,
    SunriseSunsetComponent,
    WindGustsComponent,
    FeelsLikeComponent,
    CloudinessComponent
  },
  methods: {
    changeLang(lang: string) {
      this.$i18next.changeLanguage(lang)
      this.lang = lang
    }
  }
}
</script>

<style lang="sass">
.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.highlights
  padding: 28px 16px 16px
  background: url('/src/assets/gradient-4.jpg') no-repeat 0% 0%
  background-size: cover
  border-radius: 25px

  &-wrapper
    display: flex
    justify-content: space-between

    @media (max-width: 575px)
      flex-direction: column

.title
  padding-bottom: 16px

.highlight
  width: 32%

  @media (max-width: 575px)
    width: 100%
    margin-bottom: 16px

.card
  min-height: 230px
  padding: 16px
  background: url('/src/assets/gradient-2.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 8px

  @media (max-width: 1199px)
    padding: 12px

  &-centered
    display: flex
    justify-content: center
    margin-top: 40px

  &-justify
    display: flex
    justify-content: space-between
    margin-top: 40px

  &-title
    padding-bottom: 12px
    font-size: 13px

    @media (max-width: 1199px)
      font-size: 12px

  &-pic
    width: 100%
    height: 90px
    margin-bottom: 16px
    object-fit: contain

    // &--wind
    //   background-image: url('/src/assets/img/equalizer (2).png')

    // &--pressure
    //   background-image: url('/src/assets/img/barometer.png')

    // &--sun
    //   background-image: url('/src/assets/img/sun-moving.png')


.states
  display: flex
  justify-content: space-between

  &--margin
    margin-top: 40px

.state
  width: 40%

  &:last-child
    text-align: right

  &-pic
    width: 20px
    height: 20px
    margin-bottom: 6px
    background: url('/src/assets/sun.svg') no-repeat 50% 50%
    background-size: cover

    &--flipped
      margin-left: auto
      -webkit-transform: scaleX(-1)
      transform: scaleX(-1)

  &-title
    font-size: 12px
    color: #ffd347

  &-time
    font-size: 13px
    font-weight: 700

    @media (max-width: 1199px)
      font-size: 11px

.info-main
  display: flex
  align-items: flex-end

  &:last-child
    text-align: right

  &-num
    font-size: 20px

    @media (max-width: 1199px)
      font-size: 18px

  &-text
    padding-left: 2px
    padding-bottom: 3px
    font-size: 13px
    color: rgba(#ffffff, 0.75)

    @media (max-width: 1199px)
      padding-bottom: 1.5px
      font-size: 12px

.lang
  display: flex
  width: 70px
  justify-content: space-between

  div
    cursor: pointer
    opacity: 0.5

    &.active
      font-weight: bold
      opacity: 1

.card-small
  margin-top: 12px
  padding: 12px 16px
  background: url('/src/assets/gradient-2.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 8px
  min-height: 98px
  display: flex
  flex-direction: column
  justify-content: space-between

  &-title
    font-size: 13px

  &-info
    display: flex
    justify-content: space-between
    align-items: center

    @media (max-width: 1199px)
      flex-direction: column
      align-items: flex-start

  &-pic
    width: 20px
    height: 20px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

    @media (max-width: 1199px)
      display: none

    &--margin
      width: 16px
      height: 16px
      margin-bottom: 3px

    &--wind
      background-image: url('/src/assets/gusts.svg')

    &--pressure
      background-image: url('/src/assets/humidity.svg')

    &--sun
      background-image: url('/src/assets/cloud.svg')

  &-data
    display: flex
    align-items: flex-end
    width: 45%

    @media (max-width: 1199px)
      width: 100%
      padding-top: 8px

  &-hint
    width: 55%

    @media (max-width: 1199px)
      width: 100%

  &-text
    font-size: 11px
    line-height: 1.2
    color: rgba(#ffffff, 0.6)

    @media (max-width: 1199px)
      min-height: 22px
      font-size: 9px
</style>
