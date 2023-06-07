<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"> </slot>
    </main>
    <footer>
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "NamedSlot",
};
</script>
<style scoped>
footer {
  border-top: 1px solid rgb(100, 94, 94);
  font-size: 14px;
}
</style>
