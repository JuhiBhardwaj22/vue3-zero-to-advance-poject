<template>
  <div>
    <p>Props:{{ title }}</p>
    <p>{{ msg }}</p>
    <p>{{ value }}</p>
    <p v-show="visible">Boolean</p>

    <h1>Emit</h1>

    <button @click="onSendData()">Send Data to Parent</button>
  </div>
</template>

<script>
export default {
  name: "MyComponentChild",
  props: {
    title: String,
    value: {
      type: Number,
      default: 123,
    },
    visible: Boolean,
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onSAVE() {
      console.log("title", this.title);
    },
    onSendData() {
      this.$emit("getFullName", "Juhi Bhardwaj");
      this.$emit("getNameInfo", "JUhi", "Bhardwaj");
      this.$emit("countData", this.count++);
    },
  },
};
</script>
