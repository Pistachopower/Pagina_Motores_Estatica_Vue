<script>
import carousel1 from '@/assets/img/Carousel_1.jpg'
import carousel2 from '@/assets/img/Carousel_2.jpg'

export default {
  name: 'Carousel',
  data() {
    return {
      productsDestacados: [
        {
          id: 1,
          title: 'Producto 1',
          image: carousel1,
        },
        {
          id: 2,
          title: 'Producto 2',
          image: carousel2,
        },
      ]
    }
  }
}
</script>

<template>
  <div class="carousel-container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(product, index) in productsDestacados"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(product, index) in productsDestacados"
          :key="product.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
     
          <img
            :src="product.image"
            class="d-block w-100 mx-auto carousel-image"
            :alt="product.title"
          />
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <!-- <h5>{{ product.title }}</h5>
            <p>${{ product.price }}</p> -->
          </div>

        </div>
      </div>

      <!-- Controles -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>