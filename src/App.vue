<template>
  <div className="parent-div">
    <headertitle />
    <h3>{{ userName }}</h3>
    <h4>Email :- {{ userEmail }}</h4>
    <h4>User-Id : -{{ userId }}</h4>
    <p>{{ count }}</p>
    <span>Inline</span>
    <button class="clk-btn" @click="onShowUserID()">Click Me</button>
    <button class="clk-btn-alrt" @click="onAlert()">Alert</button>
    <div>
      <p>{{ dataList }}</p>
      <button class="show-me-btn" @click="onShowData()">Show Me</button>
    </div>
    <div>
      <p>{{ filterData }}</p>
      <button class="show-me-btn" @click="onFilterData()">Filter List</button>
    </div>
    <FileExampleVue />
  </div>
</template>

<script>
import FileExampleVue from "./components/FileExample.vue";
import headertitle from "./components/HeaderTitle.vue";

export default {
  name: "App",
  components: { headertitle, FileExampleVue },
  props: {},
  data() {
    return {
      userName: "Juhi Bhardwaj",
      userEmail: "juhibhardwaj20@gmail.com",
      userId: "",
      count: 0,
      obj: [
        { name: "Juhi", age: 26 },
        { name: "Mahi", age: 30 },
        { name: "Test", age: 21 },
        { name: "Vaishali", age: 22 },
      ],
      dataList: [],
      filterData: [],
      vIf: true,
    };
  },
  methods: {
    onShowUserID() {
      console.log("this", this);
      this.userId = 1234;
      this.count = 220;
    },
    onAlert() {
      alert("hello world!!");
    },
    onShowData() {
      const newArray = this.obj.map((elm, index, arr) => {
        return elm.name;
      });
      this.dataList = newArray;
      console.log("newArray", newArray);
    },
    onFilterData() {
      const newFilterlist = this.obj.filter((item, index, arr) => {
        return item.age > 22;
      });
      this.filterData = newFilterlist;
      console.log("newFilterlist", newFilterlist);
    },
  },
};
</script>

<style>
.clk-btn {
  color: black;
  border: 1px solid black;
  background-color: royalblue;
}
.clk-btn-alrt {
  margin-left: 10px;
  background-color: royalblue;
}
.show-me-btn {
  background-color: royalblue;
  margin-top: 20px;
}
</style>
