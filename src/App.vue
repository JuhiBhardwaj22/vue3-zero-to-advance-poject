<template>
  <div className="parent-div">
    <FileExampleVue />
    <hr />
    <Home />
    <br />
    <br />
    <span v-for="elm in 10">{{ elm }} {{ " " }}</span>

    <br />
    <br />
    <p v-for="(elm, index) in 5" :key="index">{{ index }} - {{ elm }}</p>
    <br />
    <br />

    <div v-for="(item, index) in items" :key="index">
      <h3>{{ index }}-{{ item }}</h3>
    </div>
    <br />
    <br />

    <div v-for="(emp, index) in myObj" :key="index">
      <h2>{{ emp.empID }}:{{ emp.empName }}:{{ emp.empSalary }}</h2>
    </div>

    <br />
    <div v-for="(elm, key, index) in itemsObj" :key="key">
      <h3>{{ key }} : {{ elm }} {{ index }}</h3>
    </div>
    <br />
    <br />
    <ul v-for="(item, index) in sets" :key="index">
      <li v-for="elm in getEvenData(item)">{{ elm }}</li>
    </ul>

    <div>
      <button @click="getData()">Show API Data</button>
    </div>

    <ul v-for="items in dataList">
      <li>
        {{ items.title }}
      </li>
    </ul>
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
      items: ["Juhi", "ABCD", "EFHG", "IJKL", "MNOP"],
      myObj: [
        { empName: "Juhi", empID: 12, empSalary: 1000 },
        { empName: "Mahi", empID: 13, empSalary: 5000 },
        { empName: "Test", empID: 14, empSalary: 1500 },
        { empName: "Vaishali", empID: 15, empSalary: 2000 },
      ],
      itemsObj: {
        Title: "How to do lists in Vue",
        Author: "Jane Doe",
        PublishedAt: "2016-04-10",
      },
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      dataList: [],
    };
  },
  methods: {
    getEvenData(num) {
      return num.filter((item) => item % 2 === 0);
    },
    async getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.dataList = await data.json();
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
