<template>
  <div>
    <p>Vuex - Tutorial</p>
    <h1>Counter : {{ $store.state.counter }}</h1>
    <button @click="increament(3)">Increment</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["increament"]),
    increament() {
      this.$store.state.counter++;
    },
  },
};
</script>
