<template>
  <div class="parent-div">
    <file-example />
    <h5>{{ title }}</h5>
    <my-component />
  </div>
</template>

<script>
import FileExample from "./components/FileExample.vue";
import MyComponent from "./propComp/MyComponentParent.vue";
export default {
  name: "App",
  components: { FileExample, MyComponent },
  props: {},
  data() {
    return {
      title: "Props",
      test: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.input-area {
  width: 310px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
