<script setup>
import { ref, computed } from 'vue'
import { Motores, CajasCambio, Airbags } from '@/data/productos.js'

const busqueda = ref('')

// Unimos los tres arrays y agregamos un campo "tipo" para diferenciarlos
const todosLosProductos = [
  ...Motores.map(p => ({ ...p, tipo: 'motor' })),
  ...CajasCambio.map(p => ({ ...p, tipo: 'caja' })),
  ...Airbags.map(p => ({ ...p, tipo: 'airbag' })),
]

// Filtramos según el texto de búsqueda en los campos relevantes
const productosFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase()
  return todosLosProductos.filter((p) =>
    (p.motor?.toLowerCase().includes(texto) ||
     p.cajaCambios?.toLowerCase().includes(texto) ||
     p.airbag?.toLowerCase().includes(texto) ||
     p.descripcion?.toLowerCase().includes(texto))
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
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="producto in productosFiltrados"
          :key="producto.tipo + '-' + producto.id"
        >
          <div class="card h-100 shadow-sm">
            <img
              :src="producto.imagen"
              class="card-img-top"
              :alt="producto.motor || producto.cajaCambios || producto.airbag"
              style="object-fit: cover; height: 200px;"
            />
            <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 class="card-title">
                {{ producto.motor || producto.cajaCambios || producto.airbag }}
              </h5>
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