<template>
  <v-container class="text-center">
    <div class="carousel-wrapper">
      <v-btn icon @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <div class="carousel">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="getPosition(index)"
        >
          <v-img
            :scr="image"
            height="250"
            width="auto"
            class="rounded"
            contain
          />
        </div>
      </div>
      <v-btn icon @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>

import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      current: 0,
      images: [
        '/static/imagen1.png',
        '/static/imagen1.png',
        '/static/imagen1.png',
        '/static/imagen1.png',
        '/static/imagen1.png'
      ],
      intervaliId: null
    }
  },
  mounted () {
    this.startAutoplay()
  },

  beforeDestroy () {
    clearInterval(this.intervalId)
  },
  methods: {
    startAutoplay () {
      this.intervalId = setInterval(() => {
        this.next()
      }, 4000) // Cambia de imagen cada 4 segundos
    },
    next () {
      this.current = (this.current + 1) % this.images.length
    },
    pre () {
      this.current =
        (this.current - 1 + this.images.length) % this.images.length
    },
    getPosition (index) {
      if (index === this.current) {
        return 'center'
      } else if (
        index ===
        (this.current - 1 + this.images.length) % this.images.length
      ) {
        return 'left'
      } else if (index === (this.current + 1) % this.images.length) {
        return 'right'
      } else {
        return 'hidden'
      }
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 90%;
  max-width: 1000px;
  position: relative;
  height: 300px;
}

.carousel-item {
  transition: all 0.4s ease;
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.carousel-item.center {
  transform: scale(1);
  z-index: 3;
  opacity: 1;
  pointer-events: auto;
}

.carousel-item.left {
  transform: translateX(-150px) scale(0.8);
  z-index: 2;
  opacity: 0.6;
}

.carousel-item.right {
  transform: translateX(150px) scale(0.8);
  z-index: 2;
  opacity: 0.6;
}

.carousel-item.hidden {
  opacity: 0;
  z-index: 1;
}
</style>
