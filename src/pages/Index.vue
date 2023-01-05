<template>
  <q-page>
    <div class="flex flex-center q-pt-xl" v-if="filtroPaginacion.length > 0">
      <div
        class="row full-width reverse-wrap margenes"
        v-for="item in filtroPaginacion"
        :key="item.id"
        :id="item.id"
      >
        <div class="col-sm-7 q-px-sm full-height">
          <router-link
            :href="item.id"
            :to="{ path: item.id, params: { markdown: item.id } }"
          >
            <div class="text-h5 q-mt-sm q-mb-xs" v-html="item.title"></div>
          </router-link>
          <div class="text-overline text-blue">{{ item.date }}</div>
          <div class="text-overline text-red">
            <span v-for="(tag, index) in item.categorias" :key="index"
              >#/{{ tag + " " }}
            </span>
          </div>
          <div class="self-center">
            <div
              class="text-body1 text-grey-10 justify-between"
              v-html="item.description"
            ></div>
            <div class="row full-width">
              <q-btn
                color="secondary"
                label="Leer más.."
                :to="{ path: item.id, params: { markdown: item.id } }"
              >
              </q-btn>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-12 q-px-sm">
          <img
            class="rounded-borders"
            :src="`./../../${item.id}${item.imagen}`"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="flex flex-center q-pa-xl">
        <q-pagination
          v-model="current"
          :max="maxPaginas"
          input
          input-class="text-orange-10"
          @click="scrollToTop"
        />
      </div>
    </div>
    <div class="flex flex-center q-mt-xl q-pt-xl" v-else>
      <p class="text-h6 q-mt-xl q-pt-xl q-mx-md">
        No hay entradas relaccionadas con esta búsqueda
      </p>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import { stories } from "../store/blog.json";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      entrys: stories,
      current: ref(1),
    };
  },
  watch: {
    tamanyoFiltroBusqueda: "resetCurrent",
  },
  computed: {
    tamanyoFiltroBusqueda() {
      return this.filtroBusqueda.length;
    },
    filtroBusqueda() {
      var entradas;
      entradas = this.entrys.filter(
        (post) =>
          this.textoLimpio(post.title).includes(
            this.textoLimpio(this.$store.state.user.busqueda)
          ) ||
          this.textoLimpio(post.description).includes(
            this.textoLimpio(this.$store.state.user.busqueda)
          )
      );
      // return this.products.filter(product => !product.category.indexOf(this.category))
      return entradas;
    },
    filtroPaginacion() {
      var entradas;
      entradas = this.filtroBusqueda.slice(
        this.current * 10 - 10,
        this.current * 10
      );
      //console.log(this.current, entradas);
      return entradas;
    },
    maxPaginas() {
      let num = this.filtroBusqueda.length;
      if (num % 10 == 0) {
        return num / 10;
      } else {
        return Math.floor(num / 10) + 1;
      }
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    textoLimpio(texto) {
      texto = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/<[^>]*>?/g, "");
      return texto.trim();
    },
    resetCurrent() {
      this.current = 1;
      this.scrollToTop();
    },
  },
});
</script>
<style scoped>
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

.margenes {
  padding: 6vh 5vw 6vh 5vw;
}
</style>
