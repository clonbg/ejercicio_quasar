<template>
  <q-page class="flex flex-center q-pt-xl">
    <div
      class="row full-width reverse-wrap q-pa-xl q-px-xl"
      v-for="item in entrys"
      :key="item.id"
    >
      <div class="col-sm-7 q-px-sm full-height">
        <div class="text-h5 q-mt-sm q-mb-xs" v-html="item.title"></div>
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
            <q-btn color="secondary" label="Leer más.." :to="{ path: item.id, params: { markdown: item.id } }">
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
  methods: {},
  created() {},
});
</script>

<style scoped></style>
