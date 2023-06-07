<template>
  <div>
    <h1>EventBus</h1>
    {{ newArr }}2
    <button @click="onPushdata()">Push</button>
  </div>
</template>

<script>
export default {
  name: "EventBus",
  data() {
    return {
      newObj: [{ name: "Applice", type: "frute" }],
      newArr: [],
    };
  },
  methods: {
    onPushdata() {
      this.newArr.push(100);
    },
  },
  mounted() {
    this.emitter.on("sendList", (list) => {
      console.log("list value- > ", list);
      this.newArr = list;
    });
  },
};
</script>
