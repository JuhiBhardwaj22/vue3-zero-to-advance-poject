<template>
  <div>
    <h1>Form-Parent</h1>
    <Child @passData="getPersonalinfo" />
    <h1>{{ name }}</h1>
    <h2>{{ email }}</h2>
    <event-bus />
  </div>
</template>

<script>
import Child from "./Child.vue";
import EventBus from "./testEventBus/textExample/EventBus.vue";

export default {
  name: "Parent",
  components: { Child, EventBus },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    getPersonalinfo(data) {
      this.name = data.name;
      this.email = data.email;
    },
  },
};
</script>
