<template>
  <q-page class="flex flex-center q-pt-xl">
    <div class="row full-width reverse-wrap q-pa-xl q-px-xl">
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size: 120%"></q-markdown>
        <h5>
          Comentarios<span class="material-icons q-pl-md q-mr-xs"> forum </span
          >{{ comentarios.length > 0 ? comentarios.length : "0" }}
          <span class="material-icons float-right" @click="open('right')"
            >add_circle_outline<q-tooltip> Nuevo comentario </q-tooltip>
          </span>
        </h5>
        <!-- Modal -->
        <q-dialog v-model="dialog" :position="position">
          <q-card>
            <q-card-section class="row items-center no-wrap">
              <div>
                <q-input
                  color="teal"
                  outlined
                  v-model="nombre"
                  label="Nombre"
                  class="q-mt-md"
                >
                  <template v-slot:append>
                    <q-icon name="badge" color="blue" />
                  </template>
                </q-input>
                <q-input
                  color="teal"
                  outlined
                  v-model="correo"
                  label="Correo"
                  class="q-mt-md"
                >
                  <template v-slot:append>
                    <q-icon name="email" color="blue" />
                  </template>
                </q-input>
                <div style="max-width: 300px">
                  <q-input
                    color="teal"
                    outlined
                    v-model="mensaje"
                    label="Mensaje"
                    class="q-mt-md"
                    type="textarea"
                    ><template v-slot:append>
                      <q-icon name="chat_bubble" color="blue" />
                    </template>
                  </q-input>
                  <q-toggle v-model="aceptado" class="q-my-md" /><a
                    href="https://www.boe.es/eli/es/lo/2018/12/05/3/con"
                    target="_blank"
                    class="sinDecorar"
                    >Acepto la Ley de Pretección de Datos</a
                  >
                  <q-btn class="q-my-md" color="primary" label="Enviar" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <div v-if="comentarios">
          <div
            class="rounded-borders"
            v-for="item in comentariosOrdenados"
            :key="item.id"
          >
            <div
              class="row"
              :class="{
                'q-mt-lg': item.parent == '',
                'q-mt-xs': item.parent != '',
              }"
              :style="`margin-left: ${item.margen * 3}vw`"
            >
              <div
                class="comment q-pt-sm q-pr-xs"
                :class="{ 'comment-top': item.parent != '' }"
              >
                <div class="q-mx-auto">{{ item.author }}</div>
                <div class="q-mx-auto">
                  {{ new Date(item.createdAt * 1000).getDate() }}/{{
                    new Date(item.createdAt * 1000).getMonth() + 1
                  }}/{{ new Date(item.createdAt * 1000).getFullYear() }}
                </div>
              </div>
              <!-- Si es hijo de otro... -->
              <div class="q-ml-sm q-pt-sm">
                <div>
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
                  >
                </div>
                <div class="text-h8">
                  <p class="q-mt-sm q-ml-sm">{{ item.message }}</p>
                </div>
              </div>
            </div>
          </div>
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
      dialog: ref(false),
      position: ref("top"),
      nombre: ref(""),
      correo: ref(""),
      mensaje: ref(""),
      aceptado: ref(false),
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
    open(pos) {
      this.position = pos;
      this.dialog = true;
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
  border-right: 2px solid blue;
}
.comment-top {
  border-top: 2px solid blue;
}
.sinDecorar {
  color: black;
  text-decoration: none;
}
</style>
