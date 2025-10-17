<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo del transporte

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema3/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s5
          p.mb-0 Es el pilar fundamental en la gestión logística moderna, que facilita la anticipación, optimiza recursos y asegura un servicio de calidad.

    Separador
    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1 Concepto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El monitoreo operacional en el transporte es la observación y seguimiento constante de todos los elementos que intervienen en el movimiento de la carga, desde el punto de origen hasta el destino final. Su propósito principal es asegurar que la operación se desarrolle según lo planificado, identificando desviaciones, riesgos o incidencias de manera proactiva para poder actuar rápidamente y minimizar su impacto.

    p.mb-4 El uso de indicadores en el transporte cumple diversos propósitos estratégicos y operativos que permiten fortalecer la gestión logística y mejorar la eficiencia en la prestación del servicio. Estos objetivos no solo apoyan el control de las operaciones, sino que también contribuyen a la seguridad, la satisfacción del cliente y la sostenibilidad de los procesos.

    .row.justify-content-center.align-items-center
      .col-xl-3.d-none.d-xl-block
        figure
          img(src="@/assets/curso/temas/tema3/3.png", alt="Imagen decorativa" data-aos="zoom-in-left")
      .col-xl-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Visibilidad en tiempo real")
            .col-md-10.mb-4.mb-md-0
              p Permite conocer la ubicación exacta de los vehículos y el estado de la mercancía.
          .row(titulo="Optimización de rutas")
            .col-md-10.mb-4.mb-md-0
              p Facilita el ajuste de trayectorias frente a eventos inesperados como tráfico o cierres de vías.
          .row(titulo="Seguridad de la carga y el personal")
            .col-md-10.mb-4.mb-md-0
              p Detecta riesgos como detenciones no programadas o desvíos.
          .row(titulo="Cumplimiento de tiempos de entrega")
            .col-md-10.mb-4.mb-md-0
              p Garantiza el respeto a los plazos y la adecuada gestión de expectativas del cliente.
          .row(titulo="Reducción de costos")
            .col-md-10.mb-4.mb-md-0
              p Identifica ineficiencias relacionadas con combustible, tiempos de inactividad u otros recursos.
          .row(titulo="Mejora de la comunicación")
            .col-md-10.mb-4.mb-md-0
              p Favorece la interacción entre conductores, personal operativo y clientes.

    Separador
    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2 Elementos

    p.mb-4 Un sistema de monitoreo de transporte eficiente integra múltiples componentes tecnológicos y operativos que permiten supervisar, controlar y optimizar los procesos logísticos. Cada elemento cumple un papel específico para garantizar la seguridad, eficiencia y confiabilidad de la operación:

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/4.png', alt='Imagen ilustrativa' data-aos='fade-up')
      .col-lg-8.p-3.p-md-4.bg-slider.rounded-3
        .tarjeta.tarjeta--blanca.p-4.pt-lg-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 GPS y sensores IoT
                p.mb-4.mb-lg-0 Rastreo en tiempo real y monitoreo de condiciones de la carga.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 Plataforma de gestión (FMS)
                p.mb-4.mb-lg-0 Integración de datos, paneles de control, alertas y reportes.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/6.png', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 Comunicación y movilidad
                p.mb-4.mb-lg-0 Interacción con conductores y acceso desde dispositivos móviles.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/7.png', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 Análisis de datos e IA
                p.mb-4.mb-lg-0 Optimización de rutas y predicción de problemas.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/8.png', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 Integración con otros sistemas
                p.mb-4.mb-lg-0 Conexión con WMS, ERP y gestión de pedidos.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/9.png', alt='Imagen ilustrativa')

            .row.align-items-center.justify-content-center
              .col-sm-10.col-lg-5
                h5.mb-4 Alertas y precisión
                p.mb-4.mb-lg-0 Notificaciones automáticas y datos confiables para decisiones oportunas.
              .col-sm-8.col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema3/10.png', alt='Imagen ilustrativa')

    Separador
    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3 Características

    .p-4.py-3.rounded-end-5.rounded-bottom-0.bg-color-secundario-s5.mb-4
      p.mb-0 El monitoreo de transporte permite a las organizaciones optimizar rutas, garantizar la seguridad de la carga y mejorar la eficiencia operativa mediante sistemas inteligentes de rastreo, automatización y análisis de datos:

    .p-3.p-md-5.bg-slider.rounded-3
      .tarjeta.tarjeta--blanca.p-4.pt-lg-5
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Rastreo en tiempo real y geolocalización precisa
              p.mb-3 <strong>Visibilidad completa</strong>: conoce la ubicación exacta y el estado de los vehículos o la carga en cualquier momento mediante GPS, IoT y telemetría.
              p <strong>Mapeo en vivo</strong>: representa rutas en un mapa digital, facilitando la supervisión y la detección de retrasos o desviaciones.              
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/11.png', alt='Imagen ilustrativa')

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Automatización y notificaciones inteligentes.
              p.mb-3 <strong>Geocercas</strong>: crea límites virtuales alrededor de áreas críticas; envía alertas automáticas al entrar o salir de ellas.
              p <strong>Alertas personalizadas</strong>: notificaciones automáticas sobre exceso de velocidad, paradas no planificadas, desvíos o comportamientos de conducción bruscos.
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/12.png', alt='Imagen ilustrativa')

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Optimización de rutas y eficiencia operativa.
              p.mb-3 <strong>Planificación de rutas</strong>: calcula trayectos más eficientes considerando tráfico, clima y puntos de entrega, reduciendo tiempo y combustible.
              p <strong>Análisis predictivo</strong>: predice retrasos y problemas en ruta, permitiendo tomar decisiones preventivas.
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/13.png', alt='Imagen ilustrativa')
                
          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Recopilación de datos y generación de reportes.
              p.mb-3 <strong>Telemetría</strong>: registra consumo de combustible, RPM, inactividad, aceleraciones y frenadas bruscas, útil para mantenimiento y evaluación de conductores.
              p <strong>Informes detallados</strong>: genera reportes sobre rendimiento de la flota, historial de recorridos y productividad.
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/14.png', alt='Imagen ilustrativa')

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Seguridad y control.
              p.mb-3 <strong>Mayor seguridad</strong>: localización rápida ante robos o emergencias; promueve conducción segura mediante monitoreo del comportamiento del conductor.
              p <strong>Transparencia</strong>: prueba electrónica de entrega (POD) con fotos y firmas, aumentando confianza y veracidad de la entrega.
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/15.png', alt='Imagen ilustrativa')

          .row.align-items-center.justify-content-center
            .col-sm-10.col-lg-7.col-xl-6
              h5.mb-4 Integración y comunicación.
              p.mb-3 <strong>Integración con otros sistemas</strong>: conecta con WMS o TMS, ofreciendo una visión completa de la cadena de suministro.
              p <strong>Comunicación fluida</strong>: facilita el contacto inmediato entre central, conductor y cliente; actualizaciones en tiempo real mejoran la experiencia del cliente.
            .col-sm-8.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/temas/tema3/16.png', alt='Imagen ilustrativa')

    Separador
    #t_3_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.4 Pasos

    .p-4.py-3.rounded-end-5.rounded-bottom-0.bg-color-secundario-s5.mb-4
      p.mb-0 La implementación de un sistema de monitoreo permite optimizar la operación del transporte, mejorar la eficiencia y aumentar la seguridad, mediante un proceso planificado, el uso de tecnología adecuada y la participación del personal.

    .row.justify-content-center.z-2
      .col-xl-10
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Definición de objetivos y KPIs
            p Establecer indicadores medibles que permitan evaluar el desempeño del transporte, como entregas a tiempo, consumo de combustible y tiempos de respuesta a incidentes.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/17.svg', alt='Imagen decorativa', data-aos="fade-down")

        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/18.svg', alt='Imagen decorativa', data-aos="fade-down")
          .col-md-8.text-start
            h4 Selección de la tecnología adecuada
            p Elegir herramientas de hardware (GPS o sensores) y software (plataformas) que se ajusten a las necesidades y presupuesto, asegurando compatibilidad e integración con sistemas existentes.

        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Instalación y configuración
            p Colocar los dispositivos de seguimiento en los vehículos y configurar la plataforma con geocercas, puntos de interés y reglas de alerta.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/19.svg', alt='Imagen decorativa', data-aos="fade-down")

        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/20.svg', alt='Imagen decorativa', data-aos="fade-down")
          .col-md-8.text-start
            h4 Capacitación del personal
            p Entrenar a operadores, conductores y personal de despacho en el uso del sistema y en protocolos de respuesta, promoviendo la cultura de aprovechamiento de la tecnología.

        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Establecimiento de protocolos de respuesta
            p Definir procedimientos claros para responder a alertas o incidentes, y asegurar una comunicación eficiente entre todos los involucrados.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/21.svg', alt='Imagen decorativa', data-aos="fade-down")

        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/22.svg', alt='Imagen decorativa', data-aos="fade-down")
          .col-md-8.text-start
            h4 Monitoreo continuo y análisis de datos
            p Supervisar las operaciones en tiempo real y analizar los informes generados para identificar tendencias, evaluar desempeño y detectar oportunidades de mejora.
            
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Iteración y mejora continua
            p Evaluar periódicamente el sistema, ajustar configuraciones y protocolos, y actualizarse con nuevas tecnologías para optimizar el proceso de manera constante.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/23.svg', alt='Imagen decorativa', data-aos="fade-down")
    .fullwidth-bg.fullwidth-bg--2



</template>

<script>
export default {
  name: 'Tema3',
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
