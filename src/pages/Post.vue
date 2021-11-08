<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <div v-if="comentarios">
          <!-- Unas clases condicionales.... -->
          <h5>Comentarios</h5>
          <q-list
            class="rounded-borders"
            v-for="item in comentarios"
            :key="item.id"
          >
            <q-item clickable v-ripple class="q-my-lg comment">
              <q-item-section avatar>
                <q-avatar>
                  <span class="material-icons full-width">
                    account_circle
                  </span>
                </q-avatar>
              </q-item-section>
              <!-- Si es hijo de otro... -->
              <q-item-section>
                <q-item-label lines="1">{{ item.author }}</q-item-label>
                <q-item-label caption lines="2">
                  <span class="text-weight-bold"></span>
                  {{ item.message }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div v-else>Por que?</div>
        {{ comentarios }}
        <br />
        <q-btn color="secondary" label="Volver" @click="volver"> </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["markdown"],
  data() {
    return {
      post: "",
      comentarios: [],
      text: ref(""),
      dense: ref(false),
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
    async cargarComentarios() {
      let response = await this.$axios.get(
        "https://glosaclonbg.ignorelist.com/api/v1/comments/?url=https://glosa.example/best-SO/"
      );
      this.comentarios = response.data;
      console.log(this.comentarios);
    },
  },
  async mounted() {
    const texto = require(`../markdowns/stories/${this.$route.params.markdown}.md`);
    this.post = texto.default;
    await this.cargarComentarios();
    this.scrollToTop();
  },
};
</script>

<style scoped>
.comment {
  border-left: 3px solid blue;
  background-color: lightgrey;
}
</style>
