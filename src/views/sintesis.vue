<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p El componente formativo “Planeación y evaluación de procesos operativos en transporte” permite comprender la gestión logística aplicada al transporte, desde su conceptualización hasta el uso de herramientas de monitoreo que optimizan la cadena de suministro. Aborda el estudio del transporte, sus tipos, características, normativa y objetivos organizacionales, para luego profundizar en los indicadores de gestión como base para medir y mejorar el desempeño.
        p.mb-4.mb-lg-5 También desarrolla los procesos de monitoreo, sus elementos, características y pasos, junto con las herramientas disponibles y su aporte a la trazabilidad, integración y análisis de datos. En conjunto, estas temáticas brindan una visión integral para la toma de decisiones, la eficiencia operativa y la competitividad del sector.
      .col-sm-9.col-lg-5
        figure
          img(src='@/assets/curso/1.png', alt='Imagen decorativa', data-aos="fade-down")

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Planeación y evaluación de procesos operativos en transporte” ofrece una aproximación integral a la gestión del transporte y la evaluación de su desempeño. Este módulo aborda los tipos de transporte y sus características, resaltando la importancia de la normativa y políticas sectoriales para su regulación y alineación con los objetivos organizacionales, y presenta los indicadores de gestión como herramientas clave para medir la eficiencia. Asimismo, se estudian los procesos de monitoreo del transporte, que aseguran trazabilidad, visibilidad y control en tiempo real. La propuesta detalla los pasos, elementos y características necesarios para implementar un sistema de monitoreo efectivo. Además, se destacan las herramientas de monitoreo, junto con sus tipos y funcionalidades, enfatizando su papel en la optimización de recursos, la anticipación de riesgos y la mejora de la toma de decisiones en la cadena de suministro.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
