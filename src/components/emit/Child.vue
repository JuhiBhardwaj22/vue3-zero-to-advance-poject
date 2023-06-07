<template>
  <div>
    <form @submit.prevent>
      <input type="text" v-model="name" placeholder="Enter name here..." />
      <input type="text" v-model="email" placeholder="Enter email here..." />
      <button type="submit" @click="submitData">Submit</button>
    </form>
    <br />
    <button @click="onSendData()">Send Data</button>
  </div>
</template>
<script>
export default {
  name: "Child",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      title: "Through Event Bus",
    };
  },
  methods: {
    submitData() {
      this.$emit("passData", { name: this.name, email: this.email });
      const data = { name: this.name, email: this.email };
      this.emitter.emit("formInfo", data);
    },
    onSendData() {
      this.emitter.emit("myData", this.title);
    },
  },
};
</script>
