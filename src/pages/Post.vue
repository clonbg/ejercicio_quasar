<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <q-icon size="xl" name="img:icons/twitter.png" class="q-pa-md cursor-pointer" @click="twitter" /><strong>Comentar en twitter</strong>
        <br />
        <q-btn color="secondary" label="Volver" @click="volver">
        </q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'

export default {
  props: ["markdown"],
  data() {
    return {
      post: "",
      web: ''
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
    twitter() {
      let url = `http://twitter.com/share?text=&url=${this.web}&hashtags=stackoverflow,example,youssefusf&via=clonbg1`
      openURL(url)
    }
  },
  created() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    this.scrollToTop();
    this.web = window.location.href.replace('#','%23')
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
