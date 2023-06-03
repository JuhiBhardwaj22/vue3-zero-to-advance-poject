<template>
  <div class="parent-div">
    <file-example />
    <h5>{{ title }}</h5>
    <my-component />
    <parent />
  </div>
</template>

<script>
import FileExample from "./components/FileExample.vue";
import MyComponent from "./propComp/MyComponentParent.vue";
import Parent from "./components/emit/Parent.vue";

export default {
  name: "App",
  components: { FileExample, MyComponent, Parent },
  props: {},
  data() {
    return {
      title: "Props",
      test: "",
      info: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // getData() {
    //   this.emitter.on("formInfo", (data) => {
    //     console.log("data", data);
    //   });
    // },
  },
};
</script>

<style scoped>
.input-area {
  width: 310px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
