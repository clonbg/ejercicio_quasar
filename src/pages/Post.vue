<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <h5>Comentarios<span class="material-icons q-pl-md q-mr-xs"> forum </span>{{comentarios.length>0 ? comentarios.length : '0' }}</h5>
        <div v-if="comentarios">
          <q-list
            class="rounded-borders"
            v-for="item in comentariosOrdenados"
            :key="item.id"
          >
            <q-item
              :class="{ 'q-mt-lg': item.parent == '' }"
              :style="`margin-left: ${item.margen * 3}rem`"
            >
              <q-item-section
                avatar
                class="comment"
                :class="{ 'comment-top': item.parent != '' }"
              >
                <p class="q-mx-auto">{{ item.author }}</p>
                <p class="q-mx-auto">
                  {{ new Date(item.createdAt * 1000).getDate() }}/{{
                    new Date(item.createdAt * 1000).getMonth() + 1
                  }}/{{ new Date(item.createdAt * 1000).getFullYear() }}
                </p>
              </q-item-section>
              <!-- Si es hijo de otro... -->
              <q-item-section class="q-ml-sm">
                <q-item-label lines="1">
                  <span
                    class="text-h7 q-ml-sm text-bold"
                    v-if="item.parent != ''"
                    >en respuesta a
                    {{
                      comentariosOrdenados[
                        comentariosOrdenados
                          .map(function (e) {
                            return e.id;
                          })
                          .indexOf(parseInt(item.parent))
                      ].author
                    }}</span
                  ></q-item-label
                >
                <q-item-label lines="2" class="text-h8">
                  <p class="q-mt-sm q-ml-sm">{{ item.message }}</p>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div v-else>Por que?</div>
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
  computed: {
    comentariosOrdenados() {
      var ordenados = [];
      for (let index = 0; index < this.comentarios.length; index++) {
        const element = this.comentarios[index];
        // Lógica de colocación de cada elemento
        if (element.parent == "") {
          //Si no tiene parent
          element.margen = 0;
          ordenados.push(element);
        } else {
          // Si tiene parent
          var miparent = element.parent;
          var arrayMismoParent = ordenados.find(function (item) {
            return item.parent == miparent;
          });
          if (arrayMismoParent) {
            //Si existe alguno con su mismo parent
            var pos = ordenados
              .map(function (e) {
                return e.parent;
              })
              .lastIndexOf(element.parent);
            element.margen = ordenados[pos].margen;
            ordenados.splice(pos + 1, 0, element);
          } else {
            // No existe con su mismo parent
            var pos = ordenados
              .map(function (e) {
                return e.id;
              })
              .indexOf(parseInt(element.parent));
            element.margen = ordenados[pos].margen + 1;
            ordenados.splice(pos + 1, 0, element);
          }
        }
      }
      return ordenados;
    },
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
      // console.log(this.comentarios);
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
  border-right: 2px solid gray;
}
.comment-top {
  border-top: 2px solid gray;
}
</style>
