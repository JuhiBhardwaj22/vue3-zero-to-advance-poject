<template>
  <div class="parent-div">
    <file-example />
    <div>
      <h5>Computed Property</h5>
      <span>{{
        author.books.length > 0 ? "Greater Than 0" : "Less Than 0"
      }}</span>
      <div>
        <span>{{ bookList }}</span>
      </div>
      <br />
      <div>
        <input
          class="input-area"
          type="text"
          v-model="searchText"
          placeholder="Enter Text Here"
        />
      </div>
      <br />
      <br />
      <div v-for="list in filterData" :key="list.uid">
        <span>{{ list.name }}</span> {{ "  :" }}
        <span>{{ list.uid }}</span>
      </div>
      <h1>{{ user }}</h1>
    </div>
    <h3>{{ count }}</h3>
    <button @click="onClickCount()">CountINC</button>
    <br />
    <br />
    <br />

    <input v-model="textValue" />
    <button @click="onClickValue()">Value</button>
    <ul v-for="item in newArr">
      <input type="text" v-model="newArr" />
    </ul>
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
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      user: "",
      searchText: null,
      userData: [
        {
          name: "Tunde Test",
          uid: "LfhxERlvyfh2auIY0HnpidjJg3L2",
        },
        {
          name: "bola",
          uid: "R6lyXuNwZfc9ztLDfIZBSZLg2QD2",
        },
        {
          uid: " k8ZVBdA9wfetiB8vJV3Qc07NZty1",
          name: "Supreme",
        },
        {
          name: "Mango",
          uid: "LfhxERlvyfh2auIY0HnpidjJg3L2",
        },
        {
          name: "Eamil Mail",
          uid: "R6lyXuNwZfc9ztLDfIZBSZLg2QD2",
        },
        {
          uid: " k8ZVBdA9wfetiB8vJV3Qc07NZty1",
          name: "Dev thakur",
        },
      ],
      count: 0,
      textValue: "",
      newArr: [],
    };
  },
  computed: {
    bookList() {
      return this.author.books.length > 0 ? "Greater Than 0" : "Less Than 0";
    },
    bookListInfo(name) {
      var test = this;
      return name;
    },
    filterData() {
      if (this.searchText) {
        return this.userData.filter((item) => {
          return this.searchText
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.userData;
      }
    },
  },
  watch: {
    searchText(newValue, oldValue) {
      console.log("newValue ->", newValue);
      if (newValue === "Test") {
        this.userData = [];
        this.user = "Value is NIL";
      }
    },
    count(newValue, oldValue) {
      if (newValue === 10) {
        alert("Value is 10");
      }
    },
    newArr(newValue, oldValue) {
      console.log("newValue ->", newValue);
      console.log("oldValue ->", oldValue);
    },
  },
  methods: {
    onClickCount() {
      this.count++;
    },
    onClickValue() {
      this.newArr.push(this.textValue);
      console.log("  this.newArr", this.newArr);
    },
  },
};
</script>

<style scoped>
.input-area {
  width: 310px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
