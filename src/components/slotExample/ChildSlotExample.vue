<template>
  <div>
    <div class="container-child-slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChildSlot",
};
</script>

<style scoped>
.container-child-slot {
  height: 200px;
  border: 1px solid;
}
</style>
