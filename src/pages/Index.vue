<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md" v-for="item in entrys" :key="item.id">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { stories } from "../store/blog.json";

export default defineComponent({
  name: "PageIndex",
  data () {
    return {
      entrys: stories
    }
  },
  methods: {
    update(){
      console.log(this.entrys[0].id)
    }
  },
  created() {
    this.update()
  }

  })

</script>

<style scoped></style>
