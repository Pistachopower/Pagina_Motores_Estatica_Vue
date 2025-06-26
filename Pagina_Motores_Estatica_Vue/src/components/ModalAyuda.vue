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
          <router-link to="/about#preguntas-frecuentes" class="btn-rojo">
            Preguntas Frecuentes
          </router-link>
          <router-link to="/#formulario-contacto" class="btn-rojo">
            <i class="bi bi-envelope me-2"></i> Formulario de Contacto
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal.fade {
  background: rgba(247, 245, 245, 0.705);
}

.btn-rojo {
  display: inline-block;
  background-color: #ec192e;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.btn-rojo:hover {
  background-color: #ec192e;
}
</style>