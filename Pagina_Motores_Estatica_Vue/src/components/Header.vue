<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
        <i class="bi-tools fs-3 text-white"></i>
        <span>MotorPartsExpress</span>
      </a>

      <!-- Botón colapsable -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sobre nosotros</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
</style>
