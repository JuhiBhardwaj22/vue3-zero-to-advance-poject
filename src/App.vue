<template>
  <div className="parent-div">
    <FileExampleVue />
    <p
      class="class-binding"
      :class="`${isStyle ? 'style-true' : 'style-false'}`"
    >
      Stle class Binding
    </p>
    <button @click="onStyleChange()">Show style</button>

    <h1>V-if Example</h1>
    <hr />
    <div v-if="ifExample">
      <p>
        The Lorem ipum filling text is used by graphic designers, programmers
        and printers with the aim of occupying the spaces of a website, an
        advertising product or an editorial production whose final text is not
        yet ready. This expedient serves to get an idea of the finished product
        that will soon be printed or disseminated via digital channels.
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
        The Lorem ipum filling text is used by graphic designers, programmers
        and printers with the aim of occupying the spaces of a website, an
        advertising product or an editorial production whose final text is not
        yet ready. This expedient serves to get an idea of the finished product
        that will soon be printed or disseminated via digital channels.
      </p>
    </div>
    <input v-show="showExample" placeholder="Enter any text" />
    <button @click="onShowExample()">Show data</button>

    <hr />
    <Home />
  </div>
</template>

<script>
import FileExampleVue from "./components/FileExample.vue";
import headertitle from "./components/HeaderTitle.vue";
import Home from "./components/Home/home.vue";

export default {
  name: "App",
  components: { headertitle, FileExampleVue, Home },
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

<style scoped>
.class-binding {
  font-weight: bold;
}
.style-true {
  font-size: x-large;
}
.style-false {
  font-size: x-small;
}
</style>
