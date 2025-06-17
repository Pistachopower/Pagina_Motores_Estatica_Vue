<script setup>
const preguntas = [
  {
    pregunta: "¿Qué tipo de piezas venden?",
    titulo: "Piezas de calidad:",
    respuesta:
      "Vendemos piezas de segunda mano comprobadas, incluyendo cajas de cambio, kits airbag, motores y otros componentes esenciales.",
  },
  {
    pregunta: "¿Realizan envíos a la Península?",
    titulo: "Envíos seguros:",
    respuesta:
      "Sí, enviamos a las Islas Canarias y también a toda la Península con opciones seguras y seguimiento del pedido.",
  },
  {
    pregunta: "¿Cómo garantizan la calidad de las piezas?",
    titulo: "Control de calidad:",
    respuesta:
      "Cada pieza pasa por rigurosos controles de calidad y comprobaciones para asegurar su buen funcionamiento y seguridad.",
  },
  {
    pregunta: "¿Puedo devolver una pieza si no funciona?",
    titulo: "Devoluciones claras:",
    respuesta:
      "Ofrecemos políticas claras de devolución. Si la pieza presenta algún defecto, contacta con nuestro servicio de atención para gestionar la devolución.",
  },
];
</script>

<template>
  <section class="container py-5">
    <h2 class="mb-4 text-center">Preguntas Frecuentes</h2>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-10 col-lg-8">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item" v-for="(item, index) in preguntas" :key="index">
            <h2 class="accordion-header" :id="'heading' + index">
              <button
                class="accordion-button"
                :class="{ collapsed: index !== 0 }"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + index"
                :aria-expanded="index === 0 ? 'true' : 'false'"
                :aria-controls="'collapse' + index"
              >
               <strong>{{ item.pregunta }}</strong> 
              </button>
            </h2>
            <div
              :id="'collapse' + index"
              class="accordion-collapse collapse"
              :class="{ show: index === 0 }"
              :aria-labelledby="'heading' + index"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>{{ item.titulo }}</strong> {{ item.respuesta }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<style scoped>

.accordion-button:not(.collapsed) {
  background-color: #e5e1e0; 
  color: #000; /* Color del texto */
}


.accordion-button:focus {
    box-shadow: 0 0 0 0.25rem rgba(219, 213, 212, 0.5); /* Misma gama del fondo */
 
}
</style>




