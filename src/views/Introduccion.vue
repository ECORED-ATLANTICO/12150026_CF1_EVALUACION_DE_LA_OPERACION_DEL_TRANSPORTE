<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-10.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/1.png" alt="Icono decorativa" data-aos="fade-up")
      .col-lg-8
        p El componente formativo “Planeación y evaluación de procesos operativos en transporte” ofrece al aprendiz herramientas técnicas y prácticas para abordar la gestión de operaciones en el sector, desde la comprensión de los conceptos y tipos de transporte, hasta la aplicación de metodologías de planificación y control. A partir del conocimiento de la normativa vigente y los indicadores de gestión, se fortalecen las competencias para diseñar y evaluar procesos que optimicen recursos y garanticen el cumplimiento de objetivos organizacionales.
        .p-4.bg-transporte.rounded-4
          .row.justify-content-center.align-items-center
            .col-xl-10.mb-4.mb-xl-0
              p.ps-1.ps-lg-5.mb-0 Este componente también enfatiza el uso de herramientas de monitoreo, con un enfoque en la mejora continua y la competitividad de las organizaciones del transporte. Además, promueve la toma de decisiones informadas y la integración de políticas sectoriales en la operación. Así, se contribuye a la formación de profesionales capaces de responder a las necesidades del sector con eficiencia y sostenibilidad.
            .d-none.d-xl-block.col-sm-8.col-xl-2
              figure
                img.w-85(src="@/assets/curso/intro/2.svg" alt="Imagen decorativa" data-aos="fade-up")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
