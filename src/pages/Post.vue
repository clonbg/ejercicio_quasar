<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <section class="comments" aria-labelledby="comment">
          <h2 id="comment">Comments</h2>
          <Disqus shortname="clonbg" ref="disqus" :pageConfig="pageConfig" />
        </section>
        <br />
        <q-btn color="secondary" label="Volver" @click="volver"> </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Disqus } from "vue-disqus";
export default {
  components: {
    Disqus,
  },
  props: ["markdown"],
  data() {
    return {
      post: "",
      url: "",
      id: "",
      pageConfig: {
        url: window.location.href,
      },
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
    this.url = window.location.href;
    this.id = this.$route.path.slice(1, this.$route.path.length);
    console.log(this.id, this.url);
  },
  mounted(){
    this.$refs.disqus.reset
  }
};
</script>

<style scoped></style>
