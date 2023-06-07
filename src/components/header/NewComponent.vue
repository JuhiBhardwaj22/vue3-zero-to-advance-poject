<template>
  <div>
    <h1>Vuex New Example</h1>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NewComponent",
  data() {
    return {
      dataList: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions(["getlist"]),
    async getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.dataList = await data.json();
      console.log("this.dataList", this.dataList);
      //Call here action name

      this.getlist(this.dataList);
    },
  },
};
</script>
