<script setup>
import { Motores, CajasCambio, Airbags } from '@/data/productos.js'
import { computed } from 'vue'

const props = defineProps({
  tipo: String,
  idActual: Number
})

const relacionados = computed(() => {
  let productos = []
    if (props.tipo === 'motor') {
      productos = Motores
    } else if (props.tipo === 'caja' || props.tipo === 'cajaCambios') {
      productos = CajasCambio
    } else if (props.tipo === 'airbag') {
      productos = Airbags
    }
  return productos.filter(p => p.id !== props.idActual)
})
</script>

<template>
  <div class="mt-5">
    <h3>Productos Relacionados</h3>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="rel in relacionados"
        :key="rel.id"
      >
        <div class="card h-100">
          <router-link :to="`/product/${rel.tipo}/${rel.id}`">
            <img
              :src="rel.imagenes ? rel.imagenes[0] : ''"
              class="card-img-top"
              :alt="rel.motor || rel.cajaCambios || rel.airbag"
              style="object-fit: cover; height: 200px;"
            />
          </router-link>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ rel.motor || rel.cajaCambios || rel.airbag }}</h5>
            <p class="card-text mb-2">{{ rel.precio ? '€' + rel.precio : 'Consultar' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>