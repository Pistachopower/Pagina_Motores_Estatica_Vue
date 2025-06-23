<script setup>
import { ref, computed } from 'vue'
import { Motores, CajasCambio, Airbags } from '@/data/productos.js'

const busqueda = ref('')

// Unimos los tres arrays y agregamos un campo "tipo" para diferenciarlos
const todosLosProductos = [
  ...Motores.map(p => ({ ...p, tipo: 'motor' })),
  ...CajasCambio.map(p => ({ ...p, tipo: 'caja' })),
  ...Airbags.map(p => ({ ...p, tipo: 'airbag' })),
];

//console.log(todosLosProductos)

//devuelve solo los que coinciden con la búsqueda
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
        <!-- Usamos producto.tipo + '-' + producto.id para crear un id único y 
         que no haya errores de visualizacion a la hora de pintar los elementos
         -->
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="producto in productosFiltrados" 
          :key="producto.tipo + '-' + producto.id" 
        >
          <div class="card h-100 shadow-sm">
          
            <!--Enlace-->
        <router-link :to="`/product/${producto.tipo}/${producto.id}`">
          <img
            :src="producto.imagenes ? producto.imagenes[0] : ''"
            class="card-img-top"
            :alt="producto.motor || producto.cajaCambios || producto.airbag"
            style="object-fit: cover; height: 200px;"
          />
        </router-link>


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

    <!-- Sección de garantía y compromiso -->
  <section class="py-5">
    <div class="container">
      <!-- Section Header -->
      <h2 class="fw-bold mb-4 border-bottom border-4 pb-2 border-danger">
        Compromiso y Garantía 
      </h2>

      <!-- Features Grid -->
      <div class="row gy-4">
        <div class="col-12 col-md-4">
          <div class="card border-0 h-100 shadow-sm">
            <div class="card-body d-flex">
              <!-- Icono Circular -->
              <div
              class="icono-circular me-3"
              >
                <i class="bi bi-cash-coin text-danger fs-4"></i>
              </div>
              <div>
                <h5 class="text-secondary fw-semibold mb-2">MEJOR PRECIO</h5>
                <p class="mb-0 text-body-secondary">
                  MotorPartsExpress le ofrece los precios más atractivos y los Recambios de mejor calidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pago Seguro -->
        <div class="col-12 col-md-4">
          <div class="card border-0 h-100 shadow-sm">
            <div class="card-body d-flex">
              <div
                class="d-flex align-items-center justify-content-center me-3"
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  border: 2px solid red;
                  background-color: #f8f9fa;
                "
              >
                <i class="bi bi-credit-card text-danger fs-4"></i>
              </div>
              <div>
                <h5 class="text-secondary fw-semibold mb-2">PAGO SEGURO</h5>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <img
                    src="/src/assets/payment.png"
                    alt="Métodos de pago seguros"
                    width="120"
                    height="auto"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Entrega a Tiempo -->
        <div class="col-12 col-md-4">
          <div class="card border-0 h-100 shadow-sm">
            <div class="card-body d-flex">
              <div class="icono-circular me-3">
                <i class="bi bi-truck text-danger fs-4"></i>
              </div>
              <div>
                <h5 class="text-secondary fw-semibold mb-2">ENTREGA A TIEMPO</h5>
                <p class="mb-0 text-body-secondary">
                  Plazo máximo entre la recepción del pedido y su entrega entre 24h. y 72h. con su agencia de transportes.
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
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

.icono-circular {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid red;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* importante para que no se deforme */
}
</style>