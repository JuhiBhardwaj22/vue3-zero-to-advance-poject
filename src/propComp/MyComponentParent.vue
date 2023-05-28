<template>
  <div>
    <h4>My-Component</h4>
    <my-component-child />

    <!-- Static -->
    <my-component-child title="This is Child Component" />

    <!-- Dynamic -->
    <my-component-child :msg="msg" />

    <input v-model="count" placeholder="Enter text here" />
    <button @click="onCount()">Submit</button>
    <br />
    <br />
    <br />
    <button @click="onPushdata()">Save</button>

    <!-- Number -->
    <my-component-child :value="count" />

    <!-- Boolean -->
    <my-component-child :visible="isShow" />

    <!-- Array -->
    <my-component-child :list="newArr" />

    <!-- /Multiple props  -->

    <my-component-child :list="newArr" :visible="isShow" :value="count" />
    <h1>Header</h1>

    <MyHeaderComponent />
  </div>
</template>

<script>
import MyComponentChild from "./MyComponentChild.vue";
import MyHeaderComponent from "../components/header/MyComponentChild.vue";

export default {
  name: "MyComponentParent",
  components: { MyComponentChild, MyHeaderComponent },
  data() {
    return {
      msg: "This is Dynamic props",
      count: 0,
      isShow: false,
      newArr: [],
    };
  },
  methods: {
    onCount() {
      this.isShow = true;
      this.count++;
    },
    onPushdata() {
      this.newArr.push(this.count++);
      console.log("this.newArr", this.newArr);
    },
  },
};
</script>
