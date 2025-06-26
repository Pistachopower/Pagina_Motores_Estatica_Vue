<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Motores, CajasCambio, Airbags } from '@/data/productos.js'
import ProductosRelacionados from '@/components/ProductosRelacionados.vue'

const route = useRoute()
const tipo = ref(route.params.tipo)
const id = ref(parseInt(route.params.id))

const producto = ref(null)

function buscarProducto() {
  if (tipo.value === 'motor') {
    producto.value = Motores.find(p => p.id === id.value)
  } else if (tipo.value === 'caja' || tipo.value === 'cajaCambios') {
    producto.value = CajasCambio.find(p => p.id === id.value)
  } else if (tipo.value === 'airbag') {
    producto.value = Airbags.find(p => p.id === id.value)
  }
}

// Inicial
buscarProducto()

// Observa cambios en la ruta
watch(
  () => [route.params.tipo, route.params.id],
  ([nuevoTipo, nuevoId]) => {
    tipo.value = nuevoTipo
    id.value = parseInt(nuevoId)
    buscarProducto()
  }
)
</script>

<template>
 <div class="container py-5">
  <!-- SECCIÓN 1: Detalle del producto -->
  <section class="mb-5" v-if="producto">
     <div class="container py-5" v-if="producto">
        <div class="row g-5">

          <!-- COLUMNA IZQUIERDA: Carrusel de imágenes -->
          <div class="col-md-6">
            <div class="bg-white rounded shadow-sm p-3 border">
              <div
                v-if="producto.imagenes && producto.imagenes.length > 0"
                id="carouselProducto"
                class="carousel slide"
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
            </div>
          </div>
        
          <!-- COLUMNA DERECHA: Información del producto -->
          <div class="col-md-6">
            <div class="bg-white rounded p-4 shadow-sm border">
              <h2 class="fw-bold mb-3">{{ producto.motor || producto.cajaCambios || producto.airbag }}</h2>
              <p class="text-muted mb-2">{{ producto.descripcion }}</p>
              <h4 class="fw-bold mb-4">
                {{ producto.precio ? '€' + producto.precio : 'Consultar precio' }}
              </h4>
            
              <ul class="list-unstyled">
                <li v-if="producto.cilindrada"><strong>Cilindrada:</strong> {{ producto.cilindrada }}</li>
                <li v-if="producto.tipoCombustible"><strong>Combustible:</strong> {{ producto.tipoCombustible }}</li>
                <li v-if="producto.potenciaEstimada"><strong>Potencia:</strong> {{ producto.potenciaEstimada }}</li>
                <li v-if="producto.stock !== undefined"><strong>Stock:</strong> {{ producto.stock }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Producto no encontrado -->
      <div v-else class="container py-4">
        <div class="alert alert-danger">Producto no encontrado.</div>
      </div>
  </section>

  <!-- Si no hay producto -->
  <div v-else class="alert alert-danger">Producto no encontrado.</div>

  <!-- SECCIÓN 2: Productos relacionados -->
  <section class="bg-light rounded p-4 mb-5">
  <ProductosRelacionados :tipo="tipo" :idActual="id" />
  </section>

  <!-- SECCIÓN 3: Opiniones -->
  <section class="bg-light rounded p-4">
  <h3 class="fw-bold mb-4 text-center">Opiniones</h3>
  <div class="text-center text-muted">Aquí irán las opiniones de clientes</div>
  </section>
</div>

</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.5);
}

.carousel-item img {
  border-radius: 0.5rem;
}
</style>
