<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas de monitoreo

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s5
          p.mb-0 Las herramientas de monitoreo en logística son sistemas y tecnologías que permiten recopilar, analizar y visualizar datos en tiempo real sobre los procesos de la cadena de suministro. Su objetivo es proporcionar una visibilidad completa de las operaciones, desde el origen de las materias primas hasta la entrega del producto final al cliente. Estas herramientas son esenciales para la toma de decisiones proactiva, la optimización de recursos y la mejora continua del servicio.

    Separador
    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.1 Concepto

    .row.justify-content-center.align-items-center
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema4/2.png", alt="Imagen decorativa")
      .col-lg-9
        .cajon.color-secundario.p-4
          p.mb-0 Las herramientas de monitoreo son sistemas que integran hardware y software para recopilar, procesar y mostrar información en tiempo real sobre la ubicación, el estado y el desempeño de los activos de transporte. Su función principal es brindar trazabilidad y visibilidad integral, permitiendo a los gestores identificar cuellos de botella, anticipar retrasos y actuar de manera proactiva. Gracias a estas herramientas, es posible optimizar recursos, responder oportunamente a incidentes y ofrecer un servicio más confiable y competitivo.

    Separador
    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.2 Tipos

    .p-4.py-3.rounded-end-5.rounded-bottom-0.bg-color-secundario-s5.mb-4
      p.mb-0 Las herramientas de monitoreo abarcan diferentes sistemas y tecnologías diseñados para supervisar, controlar y optimizar cada fase de la cadena de suministro. Cada tipo cumple un rol específico y complementario, aportando visibilidad, eficiencia y seguridad en las operaciones logísticas.

    TabsB.color-acento-contenido
      .py-4.py-md-5.bg-color-secundario-s5(titulo="Sistemas de gestión de almacenes (WMS)" :icono="require('@/assets/curso/temas/tema4/3.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-6.mb-4.mb-md-0
            h4 Sistemas de gestión de almacenes (WMS)
            p <em>Software</em> que organiza y controla las operaciones de un almacén: recepción, inventario, preparación de pedidos y despacho. Facilita la visibilidad del <em>stock</em>, la ubicación de productos y la eficiencia de los operarios.
        
          .col-11.col-md-5.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema4/8.png', alt='Imagen ilustrativa' data-aos="fade-down")

      .py-4.py-md-5.bg-color-secundario-s5(titulo="Sistemas de gestión de transporte (TMS)" :icono="require('@/assets/curso/temas/tema4/4.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-6.mb-4.mb-md-0
            h4 Sistemas de gestión de transporte (TMS)
            p <em>Software</em> que planifica y optimiza el transporte, monitoreando rutas, desempeño de transportistas, costos de flete y estado de las entregas.
        
          .col-11.col-md-5.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema4/9.png', alt='Imagen ilustrativa' data-aos="fade-down")

      .py-4.py-md-5.bg-color-secundario-s5(titulo="Sistemas de rastreo y telemetría" :icono="require('@/assets/curso/temas/tema4/5.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-6.mb-4.mb-md-0
            h4 Sistemas de rastreo y telemetría
            p Tecnologías como GPS, RFID e IoT que permiten rastrear vehículos y activos. La telemetría recopila datos clave del vehículo (combustible, velocidad, temperatura, entre otros) para análisis detallado.
        
          .col-11.col-md-5.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema4/10.png', alt='Imagen ilustrativa' data-aos="fade-down")

      .py-4.py-md-5.bg-color-secundario-s5(titulo="Torres de control logístico" :icono="require('@/assets/curso/temas/tema4/6.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-6.mb-4.mb-md-0
            h4 Torres de control logístico
            p Plataformas que integran información de diferentes fuentes (WMS, TMS o transportistas). Proporcionan una visión global de la cadena de suministro y facilitan decisiones centralizadas.
        
          .col-11.col-md-5.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema4/11.png', alt='Imagen ilustrativa' data-aos="fade-down")

      .py-4.py-md-5.bg-color-secundario-s5(titulo="Tecnologías de sensores" :icono="require('@/assets/curso/temas/tema4/7.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-6.mb-4.mb-md-0
            h4 Tecnologías de sensores
            p Dispositivos que miden temperatura, humedad o golpes en contenedores y paquetes. Son esenciales para garantizar la integridad de productos sensibles como alimentos o medicamentos.
        
          .col-11.col-md-5.col-xl-4
            figure
              img(src='@/assets/curso/temas/tema4/12.png', alt='Imagen ilustrativa' data-aos="fade-down")

    Separador
    #t_4_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.3 Características

    p.mb-4.mb-lg-5 Las herramientas de monitoreo en logística cuentan con atributos que potencian la eficiencia operativa y facilitan el control integral de la cadena de suministro. Estas características permiten a las organizaciones trabajar con mayor precisión, coordinación y capacidad de respuesta.

    .row.justify-content-center.align-items-center
      .col-xl-3.d-none.d-xl-block
        figure
          img(src="@/assets/curso/temas/tema4/13.png", alt="Imagen decorativa" data-aos="zoom-in-left")
      .col-xl-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Datos en tiempo real")
            .col-md-10.mb-4.mb-md-0
              p Brindan información inmediata sobre la ubicación, estado y rendimiento de los activos, favoreciendo una reacción ágil ante situaciones operativas.
          .row(titulo="Integración")
            .col-md-10.mb-4.mb-md-0
              p Se enlazan con otros sistemas (ERP, WMS o TMS) para conformar un ecosistema de datos unificado y con mayor visibilidad.
          .row(titulo="Análisis y reportes")
            .col-md-10.mb-4.mb-md-0
              p Procesan los datos para generar métricas, tendencias y KPIs, aportando información clave para la mejora continua.
          .row(titulo="Alertas y notificaciones")
            .col-md-10.mb-4.mb-md-0
              p Envían avisos automáticos frente a desviaciones relevantes como retrasos, variaciones de temperatura o exceso de velocidad.
          .row(titulo="Interfaz")
            .col-md-10.mb-4.mb-md-0
              p Presentan la información en paneles o <em>dashboards</em> visuales, con gráficos y mapas que facilitan la comprensión y la toma de decisiones.
          .row(titulo="Escalabilidad")
            .col-md-10.mb-4.mb-md-0
              p Se ajustan al crecimiento de las operaciones, integrando más vehículos, almacenes o rutas según lo requiera la empresa.
        
    .p-4.py-3.rounded-end-5.rounded-bottom-0.bg-color-secundario-s5.mb-4
      p.mb-0 Estas características fortalecen la capacidad de gestión logística, promoviendo operaciones más seguras, ágiles y competitivas en el mercado.



</template>

<script>
export default {
  name: 'Tema4',
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
