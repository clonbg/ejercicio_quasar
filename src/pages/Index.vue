<template>
  <q-page class="flex flex-center q-pt-xl">
    <div
      class="row full-width reverse-wrap q-pa-xl q-px-xl"
      v-for="item in entrys"
      :key="item.id"
    >
      <div class="row full-width q-px-sm q-pt-sm">
        <q-btn color="secondary" label="Leer más.." />
      </div>

      <div class="col-sm-8 q-px-sm">
        <div class="text-h5 q-mt-sm q-mb-xs" v-html="item.title"></div>
        <div class="text-overline text-blue">{{ item.date }}</div>
        <div class="text-overline text-red">
          <span v-for="(tag, index) in item.categorias" :key="index"
            >#/{{ tag + " " }}
          </span>
        </div>
        <div
          class="text-body1 text-grey-10 justify-between"
          v-html="item.description"
        ></div>
      </div>
      <div class="col-sm-4 col-12 q-px-sm">
        <q-img
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { stories } from "../store/blog.json";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      entrys: stories,
    };
  },
  methods: {
    update() {
      console.log(this.entrys[0].id);
    },
  },
  created() {
    this.update();
  },
});
</script>

<style scoped></style>
