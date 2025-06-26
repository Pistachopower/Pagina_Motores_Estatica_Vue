<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import ModalAyuda from '@/components/ModalAyuda.vue'
import { ref } from 'vue'
const mostrarModalAyuda = ref(false)
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>

    <!-- Botón flotante -->
  <button
    class="btn btn-primary rounded-circle shadow"
    id="chat-fab"
    @click="mostrarModalAyuda = true"
  >
    <i class="bi bi-chat-dots-fill fs-3"></i>
  </button>

  <!-- Modal de ayuda -->
  <ModalAyuda v-model:mostrar="mostrarModalAyuda" />

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

#chat-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1050;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e53935; /* Rojo personalizado */
  color: white;
  border: none;
}


</style>
