<template>
  <p class="class-binding" :class="`${isStyle ? 'style-true' : 'style-false'}`">
    Stle class Binding
  </p>
  <button @click="onStyleChange()">Show style</button>

  <h1>V-if Example</h1>
  <hr />
  <div v-if="ifExample">
    <p>
      The Lorem ipum filling text is used by graphic designers, programmers and
      printers with the aim of occupying the spaces of a website, an advertising
      product or an editorial production whose final text is not yet ready. This
      expedient serves to get an idea of the finished product that will soon be
      printed or disseminated via digital channels.
    </p>
  </div>
  <div v-else-if="isName">
    <h1>V-else-if</h1>
  </div>
  <div v-else>
    <p>V-else</p>
  </div>

  <button @click="shorIFData()">Show Text</button>
  <h1>V-show Example</h1>
  <hr />
  <div>
    <p>
      The Lorem ipum filling text is used by graphic designers, programmers and
      printers with the aim of occupying the spaces of a website, an advertising
      product or an editorial production whose final text is not yet ready. This
      expedient serves to get an idea of the finished product that will soon be
      printed or disseminated via digital channels.
    </p>
  </div>
  <input v-show="showExample" placeholder="Enter any text" />
  <button @click="onShowExample()">Show data</button>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {},
  data() {
    return {
      isStyle: false,
      ifExample: false,
      showExample: false,
      isName: false,
    };
  },
  methods: {
    onStyleChange() {
      this.isStyle = true;
    },
    shorIFData() {
      this.ifExample = true;
    },
    onShowExample() {
      this.showExample = true;
    },
  },
};
</script>
