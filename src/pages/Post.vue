<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <!-- Aquí van los comentarios -->
        <br />
        <q-btn color="secondary" label="Volver" @click="volver"> </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  props: ["markdown"],
  setup() {
    return {
      post: "",
    };
  },
  watch: {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    volver() {
      this.$router.go(-1);
    },
  },
  created() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    this.scrollToTop();
  },
  mounted(){
  }
};
</script>

<style scoped></style>
