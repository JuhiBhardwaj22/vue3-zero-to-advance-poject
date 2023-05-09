<template>
  <div>
    <h1>Home</h1>
    <button @click="showAbout()">Show About</button>
    <div v-show="isAbout">
      <About />
    </div>
  </div>
</template>

<script>
import About from "./About.vue";

export default {
  name: "Home",
  components: { About },
  data() {
    return {
      isAbout: false,
    };
  },
  methods: {
    showAbout() {
      this.isAbout = true;
    },
  },
};
</script>
