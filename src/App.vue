<template>
  <div class="parent-div">
    <file-example />
    <counter />
    <NewComponent />
    <!-- <p>{{ userinfo }}</p> -->
  </div>
</template>

<script>
import FileExample from "./components/FileExample.vue";
import Counter from "./components/counterExample/Counter.vue";
import NewComponent from "./components/header/NewComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { FileExample, Counter, NewComponent },
  props: {},
  data() {
    return {
      title: "Props",
      test: "",
      info: [],
      msg: "",
      dataList: {},
    };
  },
  computed: {
    ...mapGetters({
      userinfo: "getData",
    }),
  },
  watch: {},
  methods: {
    sendData() {
      this.emitter.emit("sendList", [1, 2, 3, 4, 5]);
    },
  },
  mounted() {
    console.log("this.", this.userinfo);
    this.emitter.on("myData", (data) => {
      this.msg = data;
    });
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
