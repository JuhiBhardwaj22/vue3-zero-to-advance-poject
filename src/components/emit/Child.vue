<template>
  <div>
    <form @submit.prevent>
      <input type="text" v-model="name" placeholder="Enter name here..." />
      <input type="text" v-model="email" placeholder="Enter email here..." />
      <button type="submit" @click="submitData">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Child",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("passData", { name: this.name, email: this.email });
      const data = { name: this.name, email: this.email };
      // this.emitter.emit("formInfo", data);
    },
  },
};
</script>
