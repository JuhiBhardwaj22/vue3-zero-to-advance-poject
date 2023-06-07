<template>
  <div>
    <div class="slot-prop">
      <slot :msg="title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slotprop",
  data() {
    return {
      title: "Full Stack Developer",
    };
  },
};
</script>

<style scoped></style>
