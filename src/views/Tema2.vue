<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicadores de Gestión

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores de gestión (o KPIs, por sus siglas en inglés: Key Performance Indicators) son herramientas de medición cuantitativa que permiten evaluar el desempeño y el resultado de los procesos logísticos de una empresa. Su objetivo principal es monitorear el cumplimiento de los objetivos estratégicos y operativos, identificar desviaciones, y tomar decisiones informadas para mejorar la eficiencia y la productividad. En logística, estos indicadores son cruciales para medir el rendimiento en áreas como el transporte, el almacenamiento, el inventario, el servicio al cliente y la productividad general de la cadena de suministro.

    Separador
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1 Concepto

    img.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema2/2.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10(data-aos="fade-down")
        div.banner-text.bg-color-secundario-s5
          p.mb-0 Un indicador de gestión es una métrica específica que refleja el desempeño de un proceso dentro de la cadena de suministro. Se construye a partir de la relación entre dos o más datos que, al ser analizados en el tiempo, permiten identificar tendencias, medir avances y orientar decisiones. Por ejemplo, el porcentaje de entregas a tiempo se obtiene al relacionar las entregas realizadas dentro del plazo con el total de entregas programadas, ofreciendo una visión clara de la puntualidad y eficiencia en el transporte.

    Separador
    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2 Elementos
    
    p.mb-4 Los indicadores de gestión se estructuran a partir de una serie de elementos que permiten garantizar su correcta definición, aplicación y análisis. Estos componentes facilitan la medición objetiva del desempeño, aseguran la confiabilidad de los resultados y orientan la toma de decisiones para la mejora continua.

    .row.align-items-center.justify-content-center
      .col-8.col-sm-6.col-xl-4
        figure
          img.mb-4.mb-xl-0(src='@/assets/curso/temas/tema2/3.png', alt='Imagen ilustrativa' data-aos='fade-down')
      .col-xl-8
        TabsA.color-primario
          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Fórmula de cálculo")
            h4.mb-4 Fórmula de cálculo
            p.mb-5 Ecuación matemática que permite obtener el valor del indicador.
            figure
              img(src="@/assets/curso/temas/tema2/4.png")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Unidad de medida")
            h4.mb-4 Unidad de medida
            p.mb-5 Forma en que se expresa el resultado obtenido.
            figure
              img(src="@/assets/curso/temas/tema2/5.png")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Frecuencia de medición")
            h4.mb-4 Frecuencia de medición
            p.mb-5 Periodo de tiempo en el que se recopila y analiza la información.
            figure
              img(src="@/assets/curso/temas/tema2/6.png")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Responsable")
            h4.mb-4 Responsable
            p.mb-5 Persona o equipo encargado de recopilar datos, calcular y analizar resultados.
            figure
              img(src="@/assets/curso/temas/tema2/7.png")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Meta o valor objetivo")
            h4.mb-4 Meta o valor objetivo
            p.mb-5 Valor ideal o deseado que representa un desempeño exitoso.
            figure
              img(src="@/assets/curso/temas/tema2/8.png")

          .tarjeta.bg-palmera.bg-color-secundario-s5.p-4.pt-5(titulo="Fuente de datos")
            h4.mb-4 Fuente de datos
            p.mb-5 Origen de la información necesaria para el cálculo del indicador.
            figure
              img(src="@/assets/curso/temas/tema2/9.png")


    Separador
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3 Características
    
    p.mb-4 Las características de los indicadores de gestión determinan su efectividad y confiabilidad como herramientas de medición. Al cumplir con estos atributos, los indicadores se convierten en instrumentos útiles para monitorear el desempeño, orientar la toma de decisiones y apoyar el logro de los objetivos estratégicos de la organización.

    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/10.png', alt='Imagen ilustrativa' data-aos='fade-up')
      .col-lg-8.p-3.p-md-5.bg-slider.rounded-3
        .tarjeta.tarjeta--blanca.p-4.py-5
          SlyderA(tipo="b")
            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/11.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Relevancia
                p.mb-0 Está vinculada a un objetivo estratégico y a un proceso crítico de la cadena de suministro.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/12.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Claridad
                p.mb-0 Su nombre y fórmula de cálculo resultan comprensibles para todas las partes interesadas.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/13.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Medibilidad
                p.mb-0 Los datos necesarios para su cálculo son fáciles de obtener y cuantificar.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/14.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Consistencia
                p.mb-0 Se mide de la misma manera a lo largo del tiempo, lo que facilita comparaciones y análisis de tendencias.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/15.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Oportunidad
                p.mb-0 La información generada está disponible en el momento adecuado para la toma de decisiones.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/16.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Accionabilidad
                p.mb-0 Permite definir acciones concretas de mejora a partir de los resultados obtenidos.

            .row.align-items-center.justify-content-center
              .col-sm-8.col-lg-5.col-xl-2
                figure
                  img.mb-4.mb-lg-0.w-83(src='@/assets/curso/temas/tema2/17.svg', alt='Imagen ilustrativa')
              .col-sm-10.col-lg-7.col-xl-9
                h5.mb-4 Objetividad
                p.mb-0 Se fundamenta en datos fiables que aseguran imparcialidad en la evaluación del rendimiento.

    .p-4.py-3.rounded-end-5.rounded-bottom-0.bg-color-secundario-s5.mb-4
      p.mb-0 Estas propiedades aseguran que los indicadores aporten información confiable, comprensible y alineada con los objetivos estratégicos, lo que facilita la toma de decisiones y promueve la mejora continua en los procesos organizacionales.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Características de indicadores de gestión 
        img.d-sm-none(data-aos="fade-up")(src='@/assets/curso/temas/tema2/18-mob.svg', alt='La figura define las características principales de los indicadores de gestión, resaltando que deben ser objetivos, relevantes, claros, medibles, consistentes, oportunos y accionables. Estas cualidades aseguran que los indicadores proporcionen información confiable, alineada con los objetivos estratégicos, fácil de comprender, cuantificar y comparar a lo largo del tiempo, disponible en el momento adecuado y útil para orientar acciones de mejora.')
        img.d-none.d-sm-block(data-aos="fade-up")(src='@/assets/curso/temas/tema2/18.svg', alt='La figura define las características principales de los indicadores de gestión, resaltando que deben ser objetivos, relevantes, claros, medibles, consistentes, oportunos y accionables. Estas cualidades aseguran que los indicadores proporcionen información confiable, alineada con los objetivos estratégicos, fácil de comprender, cuantificar y comparar a lo largo del tiempo, disponible en el momento adecuado y útil para orientar acciones de mejora.')
        figcaption <strong>Fuente:</strong> SENA, 2025.
</template>

<script>
export default {
  name: 'Tema2',
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
