<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>Map-getters:{{ counterValue }}</h4>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FileExample",
  components: {},
  data() {
    return {
      title: "Vue.JS Training",
    };
  },
  computed: {
    ...mapGetters({
      counterValue: "getCounter",
    }),
  },
  mounted() {
    this.emitter.on("formInfo", (list) => {
      console.log("list", list);
    });
  },
};
</script>

<style scoped></style>
