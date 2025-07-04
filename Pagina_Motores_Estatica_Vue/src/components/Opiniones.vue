<script setup>
const props = defineProps({
  opiniones: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="opiniones-container my-4" v-if="opiniones.length">
    <h4 class="fw-bold mb-3 text-secondary border-bottom pb-2">
      <i class="bi bi-chat-left-quote-fill me-2 text-secondary"></i>
      Opiniones de otros compradores
    </h4>
    <div v-for="(op, idx) in opiniones" :key="idx" class="mb-4 border-bottom pb-3">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <span class="fw-bold">{{ op.usuario || 'Anónimo' }}</span>
        <span class="text-muted small">{{ op.fecha }}</span>
      </div>
      <div class="mb-1">
        <!--El primer v-for muestra las estrellas rellenas.-->
        <span v-for="n in op.estrellas" :key="n" class="text-warning fs-5">
          <i class="bi bi-star-fill"></i>
        </span>

        <!--El segundo v-for muestra las estrellas vacías.-->
        <span v-for="n in 5 - op.estrellas" :key="n" class="text-warning fs-5">
          <i class="bi bi-star"></i>
        </span>
      </div>
      <div v-if="op.texto" class="text-body">{{ op.texto }}</div>
    </div>
  </div>
  <div v-else class="text-muted">Este producto aún no tiene opiniones.</div>
</template>

<style>
.opiniones-container {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

</style>