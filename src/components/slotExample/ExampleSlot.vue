<template>
  <div>
    <h1>Example Slot</h1>
    <childSlotVue>
      <p><b>Slot Img</b></p>
      <img src="../../assets/vueIcon.png" />
    </childSlotVue>

    <button-component> Save </button-component>
  </div>
</template>
<script>
import childSlotVue from "./childSlot.vue";
import ButtonComponent from "./ButtonComponent.vue";
export default {
  name: "ExampleSlot",
  components: { childSlotVue, ButtonComponent },
};
</script>
<style scoped>
img {
  height: 150px;
}
</style>
