<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <a href="http://twitter.com/share?text=Gracias%20Developando%20por%20el%20tutorial&via=Developando" target="_blank"><q-icon size="xl" name="img:icons/twitter.png" class="q-pa-md"/>Comentar en twitter</a>
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

<style scoped>
  a:link,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}
</style>
