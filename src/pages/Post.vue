<template>
  <q-page class="flex flex-center q-pt-xl">
    <div
      class="row full-width reverse-wrap q-pa-xl q-px-xl"
    >
      <div class="col q-px-sm full-height">
        <q-markdown :src="post" style="font-size:120%"></q-markdown>
      </div>
    </div>
  </q-page>
</template>

<script>
const texto = require(`../markdowns/stories/script-autostart.md`);
export default {
  data() {
    return {
      post: "",
    };
  },
  created() {
    this.post = texto.default;
  },
};
</script>

<style scoped></style>
