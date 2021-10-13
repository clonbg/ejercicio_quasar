<template>
  <q-page class="flex flex-center">
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-for="item in entrys"
      :key="item.id"
    >
      <q-card class="my-card" flat>
        <q-card-section horizontal class="full-height">
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs" v-html="item.title"></div>
            <div class="text-overline text-blue">{{ item.date }}</div>
            <div class="text-overline text-red">
              <span v-for="(tag, index) in item.categorias" :key="index"
                >{{ tag + " " }}
              </span>
            </div>
            <div
              class="text-caption text-grey-10 justify-between"
              v-html="item.description"
            ></div>
            
          </q-card-section>
          
            
          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
          
        </q-card-section>
              <q-btn color="secondary" label="Leer más.."/>
      <q-separator dark />
      </q-card>

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
