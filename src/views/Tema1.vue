<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transporte

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s5
          p.mb-0 El transporte constituye un pilar esencial en la dinámica económica y social, ya que posibilita la conexión entre territorios, personas y mercados. Comprender sus fundamentos permite analizar cómo los flujos de bienes y servicios generan valor en la cadena de suministro y contribuyen al logro de objetivos estratégicos en las organizaciones.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
