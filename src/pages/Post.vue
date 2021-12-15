<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <q-btn color="secondary" label="Volver" @click="volver" class="q-my-sm"></q-btn>
        <q-icon size="xl" name="img:icons/twitter.png" class="cursor-pointer float-right q-mr-md" @click="twitter" />
      </div>
    </div>
  </q-page>
</template>
<script>
import { openURL } from 'quasar'
import { stories } from "../store/blog.json";
export default {
  props: ["markdown"],
  data() {
    return {
      post: "",
      web: '',
      categorias: ''
    };
  },
  watch: {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    volver() {
      this.$router.push({ path: '/' });
    },
    twitter() {
      let url = `http://twitter.com/share?url=${this.web}&hashtags=${this.categorias}&via=clonbg1`
      console.log(url)
      openURL(url)
    }
  },
  created() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    this.scrollToTop();
    this.web = window.location.href.replace('#', '%23')
    let item = stories.find(element => element.id == this.$route.params.markdown);
    let itemtags = item.categorias
    this.categorias = itemtags.toString()
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
