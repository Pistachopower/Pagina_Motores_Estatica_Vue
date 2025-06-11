<script setup>
import { ref, computed } from 'vue'
import { productos } from '@/data/productos.js'

const busqueda = ref('')

const productosFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase()
  return productos.filter((p) =>
    p.nombre.toLowerCase().includes(texto)
  )
})
</script>

<template>
  <div class="container py-4">
    <!-- Sección de búsqueda -->
    <section class="busqueda-section mb-4">
      <form @submit.prevent class="d-flex justify-content-center">
        <input
          type="text"
          class="form-control form-control-lg w-100 w-md-75"
          placeholder="Buscar productos..."
          v-model="busqueda"
        />
      </form>
    </section>

    <!-- Sección de tarjetas de productos -->
    <section class="productos-section mb-4">
      <h2 class="text-center mb-3">Tarjetas de productos</h2>
      <div class="row g-3">
        <!-- Aquí van tus tarjetas de productos -->
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="producto in productosFiltrados"
          :key="producto.id"
        >
          <div class="card h-100 shadow-sm">
            <img
              :src="producto.imagen"
              class="card-img-top"
              :alt="producto.nombre"
              style="object-fit: cover; height: 200px;"
            />
            <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Sección de condiciones de envío -->
    <section class="envios-section">
      <div class="card p-4 text-center shadow-sm">
        <h4 class="mb-2">Sobre los envíos</h4>
        <p class="mb-0">
          Aquí puedes agregar las condiciones de envío, tiempos, costos, zonas, etc.
        </p>
      </div>
    </section>
  </div>
</template>

<style>
.busqueda-section {
  /* Opcional: para diferenciar visualmente */
  /* background: #ffb3e6; */
  border-radius: 12px;
  padding: 1.5rem 1rem;
}
.productos-section {
  border-radius: 12px;
  padding: 1rem 0;
}
.envios-section {
  border-radius: 12px;
}
.producto-img {
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 8px;
  margin-bottom: 8px;
}
@media (min-width: 768px) {
  .busqueda-section,
  .productos-section,
  .envios-section {
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
  }
}
</style>