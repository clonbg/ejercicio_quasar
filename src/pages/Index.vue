<template>
  <q-page>
    <div class="flex flex-center q-pt-xl">
      <div
        class="row full-width reverse-wrap q-pa-xl q-px-xl"
        v-for="item in filtroPaginacion"
        :key="item.id"
        :id="item.id"
      >
        <div class="col-sm-7 q-px-sm full-height">
          <router-link 
          :href="item.id"
          :to="{ path: item.id, params: { markdown: item.id } }"
            ><div class="text-h5 q-mt-sm q-mb-xs" v-html="item.title"></div
          ></router-link>
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
      <div class="flex flex-center q-pa-xl q-mx-auto">
        <q-pagination
          v-model="current"
          :max="Math.floor(entrys.length / 10) + 1"
          input
          input-class="text-orange-10"
          @click="scrollToTop"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
//https://v0-17.quasar-framework.org/components/web-storage.html
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
  computed: {
    filtroPaginacion() {
      var entradas;
      entradas = this.entrys.slice(this.current * 10 - 10, this.current * 10);
      console.log(this.current, entradas);
      return entradas;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.scrollToTop()
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
</style>
