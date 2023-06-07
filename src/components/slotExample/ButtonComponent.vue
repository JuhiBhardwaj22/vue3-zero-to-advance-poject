<template>
  <div>
    <div class="btn-component">
      <button>
        <slot></slot>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ButtonComponent",
};
</script>

<style scoped>
button {
  background-color: green;
  width: 100px;
}
</style>
