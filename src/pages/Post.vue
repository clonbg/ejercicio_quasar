<template>
  <q-page class="flex flex-center q-pt-xl">
    <div
      class="row full-width reverse-wrap q-pa-xl q-px-xl"
    >
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size:120%"></q-markdown>
        <br>
        <q-btn color="secondary" label="Volver" :to="{ path: '/'}">
            </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  props: ['markdown'],
  data() {
    return {
      post: "",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    console.log(this.$route.params.markdown)
    this.scrollToTop()
  },
};
</script>

<style scoped></style>
