<template>
  <div class="q-pa-xl">
    <h3>Consentimiento explícito</h3>
    <p><strong>En Valencia a 15 de Noviembre de 2021</strong></p>
    <p>
      Clonbg es el Responsable del tratamiento de los datos personales del
      Interesado y le informa de que estos datos se tratarán de conformidad con
      lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la
      Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), por lo que se le
      facilita la siguiente información del tratamiento:
    </p>
    <p>
      Fines y legitimación del tratamiento: mantener una relación profesional
      (por interés legítimo del responsable, art. 6.1.f GDPR) y envío de
      comunicaciones de productos o servicios (con el consentimiento del
      interesado, art. 6.1.a GDPR).
    </p>
    <p>
      Criterios de conservación de los datos: se conservarán durante no más
      tiempo del necesario para mantener el fin del tratamiento o mientras
      existan prescripciones legales que dictaminen su custodia y cuando ya no
      sea necesario para ello, se suprimirán con medidas de seguridad adecuadas
      para garantizar la anonimización de los datos o la destrucción total de
      los mismos.
    </p>
    <p>
      Comunicación de los datos: no se comunicarán los datos a terceros, salvo
      obligación legal.
    </p>
    <p>Derechos que asisten al Interesado:</p>
    <ul>
      <li>- Derecho a retirar el consentimiento en cualquier momento.</li>
      <li>
        - Derecho de acceso, rectificación, portabilidad y supresión de sus
        datos y de limitación u oposición a su tratamiento.
      </li>
      <li>
        - Derecho a presentar una reclamación ante la Autoridad de control
        (www.aepd.es) si considera que el tratamiento no se ajusta a la
        normativa vigente.
      </li>
    </ul>
    <br />
    <p>
      El Interesado consiente el tratamiento de sus datos en los términos
      expuestos: nombre y email.
    </p>
    <br />
    <q-btn color="secondary" label="Volver" @click="volver"> </q-btn>
  </div>
</template>
<script>
export default {
  setup() {},
  methods: {
    volver() {
      this.$router.go(-1);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.scrollToTop();
  },
};

</script>
