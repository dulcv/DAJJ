<template>
  <div class="text-center py-12">

    <div class="swiper-container coverflow-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, i) in images" :key="i">
          <img :src="image" class="carousel-img" />
        </div>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, EffectCoverflow])

export default {
  name: 'ImageCarousel',
  data() {
    return {
      images: [
        '/imagen1.png',
        '/imagen2.png',
        '/imagen3.png',
        '/imagen4.png'
      ]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style scoped>
.coverflow-swiper {
  width: 95%;
  max-width: 1000px;
  margin: auto;
}
.carousel-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.swiper-slide {
  width: 300px;
}
</style>
