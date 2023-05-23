<template>
  <div class="parent-div">
    <file-example />
    <input
      class="input-area"
      placeholder="Enter text here..."
      v-model="countNum"
    />
    <button @click="onSetValue()">Add</button>
    <div class="main-div">
      <div>
        <button class="inc-btn" @click="OnIncreament()">+</button>
      </div>
      <div class="count">{{ count }}</div>
      <div>
        <button class="dec-btn" @click="onDecreament()">-</button>
      </div>
    </div>

    <div>
      <p>Mustache template</p>
      <h3>{{ name }}</h3>
    </div>
    <div>
      <h1>V-TEXT</h1>
      <span v-text="vTextExample"></span>
    </div>
    <div>
      <h1>V-HTML</h1>
      <span v-html="test"></span>
    </div>
    <div>
      <h1>V-MODEL</h1>
      <p>{{ searchText }}</p>
      <input
        type="text"
        class="input-area"
        placeholder="Enter search here"
        v-model="searchText"
      />
      <br />
      <h1>V-Bind</h1>
      <p v-bind:id="heading">Testing for V-BIND</p>
      {{ searchText }}
      <input
        type="text"
        class="input-area"
        placeholder="Enter search here"
        v-bind:valueS="searchText"
      />
    </div>
  </div>
</template>

<script>
import FileExample from "./components/FileExample.vue";
export default {
  name: "App",
  components: { FileExample },
  props: {},
  data() {
    return {
      name: "Juhi Bhardwaj",
      vTextExample: "V-TEXT Example",
      test: "<b><p>V-HTML Example</p></b>",
      searchText: "",
      checked: false,
      count: 0,
      countNum: 0,
      heading: "heading_id_1",
    };
  },
  methods: {
    onRoom() {
      this.testNum++;
    },
    OnIncreament() {
      this.count++;
    },
    onDecreament() {
      if (this.count === 0) {
        alert("Please use Increament button now");
      }
      this.count--;
    },
    onSetValue() {
      this.count = this.countNum;
    },
  },
};
</script>

<style scoped>
.input-area {
  margin-left: 10px;
}
.main-div {
  display: flex;
}
.inc-btn,
.dec-btn {
  height: 50px;
  width: 46px;
}
.inc-btn {
  margin-right: 30px;
}
.count {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  margin-right: 30px;
  text-align: center;
  padding-top: 10px;
}
.input-area {
  margin-bottom: 10px;
}
</style>
