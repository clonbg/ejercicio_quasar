<template>
  <q-page class="flex flex-center">
    <div>
    <p>Lorem ipsum dolor sit amet?</p>
    <q-img
      :src="'https://placeimg.com/500/300/nature?t=' + Math.random()"
      style="max-height: 140rem; max-width: 200rem"
    ></q-img>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style scoped></style>
