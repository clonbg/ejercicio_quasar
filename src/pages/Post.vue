<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <div id="disqus_thread"></div>
        <noscript
          >Please enable JavaScript to view the
          <a href="https://disqus.com/?ref_noscript"
            >comments powered by Disqus.</a
          ></noscript
        >
        <br />
        <q-btn color="secondary" label="Volver" @click="volver"> </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  props: ["markdown"],
  data() {
    return {
      post: "",
    };
  },
  watch: {
   url(value) {
      this.$refs.disqus.reset(window.DISQUS)
   }
},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    volver() {
      this.$router.go(-1);
    },
    montarDisqus() {
      /**
       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
       window.DISQUS.reset({
   reload: true,
   config: function() {
      this.page.identifier = window.location.origin + '/#!' + this.$route.path
   this.page.url = window.location.origin + '/#!' + this.$route.path
   }
});
      console.log(window.location.origin + '/#!' + this.$route.path)

      (function () {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
          s = d.createElement("script");
        s.src = "https://clonbg.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    },
  },
  created() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    // console.log(this.$route.params.markdown);
    this.scrollToTop();
    // console.log(this.$route.path)
    this.montarDisqus();
  },
};
</script>

<style scoped></style>
