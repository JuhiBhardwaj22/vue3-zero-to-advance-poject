<template>
  <div>
    <p>Props:{{ title }}</p>
    <p>{{ msg }}</p>
    <p>{{ value }}</p>
    <p v-show="visible">Boolean</p>
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
    return {};
  },
  methods: {
    onSAVE() {
      console.log("title", this.title);
    },
  },
};
</script>
