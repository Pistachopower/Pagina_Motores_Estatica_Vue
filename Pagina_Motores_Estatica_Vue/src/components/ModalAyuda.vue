<script setup>
const mostrar = defineModel('mostrar', { type: Boolean, required: true })
function cerrar() {
  mostrar.value = false
}
</script>

<template>
  <div
    class="modal fade"
    tabindex="-1"
    :class="{ show: mostrar }"
    style="display: block;"
    v-if="mostrar"
    @click="cerrar"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">¿Necesitas ayuda?</h5>
          <button type="button" class="btn-close" @click="cerrar"></button>
        </div>
        <div class="modal-body text-center">
          <router-link to="/about#preguntas-frecuentes">
            Preguntas Frecuentes
          </router-link>
          <router-link to="/#formulario-contacto" class="btn btn-outline-success w-100">
            <i class="bi bi-envelope me-2"></i> Formulario de Contacto
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal.fade {
  background: rgba(0,0,0,0.3);
}
</style>