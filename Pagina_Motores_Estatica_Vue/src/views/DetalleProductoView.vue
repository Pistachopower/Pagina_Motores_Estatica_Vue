<script setup>
import { useRoute } from 'vue-router'
import { Motores, CajasCambio, Airbags } from '@/data/productos.js'

const route = useRoute()
const tipo = route.params.tipo
const id = parseInt(route.params.id)

let producto = null
if (tipo === 'motor') {
  producto = Motores.find(p => p.id === id)
} else if (tipo === 'caja') {
  producto = CajasCambio.find(p => p.id === id)
} else if (tipo === 'airbag') {
  producto = Airbags.find(p => p.id === id)
}
</script>

<template>
  <div class="container py-4" v-if="producto">
    <!-- Carrusel de imágenes Bootstrap -->
    <div
      v-if="producto.imagenes && producto.imagenes.length > 0"
      id="carouselProducto"
      class="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(img, idx) in producto.imagenes"
          :key="idx"
          :class="['carousel-item', { active: idx === 0 }]"
        >
          <img :src="img" class="d-block w-100" style="max-height: 400px; object-fit: contain;" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProducto"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselProducto"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    <!-- Detalle del producto -->
    <div class="card p-4 shadow-sm">
      <h2 class="mb-3">
        {{ producto.motor || producto.cajaCambios || producto.airbag }}
      </h2>
      <p class="mb-2 text-muted">{{ producto.descripcion }}</p>
      <h4 class="mb-3 text-success">
        Precio: {{ producto.precio ? '€' + producto.precio : 'Consultar' }}
      </h4>
      <ul class="list-unstyled mb-0">
        <li v-if="producto.cilindrada"><strong>Cilindrada:</strong> {{ producto.cilindrada }}</li>
        <li v-if="producto.tipoCombustible"><strong>Combustible:</strong> {{ producto.tipoCombustible }}</li>
        <li v-if="producto.potenciaEstimada"><strong>Potencia:</strong> {{ producto.potenciaEstimada }}</li>
        <li v-if="producto.stock !== undefined"><strong>Stock:</strong> {{ producto.stock }}</li>
      </ul>
    </div>
  </div>
  <div v-else>
    <div class="container py-4">
      <div class="alert alert-danger">Producto no encontrado.</div>
    </div>
  </div>
</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.5);
}
</style>